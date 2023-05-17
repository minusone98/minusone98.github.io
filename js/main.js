// STICKY NAVEGATION BAR 
let nav = document.querySelector('.nav__container');
    window.addEventListener("scroll", ()=>{
        if(document.documentElement.scrollTop > 18){
            nav.classList.add('nav__sticky');
        }else{
            nav.classList.remove('nav__sticky');
        };
    });



// NEW SLIDER CODE

// let index = 1;
// muestraSlides(index);
// function moveSlide(n){
//     muestraSlides(index +=n);

// }
// function posicionSlide(){
//     muestraSlides(index=n);
// }
// /**/
// function muestraSlides(n){
//     let i;
//     let slides = document.getElementsByClassName('.slider__page');
//     let barras = document.getElementsByClassName('.slider__bar');

//     if (n > slides.length){
//         index = 1;
//     }
//     if (n < 1){
//         index = slides.length();
//     }
//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = 'none';
//     }
//     for(i = 0; i < slider.length; i++){
//         slides[i].className = barras[i].className.replace('bar__active',"");
//     }

//     slides.[index-1].style.display = 'block';
//     barras[indice-1].className += 'bar__active';
// }

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
// setInterval(function tiempo(){
//     muestraSlides(indice+=1)
// },4000);

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('slider__page');
    let barras = document.getElementsByClassName('bar');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" bar__active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}


// const   slider                = document.querySelector('#slider');
// let     sliderSection         = document.querySelectorAll('.slider__section');
// let     sliderSectionLast     = sliderSection[sliderSection.length-1];

// const btnLeft = document.querySelector('#btn__left');
// const btnRight = document.querySelector('#btn__right');

// slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// function next(){
//     let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
//     slider.style.marginLeft = "-200%";
//     slider.style.transition = "all .7s";
//     setTimeout(function(){
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("beforeend", sliderSectionFirst)
//         slider.style.marginLeft = "-100%";
//     },700);
// }
// btnRight.addEventListener('click', ()=>
//     next() 
// );

// function prev(){
//     let   sliderSection     = document.querySelectorAll('.slider__section');
//     let   sliderSectionLast = sliderSection[sliderSection.length-1];
//     slider.style.marginLeft = "0";
//     slider.style.transition = "all .7s";
//     setTimeout(function(){
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("afterbegin", sliderSectionLast)
//         slider.style.marginLeft = "-100%";
//     },700);
// }
// btnLeft.addEventListener('click', ()=>
//     prev() 
// );

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
