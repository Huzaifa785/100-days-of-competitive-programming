/*----------------------Problem Statement---------------------------------
Given a number n followed by n numbers find whether it is odd or even

Input Description:
0<n<100 Given a number n Followed by n number in next line

Output Description:
Print whether odd or even

Sample Input :
3
5 7 4
Sample Output :
odd odd even
------------------------------------------------------------------------*/

// Solution 👇
let n = 4
let nums = [4, 7, 8, 12]
let res = []
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 !== 0 && n < 100){
        res.push("odd")
    } else if (nums[i] % 2 === 0 && n < 100){
        res.push("even")
    }
}
let finalRes = res.join(" ")
console.log(finalRes)