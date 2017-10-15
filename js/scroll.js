//propiedades

var ps = {

    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    cabezote: document.querySelector("header")

}

//metodos

var ms = {

    inicioScroll: function(){

        document.addEventListener("scroll", ms.efectoParalax);

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
    }

}

ms.inicioScroll();
