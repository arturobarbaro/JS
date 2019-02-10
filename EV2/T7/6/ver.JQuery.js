(function($){
    $.fn.ver=function(){
        var elemento=$(this);
        cambiarCss();

        $(window).on("resize", cambiarCss);

        function cambiarCss(){
            var altoImagen=$(elemento).height();
            var anchoImagen=$(elemento).width();
            var altoVentana=$(window).height();
            var anchoVentana=$(window).width();
            $(elemento).css({
                "position":"absolute",
                "left":anchoVentana/2-anchoImagen/2,
                "top":altoVentana/2-altoImagen/2
            });
        };
    };
}(jQuery));
