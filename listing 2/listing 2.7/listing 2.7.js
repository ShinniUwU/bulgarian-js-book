//promenlivite se deklarirat v purviq blok:
for(var n=100, s=0, k=1; k<=n;k++) {
    s+=k*k
}
var text ="1<sup>2</sup> + 2<sup>2</sup> + ... + "
text+=n+"<sup>2</sup> = "
document.write(text+s)