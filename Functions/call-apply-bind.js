/*
let name = {
    firstname:"akshay",
    lastname:"saini",
    printFullName: function (){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

// name.printFullName();

let name2 = {
    firstname:"Sachin",
    lastname:"Aila"
}


name.printFullName.call(name2);
*/
 
let printFullName = function (hometown){
    console.log(`${this.firstname} ${this.lastname} ${hometown}`)
        }
        
        let name2 = {
        firstname:"Sachin",
        lastname:"Aila"
    }
    
    
        
    // function borrowing/call method
    printFullName.call(name2,"Delhi") //this variable and normal arguments after that.. 
    
    // apply  
    //same as above only difference is we pass the second argument as an array list.. 
    printFullName.apply(name2,["Delhi"])
    
    // bind
    //does not fire the function
    //gives you copy of the same function for future use
    let printMyname = printFullName.bind(name2,"Mumbai")
    printMyname();
    