/*
var fileRef = File('/Users/michaelmostachetti/Dropbox/REDLUCK_OTHER/automation/1.jpg')
var docRef = app.open(fileRef)
var x = app.activeDocument.width
var y = app.activeDocument.height
var x2 = 3250
var y2 = y*(x2/x)
app.activeDocument.resizeImage(x2,y2)
app.activeDocument.resizeCanvas(3250,5000, AnchorPosition.MIDDLECENTER)
*/

//var fileRef = File('/Users/michaelmostachetti/Dropbox/edited_Chelsea_photos/IMG_9974 copy.JPG')
//var docRef = app.open(fileRef)
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
//save
app.activeDocument.save()
//close and next iteration
app.activeDocument.close()
