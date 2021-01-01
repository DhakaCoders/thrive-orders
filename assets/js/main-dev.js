(function($) {
var windowWidth = $(window).width();
$('.humberger-menu-btn').on('click', function(){
	$('.main-nav').slideToggle(300);
  $(this).toggleClass('humber-menu-expend');
});
	
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};

if($('.tbody-td').length){
  $('.tbody-td, .tfooter-td, .tfooter-td').matchHeight();
};


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });
}

/*
----------------------
 Accordion Js
----------------------
*/

$('.faq-accoordion-wrp').on('click', '.faq-accoordion-cp', function() {
    $('.faq-accoordion').find('.ac-box-title').stop().slideUp();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('span').removeClass('active');
    $(this).closest('.faq-accoordion').find('.ac-box-title').stop().slideToggle();
});

$('#differentShippingAddress').on('change', function(){
  if ($(this).is(':checked')) {
    $('.dffshippingAddress').show();
  }else{
    $('.dffshippingAddress').hide();
  }
});


// body animate
if( $('.xs-back-btn-area .xs-back-btn').length ){
  $(".xs-back-btn").click(function(e) {
      e.preventDefault();
      $('body').removeClass('showCart');
  });  
}
if( $('.home .order-con-btn').length ){
  $(".order-con-btn").click(function(e) {
      e.preventDefault();
      $('body').addClass('showCart');
      $('html, body').animate({
          scrollTop: 0
      }, 0);
  });  
}

if( $('a.cartBanner').length ){
  $("a.cartBanner").click(function(e) {
      e.preventDefault();
      $('body').addClass('showCart');
      $('html, body').animate({
          scrollTop: 0
      }, 0);
  });  
}

if( $('.goToVideo').length ){
  $(".goToVideo").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('.save-time-section').offset().top
      }, 800);
  });  
}
if( $('.theDifference').length ){
  $(".theDifference").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('.competitors-section').offset().top
      }, 800);
  });  
}

if( windowWidth > 767 ){
  if($('.scroll').length){
    $(".scroll").click(function(e) {
        e.preventDefault();
        var goto = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(goto).offset().top - 0
        }, 800);
    });
  }

  if( $('.xsOrdertoCart').length ){
    $(".xsOrdertoCart").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.orderCart').offset().top
        }, 800);
    });  
  }
}else{
  if( $('.scroll').length ){
    $(".scroll").click(function(e) {
        e.preventDefault();
        $('body').addClass('showCart');
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });  
  }
  if( $('.home .xsOrdertoCart').length ){
    $(".home .xsOrdertoCart").click(function(e) {
        e.preventDefault();
        $('body').addClass('showCart');
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });  
  }
  if( $('.home .xsOrdertoCart').length ){
    $(".home .xsOrdertoCart").click(function(e) {
        e.preventDefault();
        $('body').addClass('showCart');
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });  
  }
}


function goToByScroll(id, offset){
  if(id){
      // Remove "link" from the ID
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate(
        {scrollTop: $(id).offset().top - offset},
      500);
  }
}

})(jQuery);