// high order for loops
//video 29
/*
const myArr = [1,2,3,4,5,"batman","flash"];

for (const item of myArr){
    console.log(item)
}


//maps
//Takes unique values
const map = new Map()

map.set('IN',"India");
map.set('USA',"United States of America");

console.log(map)

for (const [key,value] of map){
    console.log(key)
     console.log(value)
}


//does not work on objects

const myObject = {
    game1: "NFS",
    game2: "batman"
}

for (const [key,value] of myObject){
    console.log(key)
     console.log(value)
}
*/

// object loops
//for in loop
/*
const myObject = {
    js: 'javascript',
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const item in myObject){
    console.log(item +"    SHORTCUT   "+myObject[item])
}


//cannot use on maps
const map = new Map()

map.set('IN',"India");
map.set('USA',"United States of America");

for (const item in map){
    console.log(map); 
}



const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( (item) => {
//     console.log(item);
// })



function printme (item){
    console.log(item)
}

coding.forEach(printme);


const coding = ["js","ruby","java","python","cpp"]

coding.forEach( (item,index,array) => {
    
    console.log(item)
    console.log(index)
    console.log(array)
})

const myCoding = [
    {
    name:"jvascript",
    fileName:"js"
    },
    {
    name:"java",
    fileName:"jv"
    },
     {
    name:"python",
    fileName:"py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.name)
})
*/



































