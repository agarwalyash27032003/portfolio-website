var i = 0;
var txt = "Yash Agarwal.";
// var text = "A Coder cum Developer, who loves to write and create content while travelling.";
// var j=0;
// var speed = 100;

// window.onload = function typeWriter() {

//   if (i < txt.length) {
//     document.getElementById("intro-h1").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, 150);
//   }
//   else if (j < text.length) {
//     document.getElementById("intro-h3").innerHTML += text.charAt(j);
//     j++;
//     setTimeout(typeWriter, speed);
//   }
// }
// window.onload = function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("intro-name").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, 200);
//   }
// }

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
  {
    document.getElementById("navbar").style.background = " rgba(26, 26, 26)";
  } 
  else {
    document.getElementById("navbar").style.background = "transparent";
  }
}

// document.getElementById("experiece-drop").onclick = function() {myFunction()};
// function myFunction() {
//   var x = document.getElementById("experiece-drop");
//   if(x.innerHTML === "+")
//   {
//     x.innerHTML = "-";
//   }
//   else
//   {
//     x.innerHTML = "+";
//   }
// }
function myFunction() {

  x=document.getElementsByClassName("exp-img-inner");  // Find the elements
    for(var i = 0; i < x.length; i++){
    x[i].innerText="Hello JavaScript!";    // Change the content
    }
  
  } 