function solve(arr,target)
{
    for(let i=0;i<arr.lenght;i++)
    {

        if(arr[i] === target)
        {
            return i;
        }
    }
    return -1;
}

const arr=[20,30,11,50,80,55,88];
let target=11;
let ans=solve(arr,target);
console.log(ans);
