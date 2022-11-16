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

const imgLightboxGallery = document.querySelector(".img-lightboxGallery");
const contenedorLightboxGallery = document.querySelector(".containerLightboxGallery");
const btns_gallery = document.querySelectorAll(".btn-gallery");
btns_gallery[0].addEventListener("click",back);
btns_gallery[1].addEventListener("click",next);

const overlay = document.querySelector(".overlay");
let imgActual= 0;

overlay.addEventListener("click", function(){
    
    recorrerInfoFotos();
    aparecerContenedorLightboxGallery();
    aparecerImagenGallery();
    aparecerBtnsGallery();
    
})

function aparecerImagenGallery(){
   
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