//globana promenliva
var myText = "globalna promenliva"
//pokazvane na stoinostta na globalnata promenliva:
document.write(myText+"<br>")
//definirane na funciqta:
function show() {
    //prisvoqvane na stoinost na promenlivata:
    myText="promenliva s duh na globalnost"
    //pokazvane na stoinostta na globalnata promenlivata:
    document.write(myText+"<br>")
    //deklarirane na lokalna promenliva
    var myText = "lokalna promenliva"
    //pokazvane na stoinostta na lokalna promenliva
    document.write(myText+"<br>")
}
//izvikvane na funciqta
show()
//pokazvane na stoinostta na globanata promenliva:
document.write(myText+"<br>")