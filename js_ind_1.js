// source: https://youtu.be/EWv2jnhZErc


const hrE1= document.getElementById("hours")
const minE1= document.getElementById("minutes")
const secE1= document.getElementById("seconds")
const ampmE1= document.getElementById("ampm")


function updateClock0(){

    let h = new Date().getHours()
    let m= new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm0 = "AM"

    if (h > 12){
        h = h - 12
        ampm0 = "PM"
    }

    h = h < 10 ? "0" + h : h // select all and change at once using ctrl+D after selection
    m = m < 10 ? "0" + m : m 
    s = s < 10 ? "0" + s : s 

    hrE1.innerText = h
    minE1.innerText= m
    secE1.innerText = s
    ampmE1.innerText = ampm0

    setTimeout(()=>updateClock0(),1000)
    // setTimeout for funciton, timer (1 sec here = 1000ms)
}
updateClock0();
