const timeBox = document.querySelector("#time");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const milliseconds = document.querySelector("#milliseconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
let startIntervalID;
let msec = 0;
let sec = 0;
let min =0;
let hour =0;

const resetEventFunction = function(){
    clearInterval(startIntervalID);
    startIntervalID = null;
    msec = 0;
    sec = 0;
    min =0;
    hour =0;
    milliseconds.innerText = "00";
    seconds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
    if(startButton.innerText === "Resume"){
        startButton.innerText = "Start";
    }

}



const startEventFunction = function() {
    if(!startIntervalID || startButton.innerText === "Resume"){
        if(startButton.innerText === "Resume"){
            startButton.innerText = "Start";
        }
        startIntervalID = setInterval(()=>{
            if(msec>=99){
                msec=0;
                if(sec>=59){
                    sec=0;
                    if(min>=59){
                        hour += 1;
                        min=0;
                    }else{
                        min += 1;
                    }
                }else{
                    sec += 1;
                }
            }else{
                msec += 1;
            }

            if(msec < 10){
                milliseconds.innerText = `0${msec}`;
            }else{
                milliseconds.innerText = msec;
            }
            if(sec<10){
                seconds.innerText = `0${sec}`;
            }else{
                seconds.innerText = sec;
            }
            if(min<10){
                minutes.innerText = `0${min}`;
            }else{
                minutes.innerText = min;
            }
            if(hour<10){
                hours.innerText = `0${hour}`;
            }else{
                hours.innerText = hour;
            }
        },10);
    }

}

const stopEventFunction = function() {
    clearInterval(startIntervalID);
    if(startButton.innerText === "Start"){
        startButton.innerText = "Resume";
    }

}


startButton.addEventListener("click",startEventFunction);
stopButton.addEventListener("click",stopEventFunction);
resetButton.addEventListener("click",resetEventFunction);