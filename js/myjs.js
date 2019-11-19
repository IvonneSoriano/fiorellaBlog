var scroll = 0;    
    //   ANIMACIONES DE MENU
    function animacionNetworks(){

    if(!($('.brand-info').hasClass('active'))){
        var iconos=document.querySelectorAll('.brand-info .social-networks-menu>span');
        console.log(iconos.length);
        i=0;
        $.each(iconos,function(){
            $(this).css('transition-delay',+(0.7+(i/10))+"s");
            i++;
        });
    }
    }
function showSubMenu(){
    $('.main-nav').addClass('hidden');
    $('.submenu').addClass('active');
}

function watchHeader(){
    var $header = $('header');
    
    if(scroll < $(window).scrollTop()){
        scroll= $(window).scrollTop()-1;
        $header.css('top','-100px');
    }
    else{
        scroll= $(window).scrollTop()+1;
        $header.css('top','0px');
    }
}

$(document).ready(function () {
    var mainSwiper = new Swiper('.main-swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.next-button-swiper'
        },
    });
    var secondSwiper = new Swiper('.secundary-swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.next-button-swiper'
        },
    });
    var titleSwiper = new Swiper('.title-swiper', {
        slidesPerView: 1,
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: '.next-button-swiper'
        },
    });
    var numberSwiper = new Swiper('.number-swiper', {
        slidesPerView: 1,
        loop: true,
        direction: "vertical",
        navigation: {
            nextEl: '.next-button-swiper'
        },
        pagination: {
            el: '.swiper-pagination',
            type: "progressbar",
        },
    });

    $('.next-button-swiper').click(function () {
        mainSwiper.slideNext(500);
        secondSwiper.slideNext(500);
        titleSwiper.slideNext(500);
        numberSwiper.slideNext(500);
    });

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    $(document).scroll(function(){
        var top = $(document).scrollTop();
        // alert(top+" alto ");
        $('.image-vertical').css("transform","translate3d(0px,"+(-1*top/70)+"px,0px)");
        $('.image-horizontal').css("transform","translate3d(0px,"+(-1*top/70)+"px,0px)");

        $('.blog-item .image-container a').css("backgroundPositionY",(-1*top/60));
        
      });
      $('.toggle-button').click(function(){
        $('.toggle-button').toggleClass('active');
        $('body').toggleClass('menu-open');
        if($('.toggle-button').hasClass('active')){
            // animacionNetworks();
            $('.main-menu').addClass('active');
            setTimeout(
                function(){
                  $('.brand-info,.nav').addClass('active');
                }, 100);
        }
        else{
            $('.brand-info,.nav').removeClass('active');
            setTimeout(
                function(){
                    $('.main-menu').removeClass('active');
                }, 710);    
        }
          
      });

    //   $('.hasSubmenu').click(showSubMenu());
      $('.hasSubmenu').click(function(){
        $('.main-nav').addClass('hidden');
        $('.submenu').addClass('active');
        $('.close-submenu').addClass('active');
      });
      $('.close-submenu').click(function(){
        $('.submenu').removeClass('active');
        $('.main-nav').removeClass('hidden');
        $('.close-submenu').removeClass('active');
      });
      $(document).scroll(function(){
          watchHeader();
      });

})