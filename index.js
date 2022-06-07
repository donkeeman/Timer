const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const pauseButton = document.querySelector("#pauseButton");

let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

let time;
let intervalID;

if(time === 0){
    startButton.disabled = true;
    resetButton.disabled = true;
}
else{
    startButton.disabled = false;
    resetButton.disabled = false;
}

if(startButton.disabled){
    startButton.firstElementChild.src = "./img/start-disabled.png";
}
else{
    startButton.firstElementChild.src = "./img/start-default.png";
}

if(resetButton.disabled){
    resetButton.firstElementChild.src = "./img/reset-disabled.png";
}
else{
    resetButton.firstElementChild.src = "./img/reset-default.png";
}

document.addEventListener("load",
    displayTime(0))

startButton.addEventListener("click", ()=>{
    time = parseInt(hrs.value)*60*60 + parseInt(min.value)*60 + parseInt(sec.value);
    if(startButton.disabled == false && time !== 0){
        startButton.classList.add("hide");
        pauseButton.classList.remove("hide");
        intervalID = setInterval(() => {
            time--;
            displayTime(time);
            if(time === 0){
                stopTime();
            }
        }, 1000);
    }
});

pauseButton.addEventListener("click", () => {
    console.log("clicked");
    stopTime();
});

resetButton.addEventListener("click", () => {
    stopTime();
    displayTime(0);
});

function displayTime(time){
    hrs.value = zeroPad2(parseInt(time/60/60));
    min.value = zeroPad2(parseInt(time/60%60));
    sec.value = zeroPad2(parseInt(time%60%60));
}

function stopTime(){
    clearInterval(intervalID);
    startButton.classList.remove("hide");
    pauseButton.classList.add("hide");
}

function zeroPad2(num){
    return ("0"+num).slice(-2);
}