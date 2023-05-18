function firstarr(arr)
{
    let p=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>p)
        {
            p=arr[i];
        }

    }
    return p;
}
const brr=[49,50,69 ,50,100];
let ans=firstarr(brr);
console.log(ans);