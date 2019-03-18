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

document.getElementById("side-menu").addEventListener("click", closeSlideMenu);
document.querySelector("#top-menu a").addEventListener("click", openSlideMenu);

var toggle = document.querySelector("#top-menu a");

function toggleMenu() {
    document.getElementById('side-menu').classList.toggle('show')
  }

  toggle.addEventListener("click", function() {
    toggleMenu();
  });

  //close modal
  function closeModal() {
    document.getElementById('overlay').classList.remove('show')
  }

  document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault()
      closeModal()
    })
  })

  document.querySelector('#overlay').addEventListener('click', function(e) {
    if(e.target === this) {
      closeModal()
    }
  })

  document.addEventListener('keyup', function(e) {
    if(e.keyCode === 27) {
      closeModal()
    }
  })

  //open modal
  function openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove('show')
    })
    document.querySelector('#overlay').classList.add('show')
    document.querySelector(modal).classList.add('show')
  }