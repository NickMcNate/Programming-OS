//this file are examples of js shenanigans

//The setup function only happens once
function setup() {
	createCanvas(1920, 1080); //create a 1920x X 1080px canvas
}
//example prompts

  //ellipse(width/2,height/2,400,mouseY, 40); //circle, but retracts/extends horizontally when mouse position is up to down (up =decrease, down =increase)
  //background(249,mouseX,235); //RGB Color for Background, but G Value changes when mouse position is up to down (up =decrease, down =increase)
  //rect(300,100,50,10);  //rectangle, XY coordinates and 10px diameter (dia)
  //rect(mouseX-25,mouseY-25,50,50); //rectangle, but follows the mouse.
  //ellipse(width/2,height/2,20,20); // circle, center of canvas, 20px dia
  //ellipse(width/2,height/2,400,mouseY, 40); //circle centered of canvas, but retracts/extends horizontally when mouse position is up to down (up =decrease, down =increase)
  //background(45,45,45); //an RGB color for the canvas' background


//font function (Not shown)

/*function draw() {
  stroke(255,255,255);
  strokeWeight(3);
  textFont('Courier');
  textSize(30);
  textStyle(ITALIC);
  text('Your Mother',250,250);

}*/

//draw function (Shown)
function draw() {
  background(random(0,25),25); //background, but R and G values are randomized between 0-15. B value stays the same.
  //circle
  stroke(155,255,155) // an RGB color for all shapes' border
  fill(90,150,90,150); // an RGB color for the inside of shapes (the last number refers to transparency (min. 0, max. 255))

  ellipse(width/2,height/2,20,20);
  ellipse(width/2,height/2,mouseX,mouseY, 40);

  stroke(255,255,255);
  strokeWeight(3);
  textFont('Courier');
  textSize(30);
  textStyle(BOLD);
  text('FLICKER OS',250,250);

}

//function mousePressed(){}; if mouse is clicked, do prompt

function mousePressed(){
  if(mouseY>=100){mouseY=0;}else{mouseY=mouseY+100}
}