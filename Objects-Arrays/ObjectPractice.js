/*

const mySym = Symbol("key1")

const JsUser = {
    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","wednesday"],
    [mySym]:"mykey1"
}

// console.log(JsUser)
// console.log(JsUser["name"]);

// Object.freeze(JsUser); //freezes object so that no value is unchanged
// JsUser.email = "hitesh@chatgpt.com"

JsUser.greeting = function(){
    console.log("hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`); 
    // this keyword uses all the properties within the active object
}
console.log(JsUser.greetingTwo());
// console.log(JsUser)
*/


// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"hitesh",
//             lastname:"singh"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname);


// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}

// const objCombine = {...obj1 , ...obj2}; //mostly used
// // const objCombine = Object.assign({},obj1, obj2); 

// console.log(objCombine)
/*
const tinderUser = {
    id:"123abc",
    name:"sammy",
    isLoggedIn:false
}


const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    
    {
        id:3,
        email:"g@gmail.com"
    },
    
    {
        id:4,
        email:"k@gmail.com"
    }
    ]
    
    
   console.log(users[1].id) 
   
   console.log(Object.keys(tinderUser));
   console.log(Object.values(tinderUser));
   console.log(Object.entries(tinderUser));
   console.log(tinderUser.id.length)
   console.log(tinderUser.hasOwnProperty("id"))
*/