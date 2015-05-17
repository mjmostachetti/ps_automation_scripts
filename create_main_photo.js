
//0)filesystem getFiles on main folder
//0a)for loop through folders in filesystem
//1)open two files
var fileRef1 = File('/Users/michaelmostachetti/Dropbox/edited_Chelsea_photos/automation_test/IMG_9952 copy.JPG')
var fileRef2 = File('/Users/michaelmostachetti/Dropbox/edited_Chelsea_photos/automation_test/IMG_9977 copy.JPG')
var docRef1 = app.open(fileRef1)
var docRef2 = app.open(fileRef2)
//2)resize canvas
app.activeDocument.resizeCanvas(6500,5000, AnchorPosition.MIDDLERIGHT)
//3)select all on first file
app.activeDocument = app.documents[0]
app.activeDocument.selection.selectAll()
app.activeDocument.selection.copy()
app.activeDocument = app.documents[1]
app.activeDocument.paste()
app.activeDocument.move()
//4)paste into second file
//5)move to left
//6)save as