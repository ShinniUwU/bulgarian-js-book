var n=100, s=0,k=1
var text="1<sup>2</sup> + 2<sup>2</sup> + ... + "
text+=n+"<sup>2</sup> = " 
//purviqt block i tqloto na operatora sa prazni:
for (;k<=n;s+=k*k,k++) 
document.write(text+s)