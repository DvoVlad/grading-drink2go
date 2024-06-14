window.addEventListener('load', () => {
  const toggleMenuButton = document.querySelector('.burger-button');
  const mobileMenu = document.querySelector('.navigation__list');

  toggleMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('navigation__list--active');
    toggleMenuButton.classList.toggle('burger-button--cross');
  });
});
