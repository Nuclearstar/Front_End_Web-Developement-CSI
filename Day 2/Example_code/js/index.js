//selecting entire body
var body = document.querySelector("body");
//selecting click to change background color button 
var button = document.querySelector("button");
//selecting input
var input = document.querySelector("input");
//selecting div with id sur ie the line that has to be transformed.
var change = document.querySelector("#sur");
//selecting last button button on the page to change image links.
var btn = document.querySelector("#img");
//selecting both the images with class images.
var images = document.querySelectorAll(".images");
//Giving Functionality to the input and introducing change Event
input.addEventListener("change",function(){
    change.textContent = input.value;
});

button.addEventListener("click",function(){
      //body.style.background ="green"; we can do this if we want to apply permanent changes.
      //body.classList.add("col");  this also makes permanent changes by adding a class col from css to the body.
      //body.classList.remove("col"); this will remove the applied class.
      body.classList.toggle("col");
});

btn.addEventListener("click",function(){
  for(var i = 0 ;i<images.length;i++){  
  images[i].setAttribute("src","http://www.isim.ac.in/Events/images/csi.gif");
    }
  });