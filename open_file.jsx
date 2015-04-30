var fileRef = File('/Users/michaelmostachetti/Dropbox/REDLUCK_OTHER/automation/1.jpg')
var fileRef1 = File('/Users/michaelmostachetti/Dropbox/REDLUCK_OTHER/automation/2.jpg')
var docRef = app.open(fileRef)
var docRef1 = app.open(fileRef1)
var jpgFile = new File( "/Temp001.jpeg" )
app.activeDocument = app.documents[0]
console.log(app.activeDocument.width)
//app.activeDocument.resizeImage(50, 1000)
//
//app.activeDocument.save()

//Error 8800: General Photoshop error occurred. This functionality may not be available in this version of Photoshop.

var fileRef = File('/Users/michaelmostachetti/Dropbox/REDLUCK_OTHER/automation/1.jpg')
//check width x height
var x = (app.activeDocument.width)/3250
var y = (app.activeDeocument.height)/5000
if(1 > x > y){
	//scale proportionally y
	var y2 = 5000;
	var x2 = x*(y2/y)
	app.activeDocument.resizeImage(x2,y2)
}else if(1 > y >= x){
	var x2 = 3250;
	var y2 = y*(x2/x)
	app.activeDocument.resizeImage(x2,y2)
	//scale prorportionally x
}else{
	//resizeCanvas(), ask isa what she wants here
	app.activeDocument.resizeCanvas()
	//crop and save
}
//close and next iteration
app.activeDocument.close()