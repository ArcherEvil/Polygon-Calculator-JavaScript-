
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

let content = document.getElementsByClassName('menubutton');



menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    for (let i = 0; i < content.length; i++) {
      content[i].style.opacity = '100%'
      content[i].disabled = false
    }
  } 
  else {
    var nodes = document.getElementsByClassName("boxcontent");
    for(var i = 0; i < nodes.length; i++){
        nodes[i].disabled = false;
        nodes[i].style.display = "none";
    }
    menuBtn.classList.remove('open');
    menuOpen = false;
    for (let i = 0; i < content.length; i++) {
      content[i].style.opacity = '0%'
      content[i].disabled = true
  }}
})