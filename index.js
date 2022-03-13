$(document).ready(function(){
var typed = new Typed(".type", {
  strings: ["Click","here","to","see","all"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true
});
var typed = new Typed(".typing-2", {
  strings: ["Bulgarian","Javascript","Book"],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true
});
AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});
});