// transiciones
const transition2 = document.getElementById('transition2');
const transition3 = document.getElementById('transition3');
const cargarImagen = (observes, observer) =>{
 observes.forEach((observe)=>{
    if(observe.isIntersecting){
        observe.target.classList.add('transicionVista');
    }else{
        observe.target.classList.remove('transicionVista'); 
    }
});
}
const observer = new IntersectionObserver(cargarImagen,{
    root: null,
    threshold: 1.0
});

observer.observe(transition2);
observer.observe(transition3);

//titulo interactivo.
var holaMundo = document.getElementById('holaMundo');
var str = holaMundo.innerHTML;
holaMundo.innerHTML= "";
var speed = 200;
var i = 0;
function typeWriter(){
    if(i<str.length){
        holaMundo.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWriter,speed);
    }
}
setTimeout(typeWriter,speed);


