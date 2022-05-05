//globalna promenliva:
var x="Alfa"
//izvikvane na funciqta:
show("Bravo")
//definirane na funciqta s argument:
function show(x) {
    document.write("<h4>Izpulnenie na funciqta</h4>")
    //obrushtane kum argumenta na funciqta:
    document.write("Argument: "+x+"<br>")
    //obrushtane kum globalnata promenliva:
    document.write("Promenliva: "+window.x+"<br>")
}