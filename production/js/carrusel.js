$(document).ready(function(){

    var $mascara, $ancho, intervalo;
    var factor = ($(window).width()/3);
    var indice = 0;
    //var $indice = $('.firstcustomer div').attr('rel');

	cambioPantalla();
    
    $(window).resize(cambioPantalla);

    function cambioPantalla()
    {
    	if ($(window).width()>990) {
    		$mascara = $(".ppal img").css("opacity", "1");
            moverImagenes();
    	}
    } 

    function moverImagenes(e)
    {
        console.log(indice);
        $ancho = -(indice*factor);
        $(".firstcustomer img").css({marginLeft: $ancho +'px'}); 
        avanzaCarrusel();
    }
/*
    function desplazaImg(e)
    {
        $(".firstcustomer img").css({marginLeft: $ancho +'px'});
        //jQuery.fx.interval = 2000;
        clearInterval(intervalo);
        intervalo = setInterval(avanzaCarrusel, 1000);
    }*/

    function avanzaCarrusel()
    {
        
        indice++;
        if (indice = 3)
        {
            indice = 0; 
        }
        //clearInterval(intervalo);
        //intervalo = setInterval(moverImagenes, 2000);
    
    }

});