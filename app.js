// grab the element from dom
const navSlide = () => {
  const burger = document.querySelector('.burger'); //grab the burger icon
  const nav = document.querySelector('.nav-links'); //grab the links inside the ul
  const navLinks = document.querySelectorAll('.nav-links li'); //grab the links inside the ul;

  //togle Nav
  burger.addEventListener('click', () => {
    //add event lisner to click
    nav.classList.toggle('nav-active'); //add the class list nav-active throw the javascript which is createt on css
    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    //burger animation
    burger.classList.toggle('toggle');
  });
};

// call the function
navSlide();
