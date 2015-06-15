//This is the code for the button area.

var additiveNumber = 0;

function DisplayNumber(number) {
	//additiveNumber += number;
	//document.getElementById("textToChange").innerHTML = additiveNumber;
	if(procedural === true){
	procedural = false;
	document.getElementById("Button").innerHTML = "Auto-Draw";
	} else {
		procedural = true;
		document.getElementById("Button").innerHTML = "Free Draw";
	}
}

window.onload = Start;

var procedural = true;

var canvas, ctx;

var sizeX = 5;
var sizeY = 5;

var color = "#000000";

rectX = 0;
rectY = 0;

var numColorChanges = 0;
var slopeCounter = 0;
var slope = 0

var colorChangeFrequency = 0.01;

function Start() {
	c = document.getElementById("CanvasID");
	ctx = c.getContext("2d");
	
	
	color = '#'+Math.floor(Math.random()*16777215).toString(16);
	
	setInterval(MoveRect, 1);
	
}

function SetColor() {

	if(Math.random() < colorChangeFrequency){
		color = '#'+Math.floor(Math.random()*16777215).toString(16);
		numColorChanges += 1;
		document.getElementById("Num").innerHTML = "" + numColorChanges;
	}
}

function MoveRect() {
	
	SetColor();
	
	if(procedural === true){
	ctx.fillStyle = color;
		Draw(rectX, rectY);
	
		var rect = c.getBoundingClientRect();
		rectX += sizeX;
		
		slopeCounter += Math.random() * slope;
		if(slopeCounter >= sizeY) {
			rectY += sizeY;
			slopeCounter = 0;
		}
		
		
		
		
		if(rectX >= rect.right){
			rectX = 0;
			rectY += sizeY;
		
		}
		if(rectY >= rect.bottom){
			rectX = 0;
			rectY = 0;
			numColorChanges = 0;
			document.getElementById("Num").innerHTML = "" + numColorChanges;
		}
		
	}
	else {
		ctx.fillStyle = color;
		Draw(rectX, rectY);
	}
	

	
	
	
	
	
}	

function Draw (x, y) {
	if(procedural === false){
	ctx.fillRect(x - (0.5 * sizeX),y - (0.5 * sizeY), sizeX, sizeY);
	} else {
		ctx.fillRect(x,y , sizeX, sizeY);
	}
}
// this is the code for the canvas.

document.addEventListener("mousemove", onMouseUpdate, false);
document.addEventListener("mouseenter", onMouseUpdate, false);

function onMouseUpdate(e){
if(procedural === false){
	var rect = c.getBoundingClientRect();

	rectX = e.pageX - rect.left;
	rectY = e.pageY - rect.top;
}
}

function AddSlope(number) {
	slope += number;
}
function SizeAdd(number) {
	sizeX += number;
	sizeY += number;
}

function ChangeFrequency(number) {
	colorChangeFrequency += number;
}
