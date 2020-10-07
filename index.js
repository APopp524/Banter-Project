const element = document.querySelector('.my-element');
element.style.setProperty('--animate-duration', '5s')
element.classList.add('animate__animated', 'animate__bounceInUp');

element.addEventListener('animationend', () => {
    element.classList.add('animate__animated', 'animate__bounceOutUp');
  });