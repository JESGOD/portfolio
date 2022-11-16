const imgs_gallery =[
    {
        id:"1",
        nombre:"gallery_dj",
        url:"imgs/gamer.jpg"
    },
    {
        id:"3",
        nombre:"gallery_dj",
        url:"imgs/sapo.jpg"
    },
    {
        id:"2",
        nombre:"gallery_dj",
        url:"imgs/palaman.jpg"
    },
   
    {
        
        id:"4",
        nombre:"gallery_dj",
        url:"imgs/musica.jpg"
    },
    {
        id:"5",
        nombre:"gallery_webDeb",
        url:"imgs/webDeb.jpg"
    }
]
const img_initialGallery = document.querySelector(".img-gallery1"); 
const imgLightboxGallery = document.querySelector(".img-lightboxGallery");
const contenedorLightboxGallery = document.querySelector(".containerLightboxGallery");
const btns_gallery = document.querySelectorAll(".btn-gallery");
btns_gallery[0].addEventListener("click",back);
btns_gallery[1].addEventListener("click",next);
img_initialGallery.addEventListener("click", function(){
    
    aparecerImagenGallery(img_initialGallery.getAttribute("src"));
    aparecerContenedorLightboxGallery();
    aparecerBtnsGallery();
    
})

function aparecerImagenGallery(imgRuta){
    imgLightboxGallery.setAttribute("src",imgRuta);
    imgLightboxGallery.classList.add("show-img-lightbox");
}

function aparecerContenedorLightboxGallery() {
    contenedorLightboxGallery.classList.add("show-contenedor-lightbox");
}

function aparecerBtnsGallery(){
    btns_gallery.forEach(function(btn){
        btn.classList.add("show-btns-gallery");
    })
}

   
contenedorLightboxGallery.addEventListener("click", function(e){
    if((e.target != imgLightboxGallery)&&(e.target != btns_gallery[0])&&(e.target != btns_gallery[1])){
        contenedorLightboxGallery.classList.remove("show-contenedor-lightbox");
        imgLightboxGallery.classList.remove("show-img-lightbox");
        
    }
})



let imgActual= 0;
window.addEventListener("DOMContentLoaded", function(){ //sirve oara que se ejecute una funcion sin necesidad de que se haya terminado de cargar por completo la pagina
    recorrerInfoFotos();
})
function recorrerInfoFotos(){
    const itemActual = imgs_gallery[imgActual];
    imgLightboxGallery.setAttribute("src",itemActual.url);
}

function back() {
    imgActual --;
    if(imgActual < 0  ){
        imgActual= 0;
    }
    recorrerInfoFotos();
}
function next(){
    imgActual ++;
    if( imgActual > imgs_gallery.length-1 ){
        imgActual= imgs_gallery.length-1;
    }
    recorrerInfoFotos();  
}