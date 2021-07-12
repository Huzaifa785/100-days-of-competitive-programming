/* ------------------- Problem Statement ---------------------------------------
Given a number n followed by n numbers Find the sum of the elements in an array

Input Description:
0<n<100 Given a number n Followed by n number in next line

Output Description:
Print the sum of the elements in an array

Sample Input :
3
5 7 4
Sample Output :
16
-----------------------------------------------------------------------------*/

// Solution Using JavaSript
let n = 3
let n_nos = "1 2 3"
let nums = n_nos.split(" ")
let sum = 0
for (let i = 0; i < nums.length; i++) {
    sum = sum + parseInt(nums[i])
}
console.log(sum)