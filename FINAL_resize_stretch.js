//file combines both the resize and stretch scripts.
//resize bit begins
var x = app.activeDocument.width
var y = app.activeDocument.height
if(x >= 3250 && y >= 5000){
	app.activeDocument.resizeCanvas(3250,5000, AnchorPosition.MIDDLECENTER)
} else if(x >= y){
	//scale proportionally y
	var y2 = 5000;
	var x2 = x*(y2/y)
	app.activeDocument.resizeImage(x2,y2)
	app.activeDocument.resizeCanvas(3250,5000, AnchorPosition.MIDDLECENTER)
} else if(y >= x){
	var x2 = 3250;
	var y2 = y*(x2/x)
	app.activeDocument.resizeImage(x2,y2)
	app.activeDocument.resizeCanvas(3250,5000, AnchorPosition.MIDDLECENTER)
} else{
	app.activeDocument.resizeCanvas(3250,5000, AnchorPosition.MIDDLECENTER)
}

//stretch script begins
app.activeDocument.resizeCanvas(6500,5000, AnchorPosition.MIDDLECENTER)
//select portions on x-axis 1625-1635, 4875-4865 and strech on each sides
app.activeDocument.selection.select([[1625,0],[1645,0],[1645,5000],[1625,5000]]);
app.activeDocument.selection.resize(12000);
app.activeDocument.selection.translate(-1100);
app.activeDocument.selection.select([[4865,0],[4875,0],[4875,5000],[4865,5000]]);
app.activeDocument.selection.resize(22000);
app.activeDocument.selection.translate(1050);
app.activeDocument.save()
app.activeDocument.close()