function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);  
    });
}

ativaScrollSuave('a[href*=inforContainer]');
ativaScrollSuave('a[href*=palestrantesSobre]');
ativaScrollSuave('a[href*=inscricaoFormulario]');