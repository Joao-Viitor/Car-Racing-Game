alert("Are You Ready for start game.....!!!!!");

let count = 0;
setInterval(myInterval, 1);

function myInterval(){
    count++;
    let race = document.getElementById("score").innerHTML = count++;
}

function Left(){
    let a = document.getElementById('car');
    a.style.left = 250 + 'px';
    a.style.transition = "1.5s";
}

function Right(){
    let b = document.getElementById('car');
    b.style.left = 800 + 'px';
    b.style.transition = '1.5s';
}

setintervarl(myfunction, 100);

function myfunction(){
    alert("Are You Ready for start game.....!!!!!");
}

clearInterval(myfunction, 200);

function car(){
    let car = document.getElementById("redcar");
    let frontcar = document.getElementById("frontcar");

    if(car.value == frontcar.value){
        alert('Game Over <br> Restart Game.....!!!!!');
    }
}