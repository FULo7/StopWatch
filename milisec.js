const stopWatch = document.querySelector(".stopWatch")
const aaa= document.querySelector(".mls")
const start = document.querySelector(".start")
const pause = document.querySelector(".pause")
const ctn = document.querySelector(".ctn")
const restart = document.querySelector(".restart")


let sec =0,min =0 ,hours=0,mls =0;
const myFunction= () =>{
    mls +=1;
    if(mls === 1000) {
        mls=0
        sec+=1;
        if(sec === 60 ){
            sec =0;
            min +=1
            if(min === 60){
                min = 0;
                hours += 1
            }
        }
    }
    const secText = sec < 10 ? "0"+sec.toString() : sec;
    const minText = min < 10 ? "0"+min.toString() : min;
    const hoursText = hours < 10 ? "0"+hours.toString() : hours;
    const mlsText = mls < 10 ? "0"+mls.toString() : mls ;
    stopWatch.textContent = hoursText+":"+minText+":"+secText
    aaa.textContent = mlsText
    console.log(hoursText,minText,secText,mlsText);
}
let interval;
start.addEventListener("click",()=>{
    interval =setInterval(myFunction,1)
})
pause.addEventListener("click",()=>{
    clearInterval(interval)
})
ctn.addEventListener("click",()=>{
    clearInterval(interval)
    interval =setInterval(myFunction,1)
})
restart.addEventListener("click",()=>{
    clearInterval(interval)
    mls=0;
    sec =0 ;
    min =0;
    hours=0;
    interval =setInterval(myFunction,1)
})