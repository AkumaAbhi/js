function maxElement(num){
    let   max =num[0],tlargest=num[0],slarge=num[0]
    for(let i=1;i<num.length;i++){
      
        if(max<num[i]) {
            tlargest =slarge
            slarge = max
            max = num[i]
        }
        else if(slarge<max && num[i]<max){
      tlargest =slarge
            slarge = max
    }
        else if(tlargest>num[i] && num[i]>slarge )  tlargest = num[i]
           
        console.log(tlargest)

    }

    return tlargest
}
const num =  [3, 100, 50, 9, 8]

console.log(maxElement(num))