
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var again=document.querySelector("#try");
var h1=document.querySelector("h1");
var numSquares=6;
var colors=generateRandomColors(numSquares);
var colorDisplay=document.querySelector("#display");
var pickedColor=pickColor();
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");
var hover=document.querySelectorAll("div span")
colorDisplay.textContent=pickedColor;

hardbtn.classList.add("selected");

for(var i=0; i<squares.length; i++){
	//Assigning colors to squares
	squares[i].style.backgroundColor=colors[i];

	//When clicking the squares
	squares[i].addEventListener("click",function(){
		var clickedColor= this.style.backgroundColor;
		if(clickedColor==pickedColor){
			setColor(numSquares);
			message.textContent="Correct!!"
			again.textContent="Play Again?"
		}else{
			message.textContent="Try Again"
			this.style.backgroundColor="#232323";
		}
	});
} 
//Changing colors of the squares and h1
function setColor(num){
	for(var i=0; i<num; i++){
		squares[i].style.backgroundColor=pickedColor;
	}
	h1.style.backgroundColor=pickedColor;
}

//Generating Random Colors
function generateRandomColors(num){
	var array=[];
	for(var i=0; i<num; i++){
		array.push(randomColor());	
	}
	return array;
}

function randomColor(){
	r = Math.floor(Math.random()*256);
	g = Math.floor(Math.random()*256);
	b = Math.floor(Math.random()*256);
	return("rgb("+r+", "+g+", "+b+")");
}

// picking a color from the colors array and displaying it
function pickColor(){
	var i= Math.floor(Math.random()*colors.length);
	return colors[i];
}

//Hovering Effect
// for(var i=0; i<hover.length; i++){
// 	hover[i].addEventListener("mouseover",function(){
// 		this.style.backgroundColor="steelblue";
// 		this.style.color="white";
// 	})
// 	hover[i].addEventListener("mouseout",function(){
// 		this.style.backgroundColor="white";
// 		this.style.color="steelblue";
// 	})
// }
//but "mouseover" is in effect during selected

//Easy Mode
easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares=3;
	reset();
});

//Hard Mode
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares=6;
	reset();
});

//Play Again
again.addEventListener("click",reset);

function reset(){
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<squares.length; i++){
			if(colors[i]){
				squares[i].style.backgroundColor=colors[i];
			}else{
				squares[i].style.backgroundColor="#232323"
			}
	}
}

