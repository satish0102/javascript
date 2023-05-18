function reveresString(str)
{
     let temp="";
    for(let i=0;i<str.length;i++)
    {
        temp+=str[str.length-i-1];

    }
    return temp;
}
let name="rajubhai";
let ans=reveresString(name);
console.log(ans);