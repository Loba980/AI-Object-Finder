status="";
results=[];

function setup(){
canvas= createCanvas(380, 380);
canvas.center();
video= createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 480, 380);

if(status != ""){
    for(i=0; i<results.length; i++){
        percent= floor(objects[i].confidence*100);
        text(results[i].input + "" + percent + "%" + results[i].x+15, results[i].y+15);
        rect(results[i].x, results[i].y, results[i].width, results[i].height);


}
}
}
function start(){
objectDetector= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
document.getElementById("input").value;

if(results[i].input==results_name){
    video.webcamLiveView.stop()
    objectDetector.detcet(gotResult);
    document.getElementById("status").innerHTML= object_name + "Found";
}
}

function modelLoaded(){
console.log("Model Loaded!");
status=true;
}

function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);
objects=results;

gotResult=results;
}