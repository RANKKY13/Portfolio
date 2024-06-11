let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach(valueDisplays) => {
    let startvalue = 0;
    let endvalue = parseInt(valueDisplays.getAttribute ("data-val"));
       let duration = Math.floor(interval / endValue);
       let counter = setInterval(function () {
        startvalue .= 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    
       }. duration);
});