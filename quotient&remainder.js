/*----------------------Problem Statement---------------------------------
Given two numbers n and m find the Quotient and remainder

Input Description:
0<n<10000 0<m<10000 Given two numbers separated by a space

Output Description:
Need to print Quotient and remainder separated by a space

Sample Input :
10 5
Sample Output :
2 0
------------------------------------------------------------------------*/

// Solution
let n = 7
let m = 54
console.log(Math.trunc(n / m), Math.trunc(n % m));