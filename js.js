var openButton = document.querySelector('#open-button');
var openButtonsec = document.querySelector('#mybutton');
var overlay = document.querySelector('#overlay');
var closeButton = document.querySelector('#close-button');

openButtonsec.addEventListener('click', function() {
  overlay.style.display = 'block';
});


openButton.addEventListener('click', function() {
  overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});
