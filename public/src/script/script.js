const cards = [...document.querySelectorAll('.projects-container .card-wrap')];
VanillaTilt.init(cards, {
  reverse: false,
  max: 10,
  perspective: 2000,
  speed: 1000,
});
