const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 60,
minValue = 30,
hourValue = 12,
dayValue = 374;

const timeFunction = setInterval(() => {
    secValue--;
    if(secValue == 0){
        minValue--;
        secValue = 60;
    }
    if(minValue == 0){
        hourValue--;
        minValue = 60;
    }
    if(hourValue == 0){
        dayValue--;
        hourValue = 20;
    }
    if(dayValue == 0){
        clearInterval(timeFunction);
    }
    seconds.textContent = secValue; 
    minutes.textContent = minValue;
    hours.textContent = hourValue;
    days.textContent = dayValue;

},1000)