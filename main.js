posex=0;
posey=0;
rightwrist=0;
leftwrist=0;
diffrence=0;
function preload() {
    }
function setup() {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(420,420);
    canvas.position(700,150);
    posenet=ml5.poseNet(video,model);
    posenet.on('pose',gotresult);
}
function moduel(){
console.log("modelloaded");
}
function gotresult(result) {
   if (result.length>0) {
       console.log(result);
 posex=result[0].pose.nose.x;
       posey=result[0].pose.nose.y;
       rightwrist=result[0].pose.rightWrist.x;
       leftwrist=result[0].pose.leftWrist.x;
       diffrence=floor(leftwrist-rightwrist);
 } 
}
function draw() {
    background('#d5f5ee');
    fill('red');
    stroke('blue');
    textSize(diffrence);
text('Arpit',50,400);
    document.getElementById("nose").innerHTML="height & width is"+diffrence+"px";


}
function textSize() {
    var result=textSize("diffrence");
    console.log("result"); 
}
