//https://teachablemachine.withgoogle.com/models/l4juoJMkp/
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera= document.getElementById("cam");
Webcam.attach(camera);

function capture() {
    Webcam.snap(
function(data_uri) {
    document.getElementById("pic").innerHTML= "<img id= 'picture' src='"+data_uri+"'>" 
}


    )
};
 //model loading starts 
 classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l4juoJMkp/model.json", model_ready);
 function model_ready() {
     console.log("Done");
 }
 prediction1= "";
 prediction2= "";

 function speak() {
     var synth= window.speechSynthesis;
     data1= "The first prediction is " + prediction1;
     data2= "The second prediction is " + prediction2;
     var utterThis= new SpeechSynthesisUtterance(data1+data2);
     synth.speak(utterThis);
 }
 function compare() {
     img= document.getElementById("picture");
     classifier.classify(img, gotResults)
 }

 function gotResults(error, result) {
     if(error) {
        console.error(error);
     }
     else{
         console.log(result);
         prediction1= result[0].label;
          prediction2= result[1].label;
          document.getElementById("e1").innerHTML= prediction1;
          document.getElementById("e2").innerHTML= prediction2;

        speak();

        if(prediction1=="Heart") {
            document.getElementById("ej1").innerHTML= "&#10084";
        }
        if(prediction1=="Peace") {
            document.getElementById("ej1").innerHTML= "&#9996";
        }
        if(prediction1=="Thumbs up") {
            document.getElementById("ej1").innerHTML= "&#128077";
        }
        if(prediction1=="Fist bump") {
            document.getElementById("ej1").innerHTML= "&#128074";
        }
        
        
        if(prediction2=="Heart") {
            document.getElementById("ej2").innerHTML= "&#10084";
        }
        if(prediction2=="Peace") {
            document.getElementById("ej2").innerHTML= "&#9996";
        }
        if(prediction2=="Thumbs up") {
            document.getElementById("ej2").innerHTML= "&#128077";
        }
        if(prediction2=="Fist bump") {
            document.getElementById("ej2").innerHTML= "&#128074";
        }
      }
  }

    