window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  let count = 0;
  images.forEach(function(image) {
    image.addEventListener('load', function() {
      count++;
      if (count === images.length) {
        const loader = document.querySelector('.loader');
        loader.classList.add('hidden');
      }
    });
  });
});
