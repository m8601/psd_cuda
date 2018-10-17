var buttons = document.querySelectorAll('.portfolio__btn');

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    buttons.forEach(function(btn){
      btn.classList.remove('portfolio__btn--active');
    })
    e.target.classList.add('portfolio__btn--active');
  })
})