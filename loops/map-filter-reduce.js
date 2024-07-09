
/*
const coding = ["js","ruby","java","python","cpp"]


//does not return anything
//can't use any condition directly
//we have to use if for necessary conditions

const values = coding.forEach( (item) => {
    console.log(item);
})

console.log(values);

 



// const myCoding = [
//     {
//     name:"jvascript",
//     fileName:"js"
//     },
//     {
//     name:"java",
//     fileName:"jv"
//     },
//      {
//     name:"python",
//     fileName:"py"
//     }
// ]




//-----------------------------------filter-----------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10]

const result = myNums.filter( (item) => item > 4)

console.log(result)

const newNums = []

//same with for Each
myNums.forEach( (item) => {
    if(item > 4){
         newNums.push(item)
    }
} )

console.log(newNums)



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => {
    return bk.genre === "History"
})

const userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

// console.log(userBooks)
console.log(userBooks2)
*/

/*
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => {
    return bk.genre === "History"
})

const userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

// console.log(userBooks)
console.log(userBooks2)














//-------------------------------------Map-------------------------------------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map( (num) => num + 10)

//chaining 
//using map filter and reduce together
const newNums = myNumbers.map( (num) => num * 10).map((num) => num + 1).filter( (num) => num > 40)

console.log(newNums);













//------------------reduce----------------

const myNumbers = [1,2,3];


const myTotal = myNumbers.reduce((acc,crr) => {
    console.log(`Acc: ${acc} and crr: ${crr}`)
    return acc + crr
   
},0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


// const Total = shoppingCart.reduce((acc,crr) => {
//     // console.log(`Acc: ${acc} and crr: ${crr}`)
//     return acc + crr.price
// },0)

// console.log(Total)
const Total = shoppingCart.filter( (item) => {
    return  item.price > 3000
}).reduce((acc,crr) => {
    // console.log(`Acc: ${acc} and crr: ${crr}`)
    return acc + crr.price
},0)



console.log(Total)
*/























































