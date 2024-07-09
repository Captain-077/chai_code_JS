const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // console.log(e.target)
        console.log(e.target.id)
        body.style.backgroundColor = e.target.id

        // switch (e.target.id) {

        //     case "grey":
        //        return body.style.backgroundColor = e.target.id;

        //     default: console.log("not found")



        // }
    });

});