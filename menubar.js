var menuitems = document.getElementsByClassName("boxcontent");
var menuimages = (document.getElementsByClassName('menuimg'));
var boxelements = (document.getElementsByClassName('boxcontent').children);
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
    
    console.log(boxelements)
    for(var i = 0; i < boxelements.length; i++){
      boxelements[i].style.display = "none";
    }

    for(var i = 0; i < menuitems.length; i++){
      menuitems[i].disabled = false;
      menuitems[i].style.display = "none";
    }

    for(var i = 0; i < menuimages.length; i++){
      menuimages[i].disabled = false;
      menuimages[i].style.display = "none";
    }

    menuBtn.classList.remove('open');
    menuOpen = false;
    for (let i = 0; i < content.length; i++) {
      content[i].style.opacity = '0%'
      content[i].disabled = true
  }}
})