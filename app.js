
    var msec = 0;
    var sec = 0;
    var min = 0;
    var hour = 0;
    var msecHeading = document.getElementById("msec");
    var secHeading = document.getElementById("sec");
    var minHeading = document.getElementById("min");
    var hourHeading = document.getElementById("hour");
    var interval;


function timer(){
    msec++;
    msecHeading.innerHTML = msec;

if(msec>=100){
    sec++;
    msec = 0;

    if(sec <=9){
        secHeading.innerHTML = "0"+sec;
    }else{
        secHeading.innerHTML = sec;
    }
}
else if(sec>=60){
    min++;
    minHeading.innerHTML = min;
    sec = 0;
    
    if(min <=9){
        minHeading.innerHTML = "0"+min;
    }else{
        minHeading.innerHTML = min;
    }
}
else if(min>=60){
    hour++;
    hourHeading.innerHTML = hour;
    min = 0;
    
    if(hour <=9){
        hourHeading.innerHTML = "0"+hour;
    }else{
        hourHeading.innerHTML = hour;
    }
}
}

function start(){
interval = setInterval(timer,10)
 document.getElementById("start").disabled = true
}

function pause(){
    clearInterval(interval)
    document.getElementById("start").disabled = false
}

function reset(){
     msec = "00";
     sec = "00";
     min = "00";
     hour = "00";
     msecHeading.innerHTML = msec;
     secHeading.innerHTML = sec;
     minHeading.innerHTML = min;
     hourHeading.innerHTML = hour;
    clearInterval(interval)
    document.getElementById("start").disabled = false
}
