const sliderRange = document.querySelector('.slider__range');
const sliderContainer = document.querySelector('.slider');

sliderRange.addEventListener('input', (e) => {
  e.preventDefault();
  sliderContainer.style.setProperty('--position', `${e.target.value}%`);
});

// On Mobile Swipe
sliderContainer.addEventListener('touchmove', (e) => {
  const containerWidth = sliderContainer.getBoundingClientRect().width;
  const touchLeft = e.changedTouches[0].pageX;
  const containerLeft = sliderContainer.getBoundingClientRect().left;

  if (touchLeft > containerLeft && touchLeft <= containerWidth) {
    const leftRelativeToContainer = touchLeft - containerLeft;

    const persentage = (
      ((leftRelativeToContainer === 0 ? 1 : leftRelativeToContainer) /
        containerWidth) *
      100
    ).toFixed(2);

    sliderContainer.style.setProperty('--position', `${Number(persentage)}%`);
  }
});
