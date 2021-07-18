/* ------------------- Problem Statement ---------------------------------------
Given two numbers a and b seperated by a space, print a multiples of b.

Input Description:
Two no.s a and b will be given.

Output Description:
Print "a" no. of multiples of "b".

Sample Input :
6 7
Sample Output :
7 14 21 28 35 42
-----------------------------------------------------------------------------*/

// Solution
let nums = "6 7".split(" ")
let no_of_multiples = +nums[0]
let multiples_of = +nums[1]
let result = []

for (let i = 1; i<=no_of_multiples; i++){
    result.push(multiples_of * i)
}
console.log(result.join(" "))