/* Window Load functions */

jQuery(window).load(function($){
    setTimeout(function(){
        jQuery('.banner .wrapper>div').addClass('active');
    });
});


jQuery(document).ready(function($){

    /* circle animation */
    if($('.Discover_Our_World .inner').hasClass('come-in')){
        
        var _lhref = $('.main_circle .col:first-child').attr('href');
        var _limg = $('.main_circle .col:first-child').attr('data-img');
        var _ltitle = $('.main_circle .col:first-child').attr('data-title');
        var _lsubtitle = $('.main_circle .col:first-child').attr('data-subtitle');
        var _lbgimg = $('.main_circle .col:first-child').attr('data-bgimg');
        var _lbgimg = 'url('+_lbgimg+')';
        $('.Discover_Our_World .colin .btn').attr('href' , _lhref);
        $('.Discover_Our_World .colin img').attr('src' , _limg);
        $('.Discover_Our_World .colin h3').text(_ltitle);
        $('.Discover_Our_World .colin p').text(_lsubtitle);
        $('.Discover_Our_World .right_col .bg').css('background-image' , _lbgimg);
    }

    
    $('.main_circle .col').hover(function(){
        var _href =  $(this).attr('href');
        var _bg =  $(this).attr('data-bgimg');
        var _bg = 'url('+_bg+')';
        var _img =  $(this).attr('data-img');
        var _title =  $(this).attr('data-title');
        var _subtitle =  $(this).attr('data-subtitle');
        $('.Discover_Our_World .right_col .bg').css('background-image' , _bg);
        $('.Discover_Our_World .colin img').attr('src' , _img);
        $('.Discover_Our_World .colin .btn').attr('href' , _href);
        $('.Discover_Our_World .colin h3').text(_title);
        $('.Discover_Our_World .colin p').text(_subtitle);
    });
 /* circle animation end */

    if ($('.the_best').length > 0) {
        var owl = $('.the_best .inner').owlCarousel({
            items: 7,
            loop: true,
            //autoWidth: true,
            margin: 0,
            nav:false,
            dots:false,
            //center: true,
            //autoplay: true,
            //autoPlaySpeed: 500,
            //autoPlayTimeout: 500,
            //smartSpeed: 500,
            responsive:{
                0:{                  
                    autoWidth: true,
                    center:true,
                },
                1280:{
                    autoWidth: true,
                    center:true,
                },
                1400:{
                    items: 7,
                }
              }
        });
         // Custom Navigation
        $('.the_best .custom-prev').click(function () {
            owl.trigger('prev.owl.carousel');
        });

        $('.the_best .custom-next').click(function () {
            owl.trigger('next.owl.carousel');
        });
    }
    if ($('.article_news').length > 0) {
        var owl1 = $('.article_news .wrap').owlCarousel({
            items: 3,
            //loop: true,
            //autoWidth: true,
            margin: 0,
            nav:false,
            dots:true,
            //center: true,
            //autoplay: true,
            //autoPlaySpeed: 500,
            //autoPlayTimeout: 500,
            //smartSpeed: 500,
            responsive:{
                0:{                  
                    items: 1,
                },
                768:{                  
                    items: 2,
                },
                1024:{                  
                    items: 3,
                },
            }
        });
         // Custom Navigation
        $('.article_news .custom-prev').click(function () {
            owl1.trigger('prev.owl.carousel');
        });

        $('.article_news .custom-next').click(function () {
            owl1.trigger('next.owl.carousel');
        });
    }

    /* gallery slider */
    if ($('.gallery_slider').length > 0) {
        var owl2 = $('.gallery_slider .inner').owlCarousel({
            //loop: true,
            //autoWidth: true,
            nav:false,
            dots:true,
            //center: true,
            //autoplay: true,
            //autoPlaySpeed: 500,
            //autoPlayTimeout: 500,
            //smartSpeed: 500,
            responsive:{
                0:{                  
                    items: 2,
                    slideBy: 2,
                    margin: 20,
                },
                768:{                  
                    items: 3,
                    slideBy: 3,
                    margin: 30,
                },
                1024:{                  
                    items: 4,
                    slideBy: 4,
                    margin: 30,
                },
                1280:{                  
                    items: 6,
                    slideBy: 6,
                    margin: 30,
                },
            }
        });
         // Custom Navigation
        $('.gallery_slider .custom-prev').click(function () {
            owl2.trigger('prev.owl.carousel');
        });

        $('.gallery_slider .custom-next').click(function () {
            owl2.trigger('next.owl.carousel');
        });
    }
    /* mobile menu  */
    if ($(window).width() < 1024) {
        $('header .bottom_col nav>ul>li.menu-item>a').after('<span class="drop"></span>');
    }
    $('header .hum').click(function(){
        $('header .bottom_col').addClass('active');
    });
    $('header .bottom_col .close,header .bottom_col .bg').click(function(){
        $('header .bottom_col').removeClass('active');
    });
    $('header .bottom_col nav>ul>li.menu-item>a+.drop').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });

    /* megnify */
    $('[data-pop="megnify"]').each(function(){
        var _this = $(this);
        _this.find('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
              mainClass: 'mfp-with-zoom', 
              gallery:{
                        enabled:true
                    },
            
              zoom: {
                enabled: true, 
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function(openerElement) {
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            }        
        });

    });
/* megnify */


    


});

jQuery(window).resize(function($){

});


var _btn = $('.backtop');
jQuery(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    _btn.addClass('show');
  } else {
    _btn.removeClass('show');
  }
});

_btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/* counter */
// var a = 0;
// jQuery(window).scroll(function () {
//     var oTop = $(".model").offset().top - $(window).innerHeight();
//     if (a == 0 && $(window).scrollTop() > oTop) {
//         $(".counter").each(function () {
//             var $this = $(this),
//                 countTo = $this.attr("data-number");
//             $({
//                 countNum: $this.text()
//             }).animate(
//                 {
//                     countNum: countTo
//                 },

//                 {
//                     duration: 2500,
//                     easing: "swing",
//                     step: function () {
//                         //$this.text(Math.ceil(this.countNum));
//                         $this.text(
//                             Math.ceil(this.countNum).toLocaleString("en")
//                         );
//                     },
//                     complete: function () {
//                         $this.text(
//                             Math.ceil(this.countNum).toLocaleString("en")
//                         );
//                     }
//                 }
//             );
//         });
//         a = 1;
//     }
// });

/* Scrollbar */

var Scrollbar = window.Scrollbar;
var scrollbarInstance = Scrollbar.init(document.querySelector('#full_wrapper'), {
  damping: 0.1,            
 thumbMinSize: 20,         // Minimum thumb size
 renderByPixels: true,     // Render by whole pixels
 alwaysShowTracks: false,  // Scrollbar tracks visibility
 continuousScrolling: true // Allow scrolling beyond content bounds
});
 
/* Scrollbar end */

/* Counter Logic */
var a = 0;

// Listen to Smooth Scrollbar's scroll event
scrollbarInstance.addListener(function () {
  var scrollTop = scrollbarInstance.scrollTop; // Get Smooth Scrollbar's scroll position
  var windowHeight = $(window).innerHeight(); // Height of the viewport
  var oTop = $("footer").offset().top - $("#full_wrapper").offset().top - windowHeight / 3;
 console.log(scrollTop);
 console.log(oTop);
  if (a == 0 && scrollTop > oTop) {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-number");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2500,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
          complete: function () {
            $this.text(Math.ceil(this.countNum).toLocaleString("en"));
          },
        }
      );
    });
    a = 1; // Ensure the counter runs only once
  }
});


// jQuery Visible Function (with Smooth Scrollbar support)
(function ($) {
    $.fn.visible = function (partial) {
      var $t = $(this);
      var scrollTop = scrollbarInstance.scrollTop; // Get Smooth Scrollbar's scroll top
      var scrollBottom = scrollTop + $(window).height() / 3; // Bottom edge of the visible viewport
      var elementTop = $t.offset().top - $("#full_wrapper").offset().top ; // Adjust for Smooth Scrollbar
      var elementBottom = elementTop + $t.outerHeight();
      var compareTop = partial === true ? elementBottom : elementTop;
      var compareBottom = partial === true ? elementTop : elementBottom;
  
      return compareBottom <= scrollBottom && compareTop >= scrollTop;
    };
  })(jQuery);

// Target elements
var allMods = $(".Discover_Our_World .inner,.Discover_Our_World h2,.Discover_Our_World h6,.animation_sec");

// Listen to Smooth Scrollbar's scroll event
scrollbarInstance.addListener(() => {
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      setTimeout(function () {
        el.addClass("come-in");
        setTimeout(function () {
          var _lhref = $(".main_circle .col:first-child").attr("href");
          var _limg = $(".main_circle .col:first-child").attr("data-img");
          var _ltitle = $(".main_circle .col:first-child").attr("data-title");
          var _lsubtitle = $(".main_circle .col:first-child").attr("data-subtitle");
          var _lbgimg = $(".main_circle .col:first-child").attr("data-bgimg");
          var _lbgimg = "url(" + _lbgimg + ")";
          $(".Discover_Our_World .colin .btn").attr("href", _lhref);
          $(".Discover_Our_World .colin img").attr("src", _limg);
          $(".Discover_Our_World .colin h3").text(_ltitle);
          $(".Discover_Our_World .colin p").text(_lsubtitle);
          $(".Discover_Our_World .right_col .bg").css("background-image", _lbgimg);
        }, 1600);
      }, i * 50);
    }
  });
 
});