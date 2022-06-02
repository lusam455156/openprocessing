function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}



function draw() {
	background(	"#80FFFF");
	for(var x=0;x<width;x=x+100){
		for(var y=0;y<height;y=y+100){
	noFill()
	stroke(255)
	circle(50+x,50+y,100+mouseX/20)
	stroke("#02DF82")
	circle(x,y,50+mouseY/5)
	stroke("#7373B9")
	rect(x,y,100+mouseX/10)
}}}