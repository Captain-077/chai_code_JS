const stop = document.querySelector("#stop");
const start = document.querySelector("#start");

//generate colors

function randomColor(){
const hex = "0123456789ABCDEF"
let color = "#"

for(i=0;i < 6;i++){
    color += hex[Math.floor(Math.random() * 16)]
    
}
console.log(color)
return color

}

let intervalID
const startChangingColor  = () => {
    start.style.display = "none";
    stop.style.margin = "0";
let changeBgColor = () =>  document.body.style.backgroundColor = randomColor();
intervalID = setInterval(changeBgColor,1000);

}


const stopChangingColor = () => {
    clearInterval(intervalID);
    intervalID = null;
    start.style.display = "inline-block";
    stop.style.margin = "0 0 0 30px";
}

start.addEventListener("click",startChangingColor)
stop.addEventListener("click",stopChangingColor)