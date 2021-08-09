//prepare header
var CURRENT_MONTH = new Date('July 2021');
var monthName = CURRENT_MONTH.toLocaleString('en', {month: 'long'})

document.querySelector('.page-header-icon').style.display = 'none';
document.querySelector('header h1').innerHTML = `Activity log ${monthName} - Dumitru Moțpan`

// filter and reorder table rows
var elements = document.querySelectorAll('tbody tr');
var order = [];

for (var i = 0; i < elements.length; i++) {
    const dateStr = elements[i].querySelector('time')?.innerHTML || '';

    order.push({
        element: elements[i],
        date: new Date(dateStr.replace('@', ''))
    })
}

var currentMonthNumber = CURRENT_MONTH.getMonth();

// Filter by current month
order = order.filter(item => item.date.getMonth() === currentMonthNumber);

// order by date ascending
order = order.sort((a, b) => a.date - b.date);


var newChildren = [];
order.forEach(item => {
    newChildren.push(item.element);
})
document.querySelector('tbody').replaceChildren(...newChildren);

