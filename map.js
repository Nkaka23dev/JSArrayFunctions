numbers = [3,4,5,7,2,8,9,10]; 

const numbertriple = numbers.map((item) => {
    return item*3;
}) 

// console.log(numbertriple) 



const numberindex = numbers.map((item, index) => {
    return item*index;
}) 

// console.log(numberindex) 

const prices = [
    {
        name: 'Laptop', 
        price: 1977, 
        count: 3
    }, 
    {
        name: 'Desktop', 
        price: 3900, 
        count: 7
    }, 
    {
        name: 'HP i23', 
        price: 7543, 
        count: 8
    }
] 

const totalPrice = prices.map(item => ({
    Name: item.name,
    Total: item.price*item.count
})); 
// console.log(totalPrice); 

const stringNumbers = ['1','2','3','4','5','6']; 

const newNumbers = stringNumbers.map(Number) 
console.log(newNumbers);