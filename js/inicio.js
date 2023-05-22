let slider = document.querySelector('.slider__contenedor')
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let sliderIndividual = document.querySelectorAll('.slider__page')
let intervalo = 3000;
/* por si el cliente cambia el tamaño, para no romper la maquetacion*/
window.addEventListener('resize', function(){
    width = sliderIndividual[0].clientWidth;
});

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;
};
setInterval(function(
    slides();
), intervalo);
