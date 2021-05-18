setInterval (() => {
    const hand1  = document.querySelector(".hand1 ")
    const hand2  = document.querySelector(".hand2 ")
    const hand3 = document.querySelector(".hand3 ")
    getDate = new Date()
    hTime = getDate.getHours()
    mTime = getDate.getMinutes()
    sTime = getDate.getSeconds()
    // timeIs = ` ${hTime}:${mTime}:${sTime}`

    hRotation = 30*hTime + mTime/2
    mRotation = 6*mTime
    sRotation = 6*sTime
    // console.log(sRotation)
    hand1.style.transform = `rotate(${hRotation}deg)` 
    hand2.style.transform = `rotate(${mRotation}deg)` 
    hand3.style.transform = `rotate(${sRotation}deg)` 
     

}, 1000)