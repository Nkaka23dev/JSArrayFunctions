numbers = [1,-2,3,4,5,6,7]; 

const res = numbers.every((item) => {
 return item > 0; 
}) 

// console.log(res)  

persons = [
    {
        name: 'Nkaka'
    },
    {
        name: 'Valence'
    }, 
    {
        name: 'Hey!'
    }, 
    {
        name: 'Doing'
    }, 
    {
        surname: 'MyName'
    }

]  

console.log(persons.every((person) => person.name !==undefined));



