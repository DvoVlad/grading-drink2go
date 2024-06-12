/* в этот файл добавляет скрипты*/
window.addEventListener('load' , () => {
  let currentSliderItem = 1;
  const sliderItems = document.querySelectorAll('.hero-slider__item');
  const sliderButtonPrev = document.querySelector('.hero-slider__prev');
  const sliderButtonNext = document.querySelector('.hero-slider__next');
  const sliderBg = document.querySelector('.hero-slider__background');
  const maxItems = sliderItems.length;

  if(currentSliderItem > maxItems) {
    sliderButtonPrev.disabled = true;
    sliderButtonNext.disabled = true;
  } else {
    sliderButtonPrev.disabled = true;
  }

  sliderButtonNext.addEventListener('click', () => {
    const thisElement = document.querySelector('.hero-slider__item--active');
    const nextElement = document.querySelector(`.hero-slider__item:nth-child(${++currentSliderItem})`);
    const bgColor = nextElement.dataset.color;

    sliderBg.style.backgroundColor = bgColor;

    thisElement.classList.remove('hero-slider__item--active');
    nextElement.classList.add('hero-slider__item--active');

    if(currentSliderItem === maxItems) {
      sliderButtonNext.disabled = true;
    }

    if(currentSliderItem > 1) {
      sliderButtonPrev.disabled = false;
    }
  });

  sliderButtonPrev.addEventListener('click', () => {
    const thisElement = document.querySelector('.hero-slider__item--active');
    const nextElement = document.querySelector(`.hero-slider__item:nth-child(${--currentSliderItem})`);
    const bgColor = nextElement.dataset.color;

    sliderBg.style.backgroundColor = bgColor;

    thisElement.classList.remove('hero-slider__item--active');
    nextElement.classList.add('hero-slider__item--active');

    if(currentSliderItem === 1) {
      sliderButtonPrev.disabled = true;
    }

    if(currentSliderItem < maxItems) {
      sliderButtonNext.disabled = false;
    }
  });
});
