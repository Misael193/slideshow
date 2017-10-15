//propiedades

var ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    cabezote: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0
}

//metodos

var ms = {

    inicioScroll: function(){

        document.addEventListener("scroll", ms.efectoParalax);

        for(var i=0; i < ps.botonera.length; i++){
            ps.botonera[i].addEventListener("click", ms.desplazamiento);
        }

    },
    efectoParalax: function(){

        ps.posicionScroll = window.pageYOffset;


        if(ps.posicionScroll > 100){
            ps.cabezote.style.position = "fixed";
            ps.cabezote.style.zIndex = 100;
        }else{
            ps.cabezote.style.position = "relative";
            ps.cabezote.style.zIndex = 100;
        }

        if(ps.posicionScroll > ps.cajaScroll.offsetTop-200){
            for(var i=0; i < ps.articulos.length; i++){
                ps.articulos[i].style.marginLeft = "0%";
            }
        }else{
            for(var i=0; i < ps.articulos.length; i++){
                ps.articulos[i].style.marginLeft = ps.posicionScroll/25 -100 + "%";
            }
        }
    },
    desplazamiento: function(ruta){
        ruta.preventDefault();
        ps.ruta = ruta.target.getAttribute("href");
        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop;
        ps.intervalo = setInterval(function(){
            if(ps.posicionScroll < ps.destinoScroll){
                ps.posicionScroll+= 100;
                if(ps.posicionScroll >= ps.destinoScroll){
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo);
                }
            }
            
            window.scrollTo(0, ps.posicionScroll);
        },50)
        
    }

}

ms.inicioScroll();
