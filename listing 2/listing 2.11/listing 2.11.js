//funciq s operator na izbor:
function show(x,y,op) {
//localna promenilva:
var msg 
//promenqva se stoinostta na argumenta:
switch(op) {
    case "suma": //purvi block
        msg=x+" + "+ y+" = "+(x+y)+"<br>"
        break
case "razlika": //vtori block
msg=x+" - "+ y+" = "+(x-y)+"<br>"
break
case "proizvedenie": //treti block
msg=x+" * "+ y+" = "+(x*y)+"<br>"
break
case "chastno": //chetvurti block
msg=x+" / "+ y+" = "+(x/y)+"<br>"
break
default:
    msg="<b>"+op+"</b> - neizvestna operaciq<br>"
}
//pokazvane na teksta v dokumenta:
document.write(msg)
} //krai na funciqta
//izvikvane na funciqta s razlichni argumenti"
show(8,4,"proizvedenie")
show(8,4,"suma")
show(8,4,"chastno")
show(8,4,"razlika")
show(8,4,"podmigvane")