makeHeader("Da se zapoznaem s funkciite")
//funciq za generirane na sluchaini chisla i zapisvaneto im v tekstov niz:
function getRentText(n) {
    var text="Sluchaini celi chisla (ot 1 do 10) :<br>* "
    for (var k=1;k<=n;k++) {
    text+=myRand() +" * "
}
text+="<br>"
return text
}
//pokazvane na 20 sluchaini chisla:
document.write(getRentText(20))
//funciq za generirane na sluchaini celi chisla:
function myRand() {
    return 1+Math.floor(10*Math.random())
}
//funciq za pokazvane na zaglavie
function makeHeader(t) {
    document.write("<h4>"+t+"</h4>")
}
