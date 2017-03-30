var numbers = [15,22,48,37]
var habits = ["Creativity is the greatest rebellion in existence","Creativity takes courage","Art has no rules","Nothing GREAT ever came EASY","Aspire to inspire","The trouble is you think you have time","Art is not what you see, but what you MAKE others see","There is no SUCCESS without hardship","Sometimes the best thing you can do is get MONEY","Great minds discuss ideas"];
var j = 0;
var kiaraRed = 255;
var kiaraGreen = 50;
var kiaraBlue = 50;


function setup(){
    createCanvas(700,600);
    kiaraRed = random(0,255);
    kiaraGreen = random(0,255);
    kiaraBlue = random(0,255);
}

function draw(){
    background(255);
    
  for(var i = 0; i < 4; i++){
   rect((i+1)*100,200,numbers[i],numbers[i]);
  }
  
  fill(kiaraRed,kiaraGreen,kiaraBlue);
  textSize(20);
  text(habits[j],200,160);
}

function mousePressed(){
    kiaraRed = random(0,255);
kiaraGreen = random(0,255);
kiaraBlue = random(0,255);
    j++;
    if(j==habits.length){
        j=0;
      
    }
}




 











