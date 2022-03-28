function setup() {
  createCanvas(600, 600);

//sky
  fill(194,210,212);
  noStroke();
  rect(0,0,width, height);
  
// pond
  fill(111,154,198);
  noStroke();
  rect(0, 300,width, height);
  

//sun
  //sun position
  let poX= random (200, 500);
  let poY = random (100,170);
  
  let red= random(228,255);
  fill(red,208,115);
  stroke(29,44,23);
  circle(poX, poY, 100);
  


  frameRate(15);

}


function draw() {
  
// waterdrops
    stroke(255);
    for (let y=0; y<10; y+=10) {
    let splashY= random(300,height);
    let splashX= random(0,width)
    let splashRandom= random(0,30);
    line(splashX,splashY,splashX+splashRandom,splashY);
      
//grow grass
    if (mouseIsPressed) {
    let color1= random(81,122);
    let color2= random(103,146);
    let color3= random(40,80);
    

    let top= random (200,400);
    fill(color1,color2,color3);
    stroke (29,44,23); 

    triangle(mouseX, 300, mouseX+20, top, mouseX+40 ,300);
  }
 
  }
  
}

// stop raindrops (and everything else I guess)
function keyPressed() {
  loop();
}

function keyReleased() {
  noLoop();
}

