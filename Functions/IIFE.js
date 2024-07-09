//video 24
//Immediately Invoked Function Expressions IIFE
//Two protect function from global scope pollution
// ; is important after writing IIFE function;

(function chai(){ //named IIFE
    console.log(`DB Connected`)
})();

( (name) => { //Unnamed IIFE
    console.log(`DB Connected Two ${name}`)
})('nakul')