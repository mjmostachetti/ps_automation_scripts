//Photoshop resize script
var docRef = app.documents[1] 
//same as
var docRef = documents[1]

//open a file
var fileRef = File(app.path + "/Samples/Fish.psd")
var docRef = app.open(fileRef)

//save fileapp.documents.add( 4, 4 )
jpgFile = new File( "/Temp001.jpeg" )
jpgSaveOptions = new JPEGSaveOptions()
jpgSaveOptions.embedColorProfile = true
jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE
jpgSaveOptions.matte = MatteType.NONE
jpgSaveOptions.quality = 1
app.activeDocument.saveAs(jpgFile, jpgSaveOptions, true,
Extension.LOWERCASE)

//Plan ScriptListener Steps
/*
1)Open file
2)Check sizes
3)Crop
app.activeDocument.crop( myRegion );
4)save
5)Repeat
