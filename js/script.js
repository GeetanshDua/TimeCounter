let timeElement = document.querySelector('#time');

//functions
let startbtn = document.querySelector('#startbtn');
let pausebtn = document.querySelector('#pausebtn');
let resumebtn = document.querySelector('#resumebtn');
let stopbtn = document.querySelector('#stopbtn');

//add time
let fifteenSec = document.querySelector('#fifteenSec');
let thirtySec = document.querySelector('#thirtySec');
let oneMin = document.querySelector('#oneMin');
let fifteenMin = document.querySelector('#fifteenMin');

let timePaused = false;
let initialTime = 15;
let intervalId;


pausebtn.disabled = true;
resumebtn.disabled = true;
stopbtn.disabled = false;

const countDown = () => {
    timeElement.innerText = initialTime;
    let time = parseInt(timeElement.innerText);

    // Clear any existing interval before starting a new one to avoid multiple intervals running
    clearInterval(intervalId);

    intervalId = setInterval(() => {
        if (time <= 0) {
            clearInterval(intervalId); // Clear the interval when time runs out
            timeElement.innerText = "Time Finished!";
            initialTime = 0;
            startbtn.disabled = false;
            pausebtn.disabled = true;
            resumebtn.disabled = true;
            stopbtn.disabled = true;
        } else if (!timePaused) {
            time--;
            timeElement.innerText = time;
        }
    }, 1000);

    //button disable
    startbtn.disabled = true;
    pausebtn.disabled = false;
    resumebtn.disabled = true;
    stopbtn.disabled = false;
};

const resumeTimer = () => {
    timePaused = false;

    startbtn.disabled = true;
    pausebtn.disabled = false;
    resumebtn.disabled = true;
    stopbtn.disabled = false;
};

const pauseTimer = () => {
    timePaused = true;

    startbtn.disabled = true;
    pausebtn.disabled = true;
    resumebtn.disabled = false;
    stopbtn.disabled = false;
};

const stopTimer = () => {
    // Clear the existing interval
    clearInterval(intervalId);

    // Reset the displayed time to its initial value
    timeElement.innerText = initialTime; // Or whatever your initial time is

    // Reset the timePaused flag
    timePaused = false;

    initialTime = 0;
    timeElement.innerText = initialTime;

    startbtn.disabled = false;
    pausebtn.disabled = true;
    resumebtn.disabled = true;
    stopbtn.disabled = true;
};

// Initialize the timer with the initial value
timeElement.innerText = initialTime; // Or whatever your initial time is

startbtn.addEventListener('click', countDown);
resumebtn.addEventListener('click', resumeTimer);
pausebtn.addEventListener('click', pauseTimer);
stopbtn.addEventListener('click', stopTimer);

fifteenSec.addEventListener('click', () => {
    initialTime = initialTime + 15;
    timeElement.innerText = initialTime;
    stopbtn.disabled = false;
});

thirtySec.addEventListener('click', () => {
    initialTime = initialTime + 30;
    timeElement.innerText = initialTime;
    stopbtn.disabled = false;
})

oneMin.addEventListener('click', () => {
    initialTime = initialTime + 60;
    timeElement.innerText = initialTime;
    stopbtn.disabled = false;
})

fifteenMin.addEventListener('click', () => {
    initialTime = initialTime + 900;
    timeElement.innerText = initialTime;
    stopbtn.disabled = false;
})