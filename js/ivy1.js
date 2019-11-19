
$(document).ready(function () {
  

  var swiperMain = new Swiper('.main-slick', {
    loop: true,
    speed: 350,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.button-next-swiper'
    },
    fadeEffect: {
      crossFade: true
    },
  });
  var swiperSecundary = new Swiper('.secundary-slick', {
    loop: true,
    speed: 400,
    autoWidth:true,
    navigation: {
      nextEl: '.button-next-swiper'
    },
    fadeEffect: {
      crossFade: true
    },
  });
  var swiperText = new Swiper('.titles', {
    loop: true,
    speed: 300,
    autoplay: false,
    effect: 'fade',
    loopAdditionalSlides: 10,
    touchRatio: 0,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.button-next-swiper'
    },
  });

  var swiperNumber = new Swiper('.pag', {
    loop: true,
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.button-next-swiper'
    },
  });
  function startMoveArrow() {

    $('.button-next-swiper img').toggleClass('move');
  }
  var moveNext = setInterval(startMoveArrow, 500);



  // $('.wrapper').mousemove(function (e) {

  //   var t = -(e.clientY / 50);
  //   var l = -(e.clientX / 30);
  //   var ls = l / 2;
  //   var ts = t / 2;
  //   if($(window).width()<=600){
  //     $('.slider .img .main-slick').css('transform', 'translate3d(' + ls + 'px,' + ts + 'px,0)');
  //   }
  //   else{

  //   // $('.slider .img').css('transform','translate3d('+t+'px,'+l+'px,0)');
  //   $('.slider .img .main-slick').css('transform', 'translate3d(' + l + 'px,' + t + 'px,0)');
  //   $('.slider .img .secundary-slick').css('transform', 'translate3d(' + ls + 'px,' + ts + 'px,0)');
  //   }
    

  // });

  $('.toggle-menu').click(function () {
    $('body, html').toggleClass("menu-open");
    $('.menu').toggleClass("active");

    $('.toggle-menu').addClass("out");
    setTimeout(
      function () {
        $('.brand-info,.nav').addClass("active");
      }, 100);
    setTimeout(
      function () {
        $('.close-icon').addClass("active");
      }, 2600);

  });

  $('.close-icon').click(function () {
    $('.close-icon').removeClass("active");
    setTimeout(function () {
      $('.brand-info,.nav').removeClass("active");
    }, 200);

    setTimeout(function () {

      $('body, html').removeClass("menu-open");
      $('.toggle-menu').removeClass("out");
      $('.menu').removeClass("active");
    }, 3000);

  });
  $('.nv-item').click(function (e) {
    e.preventDefault();
    var link = $(this).children("a").attr("href");
    if($(this).hasClass("has-children")){
      $('.main-nav').addClass("hidden");
      $("."+link).addClass("active");
      $(".close-panels").addClass("active");

    }
    else{
     
      $(this).addClass('active');
      setTimeout(function () {
        window.open(link, "_top");
      }, 690);
    }
  });
  $(".close-panels span").click(function(){
    $(".close-panels").removeClass("active");
    $(".sub-menu.active").removeClass("active");
    $('.main-nav').removeClass("hidden");
  });

})
