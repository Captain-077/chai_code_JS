const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: {
        wrongage:50,
        rightage:20
    }
};

const { firstName, lastName,age:{wrongage:hello,rightage},occupation = "developer" } = person;

// console.log(firstName); // Output: John
// console.log(lastName);  // Output: Doe
// console.log(myage);
// console.log(occupation);

console.log(hello);
