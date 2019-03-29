//close modal
function closeModal() {
  document.getElementById('overlay').classList.remove('show');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
})

document.querySelector('#overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
})

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
})

  //open modal
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(item) {
    item.classList.remove('show');
  })
  document.querySelector('#overlay').classList.add('show');
  document.querySelector(modal).classList.add('show');
}

document.getElementById('yourManager').addEventListener('click', function() {
  openModal('#myModal');
});