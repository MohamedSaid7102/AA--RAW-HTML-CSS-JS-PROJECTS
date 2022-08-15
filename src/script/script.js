const cards = [...document.querySelectorAll('.projects-container .card')];

cards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;

    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  });
});
