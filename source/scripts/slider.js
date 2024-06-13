window.addEventListener('load' , () => {
  /* Слайдер начало */
  let currentSliderItem = 1;
  const sliderItems = document.querySelectorAll('.hero-slider__item');
  const sliderButtonPrev = document.querySelector('.hero-slider__prev');
  const sliderButtonNext = document.querySelector('.hero-slider__next');
  const sliderBg = document.querySelector('.hero-slider__background');
  const maxItems = sliderItems.length;

  if(currentSliderItem >= maxItems) {
    sliderButtonPrev.disabled = true;
    sliderButtonNext.disabled = true;
  } else {
    sliderButtonPrev.disabled = true;
  }

  const paginationWrapper = document.querySelector('.hero-slider__paginations-wrapper');

  for(let i = 1; i <= maxItems; i++) {
    const newPaginationItem = document.createElement('button');
    newPaginationItem.dataset.item = i;
    newPaginationItem.classList.add('hero-slider__pagination');
    newPaginationItem.classList.add('slider-pagination');
    newPaginationItem.type = 'button';
    if(i === 1) {
      newPaginationItem.classList.add('hero-slider__pagination--active');
    }
    paginationWrapper.appendChild(newPaginationItem);
  }

  paginationWrapper.addEventListener('click', (e) => {
    const clickedItem = e.target;
    const thisElement = document.querySelector('.hero-slider__item--active');
    currentSliderItem = +clickedItem.dataset.item;
    const selectedItem = document.querySelector(`.hero-slider__item:nth-child(${currentSliderItem})`);
    const bgColor = selectedItem.dataset.color;
    sliderBg.style.backgroundColor = bgColor;

    const oldPaginateItem = document.querySelector('.hero-slider__pagination--active');
    oldPaginateItem.classList.remove('hero-slider__pagination--active');

    clickedItem.classList.add('hero-slider__pagination--active');

    thisElement.classList.remove('hero-slider__item--active');
    selectedItem.classList.add('hero-slider__item--active');

    if(currentSliderItem === maxItems) {
      sliderButtonNext.disabled = true;
    } else {
      sliderButtonNext.disabled = false;
    }

    if(currentSliderItem === 1) {
      sliderButtonPrev.disabled = true;
    } else {
      sliderButtonPrev.disabled = false;
    }
  });

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

    const oldPaginateItem = document.querySelector('.hero-slider__pagination--active');
    oldPaginateItem.classList.remove('hero-slider__pagination--active');

    const currentPagination = document.querySelector(`.hero-slider__pagination:nth-child(${currentSliderItem})`);
    currentPagination.classList.add('hero-slider__pagination--active');
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

    const oldPaginateItem = document.querySelector('.hero-slider__pagination--active');
    oldPaginateItem.classList.remove('hero-slider__pagination--active');

    const currentPagination = document.querySelector(`.hero-slider__pagination:nth-child(${currentSliderItem})`);
    currentPagination.classList.add('hero-slider__pagination--active');
  });
  /* Слайдер конец */
});
