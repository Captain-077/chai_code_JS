// functions
/*
function sayMyName(){
    console.log("H");
      console.log("I");
        console.log("T");
          console.log("E");
            console.log("S");
            console.log("H");
}

//sayMyName() //call only 

function addTwoNumbers(number1,number2) //parameters
{
if(typeof number1 === "number" && typeof number2 === "number"){
    console.log(number1 + number2)
    }
    else{
         console.log("Invalid Data")
    }
}



function addTwoNumbers(number1,number2) //parameters
{
//   let result = number1 + number2
//   return result
     return number1 + number2
}

const result = addTwoNumbers(1,2) //arguments

console.log(result)


function loginUserMessage(username){
     return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"));


function loginUserMessage(username = "sam"){
    
    if(!username){
        return `please enter a username`
    }
    else{
     return `${username} just logged in`
    }
}
 
console.log(loginUserMessage());


//-------------------------video 20--------------------


//rest operator in function
/*
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,500,400,500));


const user = {
    username:"hitesh",
    price:199
}

//=================Objects

function handleObject(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObject(user);
handleObject({
    username:"hitesh",
    price:199
});

////===============Array

const newArr = [200,400,100,600]

function handleArr(anyArr,...restArr){
    console.log(`username is ${anyArr} and price is ${restArr}`)
}

handleArr(newArr,200)

//==========

const newArr = [200,400,100,600]

function handleArr(getArr){
    return getArr[0]
}

// console.log(handleArr(newArr));
console.log(handleArr([200,400,100,600]));

*/


