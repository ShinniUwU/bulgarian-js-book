//globalna promenliva:
var myText ="globalna promenliva"
//pokazvane na stoinostta na globalna promenliva
document.write(myText+"<br>")
//definirane na funciq:
function show() {
    //deklarirane na lokalna promenliva:
    var myText ="lokalna funciq"
    //prisvoqvane na stoinost na globanata promenliva:
    window.myText = "promenliva s duh na globanost"
    //pokazvane na stoinostta na lokalna promenliva
    document.write(myText+"<br>")
    //pokazvane na stoinostta na globanata promenliva
    document.write(window.myText+"<br>")
}
//izvikvane na funkciqta:
show()
//pokazvane na stoinostta na globanata promenliva:
document.write(myText+"<br>")
