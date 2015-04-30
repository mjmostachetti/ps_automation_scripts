var fileRef = File('/Users/michaelmostachetti/Dropbox/REDLUCK_OTHER/automation/1.jpg')
var docRef = app.open(fileRef)
var jpgFile = new File( "/Temp001.jpeg" )
app.activeDocument.saveAs(jpgFile)