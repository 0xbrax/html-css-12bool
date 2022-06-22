function playCoachella() {
    var play = document.getElementById("play-btn");
    var pause = document.getElementById("pause-btn");
    var vinyl = document.getElementById("img-vinyl");
    var current = document.getElementById("img-layover");
    let soundbar = document.querySelectorAll(".sfx-1-l, .sfx-1-r, .sfx-2-l, .sfx-2-r, .sfx-3-l, .sfx-3-r, .sfx-4-l, .sfx-4-r");
    soundbar.forEach(soundbar => {
        console.log(soundbar);
        soundbar.style.animationPlayState = "running";})
    if (play.style.display = "block") {
        play.style.display = "none";
        pause.style.display = "block";
        vinyl.style.animationPlayState = "running";
        current.style.animationPlayState = "running";             
    }
}

function pauseCoachella() {
    var play = document.getElementById("play-btn");
    var pause = document.getElementById("pause-btn");
    var vinyl = document.getElementById("img-vinyl");
    var current = document.getElementById("img-layover");
    let soundbar = document.querySelectorAll(".sfx-1-l, .sfx-1-r, .sfx-2-l, .sfx-2-r, .sfx-3-l, .sfx-3-r, .sfx-4-l, .sfx-4-r");
    soundbar.forEach(soundbar => {
        console.log(soundbar);
        soundbar.style.animationPlayState = "paused";})
    if (pause.style.display = "block") {
        pause.style.display = "none";
        play.style.display = "block";
        vinyl.style.animationPlayState = "paused";
        current.style.animationPlayState = "paused";             
    }
}