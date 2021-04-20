

function setup() {
    video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 550)
canvas.possition(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log('poseNet Is Initialized!')
}


function gotPoses(results)
{
    if(results.length > 0)
    {


    }
}

function draw() {
    background('#969A97');
}