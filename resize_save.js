var fileRef = File('/Users/michaelmostachetti/Dropbox/REDLUCK_OTHER/automation/1.jpg')
var docRef = app.open(fileRef)
var x = app.activeDocument.width
var y = app.activeDocument.height
var x2 = 3250
var y2 = y*(x2/x)
app.activeDocument.resizeImage(x2,y2)
app.activeDocument.save()