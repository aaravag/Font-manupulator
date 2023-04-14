
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);           
    video.size(550,500);               
    canvas = createCanvas(550,410);
    canvas.position(800,150);
    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#00FFFF');
    document.getElementById("square_side").innerHTML = " width and hieght of the square is equal to difference" + difference + " px";
    textSize(difference);
    fill('#F90093');
    text('Peter',50,400);
}

function modeLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x;
     difference = floor(leftWristX - rightWristX);
}
}
