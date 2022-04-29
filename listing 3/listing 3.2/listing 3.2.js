//globalna promenliva:
var myText="globalna promenliva"
//pokazvane na stoinostta na globalnata promenliva:
document.write(myText+"<br>")
//definirane na funkciqL
function show() {
    //lokalna promenliva:
    var myText
    myText ="lokalna promenliva"
    //pokazvane na stoinostaa na lokalna promenliva:
    document.write(myText+"<br>")
}
//izvikvane na funckiqta
show()
//pokazvane na stoinostta na globalnata promenliva:
document.write(myText+"<br>")