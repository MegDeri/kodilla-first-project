'use strict'

//open & close side-bar
function openSlideMenu(){
    document.getElementById('side-menu').style.width = "250px";
    document.getElementById('main').style.marginLeft ="250px";
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width = "0";
    document.getElementById('main').style.marginLeft ="0";
}

document.querySelector("#side-menu .b-close").addEventListener("click", closeSlideMenu);
document.querySelector("#top-menu a").addEventListener("click", openSlideMenu);

var toggle = document.querySelector("#top-menu a");

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('showon')
  }

  toggle.addEventListener("click", function() {
    toggleMenu();
  });

  