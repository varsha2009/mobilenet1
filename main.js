Webcam.set({
    width : 300,
    height : 300,
    image_format : 'png',
    png_quality : 90,

    constraints:{
        facingMode : 'environment'
    }
    //facingMode : 'user'
})
Webcam.attach("camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_image").innerHTML = "<img id='captured_img' src ="+data_uri+">"
    })
}
console.log(ml5.version);
classifier = ml5.imageClassifier('MobileNet',modalLoaded);
function modalLoaded(){
    console.log('modal is loaded');
}
function identify_img(){
    img = document.getElementById('captured_img');
    classifier.classify(img,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
        document.getElementById("result_div").innerHTML = result[0].label;
    }
    
}