var fgImage = null;
var bgImage = null;

function loadForegroundImage(){
   var imgFile = document.getElementById("fgfile");
   fgImage = new SimpleImage(imgFile);
   var canvas = document.getElementById("can1");
   fgImage.drawTo(canvas);  
}

function loadBackgroundImage(){
   var imgFile = document.getElementById("bgfile");
   bgImage = new SimpleImage(imgFile);
   var canvas = document.getElementById("can2");
   bgImage.drawTo(canvas);  
}

function greenScreen(){
  if(fgImage==null||!fgImage.complete()){
    alert("foreground not loaded");
    return;
  }
  if(bgImage==null||!bgImage.complete()){
    alert("background not loaded");
    return;
  }
  
  // var fgImage=new SimpleImage("drewRobert.png");
  // var bgImage=new SimpleImage("dinos.png");

  var output=new SimpleImage(fgImage.getWidth(),fgImage.getHeight());
  for(var pixel of fgImage.values()){
    var posX=pixel.getX();
    var posY=pixel.getY();
    
    var bgPixel=bgImage.getPixel(posX,posY);
    var bgRed=bgPixel.getRed();
    var bgGreen=bgPixel.getGreen();
    var bgBlue=bgPixel.getBlue();
    
    var outPixel=output.getPixel(posX,posY);
    
    if(pixel.getGreen()==255){
        outPixel.setRed(bgRed);
        outPixel.setGreen(bgGreen);
        outPixel.setBlue(bgBlue)
    }
    else{
     
        outPixel.setRed(pixel.getRed());
        outPixel.setGreen(pixel.getGreen());
        outPixel.setBlue(pixel.getBlue())
    }
}
  var canvas = document.getElementById("can1");
   output.drawTo(canvas); 
}