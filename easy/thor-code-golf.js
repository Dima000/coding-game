[x,y,X,Y]=readline().split` `
h=X-x
v=Y-y
i=h>0?h:-h
j=v>0?v:-v
a=(a,b,c,d)=>a>0?b>0?c:d:''
while(i>0||j>0)print(a(j--,v,'N','S')+a(i--,h,'E','W'))