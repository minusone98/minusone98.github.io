// let slider = document.querySelector('.slider__contenedor')
// let contador = 1;
// let width = sliderIndividual[0].clientWidth;
// let sliderIndividual = document.querySelectorAll('.slider__page')
// let intervalo = 3000;
// /* por si el cliente cambia el tamaño, para no romper la maquetacion*/
// window.addEventListener('resize', function(){
//     width = sliderIndividual[0].clientWidth;
// });

// function slides(){
//     slider.style.transform = "translate("+(-width*contador)+"px)";
//     slider.style.transition = "transform 1s";
//     contador++;
// };
// setInterval(function(
//     slides();
// ), intervalo);


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
    let slides = document.getElementsByClassName('slider__card');
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
        barras[i].className = barras[i].className.replace(" active", "");
    }
    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';
}
let width = sliderIndividual[0].clientWidth;
let sliderIndividual = document.querySelectorAll('.slider__card')
window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth;
});
