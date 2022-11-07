let cvs = document.getElementById('canvas');
let ctx = cvs.getContext('2d');

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = 'img/bird.png';
fg.src = 'img/fg.png';
bg.src = 'img/bg.png';
pipeBottom.src = 'img/pipeBottom.png';
pipeUp.src = 'img/pipeUp.png';

let fly = new Audio();
let scoreAudio = new Audio();

fly.src = 'audio/fly.mp3';
scoreAudio.src = 'audio/score.mp3';

let xPos = 10;
let yPos = 150;
let gravity = 1;

let score = 0;

let gap = 90;

let pipe = [];

pipe[0]= {
    x: cvs.width,
    y: 0
}

document.addEventListener('keydown', moveUp);

function moveUp() {
    yPos -= 25;
    fly.play();
}

function draw(){
    ctx.drawImage(bg, 0, 0); // drawing background

    for(let i = 0; i < pipe.length; i++){
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); // drawing Upper pipes
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap); // drawing bottom pipes
        pipe[i].x--; // Moving our pipes

        //Generate new pipes
        if(pipe[i].x == 125){
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        // Looking for a touch
        if(xPos + bird.width >= pipe[i].x && 
            xPos <= pipe[i].x + pipeUp.width && 
            (yPos <= pipe[i].y + pipeUp.height || 
                yPos + bird.height >= pipe[i].y + pipeUp.height + gap) ||
                yPos + bird.height >= cvs.height - fg.height){
                    console.log("You fail");
                    return false;
                }
        
        //Score counter
        if(pipe[i].x + Math.floor(pipeUp.width/2) == xPos + Math.floor(bird.width/2)){
            score++;
            scoreAudio.play;
        }
    }

    ctx.drawImage(fg, 0, cvs.height - fg.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += gravity;

    ctx.fillStyle = '#000';
    ctx.font = '24px sans-serif';
    ctx.fillText(`Your score is ${score}`, 10, cvs.height - 20);

    requestAnimationFrame(draw);

    return true;
}

if(true){
    pipeUp.onload = draw;
}