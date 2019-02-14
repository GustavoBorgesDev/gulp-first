$(document).ready( function () {

    // Config Carrosel Banner
    $("#carrossel-banner").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        mouseDrag: false,
        responsive:{
            768: {
            items: 1
            },
            1000:{
            items:1
            }
        }
    })
    
    // Config slide display nas Duvidas
    $("#linha-duvidas section").click(function() {
        var localizaH3 = $(this).find("section") 
        var localizaParagrafo = $(this).find("p")
        //localizaH3.toggleClass("gira-figure")
        localizaParagrafo.slideToggle()
    })

    // Config da Maledeta Tabela
    var cont = 0
    $(window).resize(function() {
        if (document.documentElement.clientWidth > 769) {    
            $(".span-one div, .span-two div, .span-three div").remove()
        } else if (document.documentElement.clientWidth <= 768) {
            while(cont < 1) {
                $(".span-one").each(function () {
                    $(this).prepend("<div><span style='font-weight: bold;'>Portaria Remota: </span></div>").addClass("bolds")
                })
                
                $(".span-two").each(function () {
                    $(this).prepend("<div><span style='font-weight: bold;'>Portaria Virtual: </span></div>")
                })
                
                $(".span-three").each(function () {
                    $(this).prepend("<div><span style='font-weight: bold;'>Portaria Eletrônica: </span></div>")
                })
                
                $("tbody tr").click(function () {
                    $(this).find(".td-geral").toggle("slow")
                })
                cont = cont + 1
            }
        }
    }).resize()

    let a = "Sou A"
    const x = "Sou X"

})