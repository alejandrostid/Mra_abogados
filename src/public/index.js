$(document).ready(function () {
    var ocultar = $(".ocultar");
    var elemento = $(".pie_de_pagina")

    ocultar.click(function () { 
        elemento.hide(500);
        
    });
});