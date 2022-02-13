// skript s vlojeni uslovni operatori
// definirane na funkciqta:
function f(x) {
    // ako x<0
    if (x <0) {
    return 0
}
// ako x>= 0
else {
// ako x<2
if(x<2){
    return x*x 
}
// ako x>=2
else {
    // ako x<5
    if(x<5) {
        return 6-x
    }

// ako x>=5
else {
    return 1
}
}
}
} //krai na definiraneto na funciqta
document.write("<h4>Po chasti na gladka funciq</h4>")
//dobavqnme na grafikata na funciqta v dokumenta:
document.write('<img src="function.jpg" width="500" height="300"><br>')
//promenliva za zapisvane na stoinost na argumenta:
var z
//stoinost na argument - sluchaino chilso ot (ot -2 do 7):
z=9*Math.random()-2
document.write("Sluchaen argument: <b>"+z+"</b><br>") 
//izvikzvane na funciqta:
document.write("Stoinost na funciqta: <b>"+f(z)+"</b>")

