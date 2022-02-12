var text,name
text ="Haide da se zapoznaem! Kak se kazvate?"
name=prompt(text)
if(name=="") {
    document.write("vie ne se predstavihte")
}
// the code below this comment isnt listed in the book so I thought I should make it a lil bit cooler
else {
    document.write("priqtno mi e da se zapoznaem " + name)
}