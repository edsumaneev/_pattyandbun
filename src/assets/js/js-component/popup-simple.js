// let popupBg = document.querySelector('.bg-popup');
// // let popup = document.querySelector('.popup');
// let popup = document.querySelector('.popup');
// let popupTest = document.querySelector('.popup-test');
// let openPopupButtons = document.querySelectorAll('.popup-page__btn');
// // let openPopupTestBtn = document.querySelectorAll('.tests__btn');
// let closePopupButton = document.querySelector('.close-popup');
// // let closePopupBtn = document.querySelector('.close-btn');

// openPopupButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     e.preventDefault();
//     popupBg.classList.add('active');
//     popup.classList.add('active');
//   })
// });

// // openPopupTestBtn.forEach((button) => {
// //   button.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     popupBg.classList.add('active');
// //     popupTest.classList.add('active');
// //   })
// // });

// closePopupButton.addEventListener('click', () => {
//   popupBg.classList.remove('active');
//   popup.classList.remove('active');
// });

// closePopupBtn.addEventListener('click', () => {
//   popupBg.classList.remove('active');
//   popupTest.classList.remove('active');
// });

// document.addEventListener('click', (e) => {
//   if (e.target === popupBg) {
//     popupBg.classList.remove('active');
//     popup.classList.remove('active');
//     popupTest.classList.remove('active');
//   }
// });
// $(document).keydown(function (e) {
//   if (e.keyCode == 27) {
//     popupBg.classList.remove('active');
//     popup.classList.remove('active');
//     popupTest.classList.remove('active');
//   }
// });