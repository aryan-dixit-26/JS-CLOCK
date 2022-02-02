setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock(){
    const dateAndTime = new Date();
    const secondRatio = dateAndTime.getSeconds()/ 60;
    const minuteRatio = (secondRatio + dateAndTime.getMinutes())/ 60; //chge
    const hourRatio = (minuteRatio + dateAndTime.getHours())/ 12;

    setRotation(secondHand, secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
    
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();
