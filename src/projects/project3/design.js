const cursor = document.querySelector('#cursor-pointer');
const navLinks = document.querySelectorAll('.nav-bar .nav__links li');
const sliderImages = document.querySelector('.slideer-images-wrapper');

window.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});

navLinks.forEach((link) => {
  link.addEventListener('mouseenter', (e) => {
    cursor.classList.add('hovered');
    link.classList.add('hovered');
  });
  link.addEventListener('mouseleave', (e) => {
    cursor.classList.remove('hovered');
    link.classList.remove('hovered');
  });
});

sliderImages.addEventListener('mouseenter', (e) => {
  cursor.classList.add('hovered-img');
});
sliderImages.addEventListener('mouseleave', (e) => {
  cursor.classList.remove('hovered-img');
});
