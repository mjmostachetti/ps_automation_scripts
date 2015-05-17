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