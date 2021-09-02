//prepare header
var CURRENT_MONTH = new Date('August 2021');
var monthName = CURRENT_MONTH.toLocaleString('en', { month: 'long' })

document.querySelector('.page-header-icon').style.display = 'none';
document.querySelector('header h1').innerHTML = `Activity log ${monthName} - Dumitru Moțpan`

// filter and reorder table rows
var elements = document.querySelectorAll('tbody tr');
var entries = [];

for (var i = 0; i < elements.length; i++) {
    const dateStr = elements[i].querySelector('time')?.innerHTML || '';
    const title = elements[i].querySelector('.cell-title')?.textContent || '';

    entries.push({
        element: elements[i],
        date: new Date(dateStr.replace('@', '')),
        dateStr,
        isVacation: title === 'Vacation',
    })
}

var currentMonthNumber = CURRENT_MONTH.getMonth();

// Filter by current month
entries = entries.filter(item => item.date.getMonth() === currentMonthNumber);

// order by date ascending
entries = entries.sort((a, b) => a.date - b.date);


var newChildren = [];
entries.forEach(item => {
    newChildren.push(item.element);
})
document.querySelector('tbody').replaceChildren(...newChildren);


var workDays = entries
    .reduce((accSet, curr) => {
        if (!curr.isVacation) {
            accSet.add(curr.dateStr);
        }
        return accSet;
    }, new Set())
    .size;

const footer = document.createElement('footer');
footer.textContent = `Working days: ${workDays}`;
footer.style.fontSize = '22px';
footer.style.marginTop = '16px';

document.querySelector('article').append(footer);
