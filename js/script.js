
let burger = document.querySelector('.burger');
let navList = document.querySelector('.items');
let navbar = document.querySelector('.navbar');
burger.addEventListener('click', () =>{
  navList.classList.toggle('v-nav');
  navbar.classList.toggle('h-nav');
})


// window.addEventListener('mouseup', (e) => {
//   if(e.target != navList && e.target.parentNode != navList)
//   {
//     navList.style.transform ="translateY(-100%)";
//   }
// })

// burger.addEventListener('click', () =>{
//   const isOpened = document.getAttribute('aria-expanded');
//   if(isOpened === 'false')
//   {
//     burger.setAttribute('aria-expanded','true');
//   }
//   else
//   {
//     burger.setAttribute('aria-expanded','false');
//   }
// })