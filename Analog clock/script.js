

setInterval(() => {
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    hour_rotation = (30*hours) + (minutes/2)
    minute_rotation = 6*minutes
    second_rotation = 6*seconds

    hour.style.transform = `rotate(${hour_rotation}deg)`
    minute.style.transform = `rotate(${minute_rotation}deg)`
    second.style.transform = `rotate(${second_rotation}deg)`
}, 1000)