// numbers = [1,2,3,4,5] 

// var sum = 0; 

// numbers.forEach(item => {
//     // console.log(`a[${index}] = [${item}]`)
//     sum += item 
// }); 
// console.log(sum)  

letters = ['a','b', 'c','a','c','a','b','a','c']; 

count = {}; 
letters.forEach(item => {
    if(count[item]) {
     count[item]++;
    }else {
        count[item] = 1
    }
}); 

console.log(count)

