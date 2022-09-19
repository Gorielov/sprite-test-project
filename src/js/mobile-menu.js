// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');

//   console.log(mobileMenu);

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//   };

//   openMenuBtn.addEventListener('click', () => {
//     toggleMenu();
//     document.body.style.overflow = 'hidden';
//   });
//   closeMenuBtn.addEventListener('click', () => {
//     toggleMenu();
//     document.body.style.overflow = '';
//   });

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     document.body.style.overflow = '';
//     openMenuBtn.setAttribute('aria-expanded', false);
//   });
// })();

//
const menuBtnRef = document.querySelector('[data-menu]');
const mobileOpenMenuRef = document.querySelector('[data-open-menu]');
const mobileCloseMenuRef = document.querySelector('[data-close-menu]');

mobileOpenMenuRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuBtnRef.classList.add('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  document.body.classList.add('mob-menu-open');
});
mobileCloseMenuRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  menuBtnRef.classList.remove('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);
  document.body.classList.remove('mob-menu-open');
});
