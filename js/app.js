const menuBtn = document.querySelector('.burger');
const navigation= document.querySelector('.mobile-nav')
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('toggle');
    navigation.classList.toggle('open-nav');
    navigation.classList.toggle('display');
    nav.classList.toggle('stopAnimation');
})

