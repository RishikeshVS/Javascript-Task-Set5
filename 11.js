var arr=[2,6,5,10,89,50,77,100,43];
console.log("The numbers which are divisble by 5 are:")
for(i=0;i<arr.length-1;i++)
{
    if (arr[i]%5==0)
    {
        console.log(arr[i]);
    }
}