var n=100, s=0,k=1
var text="1<sup>2</sup> + 2<sup>2</sup> + ... + "
text+=n+"<sup>2</sup> = " 
//i trite blocka sa prazni:
for(;;) {
    s+=k*k
    k++
    if(k>n) {
        break
    }
}
document.write(text+s)