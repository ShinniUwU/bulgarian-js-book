 // gorna granica na sumata:
 var n=100
 //indeksna promenliva:
 var k=1
 //macja;ma stoinost na sumata na kvadratite:
 var s=0
 //tekst za pokazvane:
 var txt="1<sup>2</sup> + 2<sub>2</sub> + ... + 100<sup>2</sup> "
 txt+n+"<sup>2</sup> = " 
 //izchislqvane na sumata na kvadratite na chislata:
 while(k<=n) {
     s+=k*k //dobavqne na slagaemo
     k++ //nova stoinost na indeksnata promenliva
 }
document.write(txt+s) //pokazvane na rezultat