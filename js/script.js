const burgerBtn = document.querySelector('.burger__menu-btn');
const blackout = document.querySelector('.blur');
const navPanel = document.querySelector('.nav__panel');
const closeBtn = document.querySelector('.close-btn');

const removeNavBar = function () {
  navPanel.classList.remove('nav__panel--active');
  setTimeout(() => {
    blackout.classList.remove('blur--active');
  }, 100);
  burgerBtn.classList.add('burger__menu-btn--active');
};
const addNavBar = function () {
  blackout.classList.add('blur--active');
  navPanel.classList.add('nav__panel--active');
  burgerBtn.classList.remove('burger__menu-btn--active');
};
burgerBtn.addEventListener('click', addNavBar);
closeBtn.addEventListener('click', removeNavBar);
blackout.addEventListener('click', removeNavBar);




// raiting script
const raitingItems = document.querySelectorAll('.rating__item');

raitingItems.forEach(item => {
  const counterValue = item.querySelector('.rating__counter').textContent;

  const line = item.querySelector('.rating__counter-line');
  line.style.width = counterValue;
});



$(function(){
	$('.thumbnail').viewbox(
    {
      setTitle: true //add caption if link has title attribute
      ,margin: 20
      ,resizeDuration: 300
      ,openDuration: 200
      ,closeDuration: 200
      ,closeButton: true
      ,fullscreenButton: false
      ,navButtons: true
      ,closeOnSideClick: true
      ,nextOnContentClick: false
      ,useGestures: true
      ,imageExt: ['png','jpg','jpeg','webp','gif'] //to determine if a target url is an image file
    }
  );
});