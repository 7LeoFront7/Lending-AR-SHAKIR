let burger = document.querySelector('.bx-menu');
let burgerpop = document.querySelector('.burger');
let burgerclose = document.querySelector('.bx-caret-left-circle');


burger.addEventListener('click', function(){
burgerpop.classList.add('open')
})

burgerclose.addEventListener('click', function(){
    burgerpop.classList.remove('open')
    })