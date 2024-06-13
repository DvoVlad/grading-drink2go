window.addEventListener('load' , () => {
  const sliderWrapper = document.querySelector('.catalog__price-range');
  const startInput = document.querySelector('.catalog__range-input--from');
  const endInput = document.querySelector('.catalog__range-input--to');

  const uiSlider = noUiSlider.create(sliderWrapper, {
    start: [0, 900],
    connect: true,
    range: {
      'min': 0,
      'max': 1000
    },
    step: 1
  });

  uiSlider.on('update', (values) => {

    startInput.value = +values[0];
    endInput.value = +values[1];
  });

  startInput.addEventListener('change', () => {
    uiSlider.updateOptions({
      start: [+startInput.value, +endInput.value]
    });
  });

  endInput.addEventListener('change', () => {
    uiSlider.updateOptions({
      start: [+startInput.value, +endInput.value]
    });
  });
});
