window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const nav = document.querySelectorAll('.liNav');
    const image = document.querySelector('.logoImg');
    const scrollTop = document.documentElement.scrollTop;
  
    if (scrollTop > 0) {

      header.classList.add('scroll');
<<<<<<< HEAD
      header.style.height = '90px'
=======
      header.style.height = '110px'
>>>>>>> 8ec883af65038e6139e899ec48afc451c0a2ccb0
      for (var i = 0; i < nav.length; i++) {
        nav[i].classList.add('scrollNav');
      }
      image.src = "./img/logoBlue.png";

    } else {

      header.classList.remove('scroll');
      header.style.height = '110px'
      for (var i = 0; i < nav.length; i++) {
        nav[i].classList.remove('scrollNav');
      }
      image.src = "./img/logoWhite.png";

    }
  });

var scroll = new SmoothScroll('a.scroll', {
    speed: 800,
    speedAsDuration: true
});