document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navegacion = document.querySelector('.navegacion');

  hamburger.addEventListener('click', function () {
    navegacion.classList.toggle('open');
  });
});
