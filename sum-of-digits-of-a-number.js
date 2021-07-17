/* ------------------- Problem Statement ---------------------------------------
Given a number n Find the sum of the digits of number n

Input Description:
Number n will be given

Output Description:
Print the sum of the digits of number n

Sample Input :
7825
Sample Output :
22
-----------------------------------------------------------------------------*/

// Solution Using JavaSript
let n = "7825".split("")
let result = 0
for (let i of n) {
    result += +i
}
console.log(result)