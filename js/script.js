'use strict'

function openSlideMenu(){
    document.getElementById('side-menu').style.width = "250px";
    document.getElementById('main').style.marginLeft ="250px";
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = "0";
    document.getElementById('main').style.marginLeft ="0";
}
/*var toggle = document.getElementById('top-menu');

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('show')
  }

  toggle.addEventListener("click", function() {
    toggleMenu();
  });*/