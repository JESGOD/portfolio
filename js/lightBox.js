const imgsWorks = document.querySelectorAll(".imagen-work");
const imgLightbox = document.querySelector(".img-lightbox");
const contenedorLightbox = document.querySelector(".containerLightbox");

imgsWorks.forEach(function (img) {
    img.addEventListener("click", function () {
        aparecerImagen(img.getAttribute("src"));
        aparecerLightbox();
    })
})


function aparecerLightbox(){
    contenedorLightbox.classList.add("show-contenedor-lightbox");
}

function aparecerImagen(imgRuta){
    imgLightbox.setAttribute("src",imgRuta);
    imgLightbox.classList.add("show-img-lightbox");
}

contenedorLightbox.addEventListener("click", function(e){
    if(e.target != imgLightbox){
        contenedorLightbox.classList.remove("show-contenedor-lightbox");
        imgLightbox.classList.remove("show-img-lightbox");
        
    }
})