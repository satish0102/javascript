function Solve(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
const brr = [10, 20, 51, 90, 54, 89, 32];
const target = 54;
let ans = Solve(brr, target);
console.log(ans);
