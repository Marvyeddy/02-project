const para = document.getElementsByClassName('para');
const buttons = document.querySelectorAll('.fac-statements');
const plus = document.getElementsByClassName('plus');
const minus = document.getElementsByClassName('minus');
console.log();

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    para[index].classList.toggle('visible');
    plus[index].classList.toggle('invisible');
    minus[index].classList.toggle('visible');
  });
});
