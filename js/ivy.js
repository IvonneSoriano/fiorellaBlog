

$(document).ready(function(){
    $('.slider .main-slick').slick({
        slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
  infinite:true,
  pauseOnHover:false
    })

    $('.slider .secundary-slick').slick({
        slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3050,
  arrows:false,
  infinite:true,
  pauseOnHover:false
    })

    $('.slider').mousemove(function (e) {

    var t=-(e.clientY/30);
    var l=-(e.clientX/30);
        // $('.slider .img').css('transform','translate3d('+t+'px,'+l+'px,0)');
        $('.slider .img .main-slider').css('transform','translate3d('+l+'px,'+t+'px,0)');
        
    })

})