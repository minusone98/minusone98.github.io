// NAVEGATION CODE
let nav = document.querySelector('.header');
    window.addEventListener("scroll", ()=>{
        if(document.documentElement.scrollTop > 18){
            nav.classList.add('header__sticky');
        }else{
            nav.classList.remove('header__sticky');

        };
    });




// SLIDER CODE
const   slider                = document.querySelector('#slider');
let     sliderSection         = document.querySelectorAll('.slider__section');
let     sliderSectionLast     = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector('#btn__left');
const btnRight = document.querySelector('#btn__right');

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all .7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst)
        slider.style.marginLeft = "-100%";
    },700);
}
btnRight.addEventListener('click', ()=>
    next() 
);

function prev(){
    let   sliderSection     = document.querySelectorAll('.slider__section');
    let   sliderSectionLast = sliderSection[sliderSection.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all .7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast)
        slider.style.marginLeft = "-100%";
    },700);
}
btnLeft.addEventListener('click', ()=>
    prev() 
);

// setInterval(function(){
//     next()
// },5000);



















    









// 'use strict';

// const container = document.querySelector('.container');
// const punto = document.querySelectorAll('.punto');

// // recorrer todos los puntos
// punto.forEach((cadaPunto, i) => {
//   //asignamos un click a cada punto
//   punto[i].addEventListener('click', () => {
//     //guardamos la posicion del punto
//     let posicion = i;
//     //calculamos el espacio de desplazamiento del container
//     let operacion = posicion * 33.333;
//     //movemos el container
//     container.style.transform = `translateX(${operacion}%)`;
//     container.style.transition = `all ease 1s`;

// // recorrer todos los puntos
//     punto.forEach((cadaPunto, i) => {
//       //quitamos la clase activo a todos los punto
//       punto[i].classList.remove('activo');
//     });
//       //añadimos la clase activo en el punto q se hizo click
//     punto[i].classList.add('activo');
//   });
// });
