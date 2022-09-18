$(Document).ready(function(){
    $(".burger-item-header").click(function(event){
        $(".burger-item-header").toggleClass('active');
        $(".burger-item-header__body").toggleClass('active');
    });
    $(".burger-item-header__close").click(function(event){
        $(".burger-item-header").toggleClass('active');
        $(".burger-item-header__body").toggleClass('active');
    });


    $(".menu-jobs__link_all").click(function(event){                    //ссылка со всеми
        $(".menu-jobs__link").removeClass('menu-jobs__link_active');       //удаление активных классов у всех ссылок
        $(".menu-jobs__link_all").addClass('menu-jobs__link_active');      //добавление активного класса к ссылке
        $(".jobs__item").addClass('jobs__item_active');                    //добавление активного класса к нужным бокам
    });
    $(".menu-jobs__link_manick").click(function(event){                 //ссылка с каким-то опредленным классом
        $(".menu-jobs__link").removeClass('menu-jobs__link_active');       //удаление активных классов у всех ссылок
        $(".menu-jobs__link_manick").addClass('menu-jobs__link_active');   //добавление активного класса к ссылке
        $(".jobs__item").removeClass('jobs__item_active');                 //удаление активного класса у всех ссылок
        $(".jobs__item_manic").addClass('jobs__item_active');              //добавление активного класса к ссылке

    });
    $(".menu-jobs__link_pedick").click(function(event){
        $(".menu-jobs__link").removeClass('menu-jobs__link_active');
        $(".menu-jobs__link_pedick").addClass('menu-jobs__link_active');
        $(".jobs__item").removeClass('jobs__item_active');
        $(".jobs__item__pedick").addClass('jobs__item_active');

    });
    $(".menu-jobs__link__parick").click(function(event){
        $(".menu-jobs__link").removeClass('menu-jobs__link_active');
        $(".menu-jobs__link__parick").addClass('menu-jobs__link_active');
        $(".jobs__item").removeClass('jobs__item_active');
        $(".jobs__item_parick").addClass('jobs__item_active');

    });


    $(".gallery-slider").slick({ 
        
    });
    $(".jobs__item").click(function(event){
        $(".gallery-slider").toggleClass("gallery-slider_active");
        $(".gallery-slider__close").toggleClass("gallery-slider__close_active");
    });
    $(".gallery-slider__close").click(function(event){
        $(".gallery-slider").toggleClass("gallery-slider_active");
        $(".gallery-slider__close").toggleClass("gallery-slider__close_active");
    });
});