var ecount=0;
var ocount=0;
for(var i=10;i<=55;i++)
{
    if(i%2==0)
        ecount++;
    else
        ocount++;
}
console.log("Total no. of even numbers between 10 and 55 are " +ecount);
console.log("Total no. of odd numbers between 10 and 55 are " +ocount);