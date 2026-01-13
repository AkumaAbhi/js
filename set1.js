//1.sum of n natural numbers
function sumOfNNaturalNumbers(n) {
    let i=0
    for(a=0;a<=n;a++){
        i=i+a
    }
    return i
 return n*(n+1)/2
}
console.log(sumOfNNaturalNumbers(5))

// 2.sum of digits of numbers
function sumOfDigits(n) {
 let i =0,a=0
    while(n>0){
        a=n%10
        i=i+1
        n=Math.floor(n/10) //check math functions
    }
    return parseInt(i)
}
console.log(sumOfDigits(1287))
//3.fibonacci
function fibonacci(n) {
    let i=0, prev =1, c
    for(a=1;a<=n;a++){
    c=i+prev
    prev=i
    i=c
    }
    return c
 return n*(n+1)/2
}
console.log(fibonacci(13))
