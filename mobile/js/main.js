if($('#fullpage').length > 0){

  $('#fullpage').fullpage({
      //options here
      afterRender: function () {
          setInterval(function () {
              $.fn.fullpage.moveSlideRight();
          }, 5000);
      },

      onLeave: function(index, nextIndex, direction){
        console.log(index, nextIndex, direction);

        if(direction == 'down'){
            $('header').removeClass('slidedown');
            $('header').addClass('slideup');
        }else if(direction == 'up'){
            $('header').removeClass('slideup');
            $('header').addClass('slidedown');
        }if(nextIndex == 1){
            $('header').removeClass('slidedown');
            $('header').removeClass('slideup');
        }        
    }

  });//fullpage js

}

var menuList = $('.menu_list > li');
var menuSubList = menuList.find('ul');

menuList.click(function(){
  $(this).find('ul').slideToggle();
  $(this).siblings('li').find('ul').slideUp();
});



if($('.main_slide').length > 0){
const swiper = new Swiper('.banner .swiper-container', {
  speed:500,
  // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
    },  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // on: {
    //   activeIndexChange: slideEffect() 
    // }
  
  });

// function slideEffect(){

// }


}



if($('.panthere_slide').length > 0){
const swiper = new Swiper('.panthere .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2.5,
        spaceBetween: 5
      }
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  

}



if($('.detail_slide').length > 0){
const swiper = new Swiper('.product_picture .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

}




if($('.additional_slide').length > 0){
const swiper = new Swiper('.additional .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2.5,
        spaceBetween: 10
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  

}

if($('#tabs').length > 0){
  $( "#tabs" ).tabs();
}



/* ANIMATIONS */

var header = $('header');
var lastscrollAmt = 0;

$(window).scroll(function(){
    var currentscrollAmt = $(this).scrollTop();

    if(currentscrollAmt > lastscrollAmt + 10){
        header.removeClass('slidedown');
        header.addClass('slideup');
    }else if(currentscrollAmt < lastscrollAmt){
        header.removeClass('slideup');
        header.addClass('slidedown');
    }
    if(currentscrollAmt == 100){
        header.removeClass('slidedown');
        header.removeClass('slideup');
    }
    lastscrollAmt = currentscrollAmt;
});




$('.hamburger-button').click(function(){
  $('aside').addClass('active');
  $('body').css({
      position:'fixed'
});

$('aside .close').click(function(){
  $('aside').removeClass('active');
  $('body').css({
    position:'inherit'
});
});

});


$('.pic_links').click(function(){
  $(this).toggleClass('active');
});

$('.cart_delete').click(function(){
  $(this).parent().remove();
  calcTotalPrice();  
});

if($('.cart-form').length > 0){
  
  function calcTotalPrice(){
    cartItem = $('.cart_list > li');
    var itemTotal = 0;

    cartItem.each(function(){
      var itemPrice = $(this).find('.unit_price').attr('data-price') * $(this).find('input').val();
      itemTotal += itemPrice;
    });
    $('.price_total').text(itemTotal.toLocaleString(undefined, {maximumFractionDigits:2}) + '원');
    
    var shippingCost = parseInt($('.shipping_cost').attr('data-shipping-cost'));
    
    var totalPrice = (shippingCost + itemTotal).toLocaleString(undefined, {maximumFractionDigits:2});
    
    $('.total_price').text(totalPrice + '원');

  }
  calcTotalPrice();

  cartItem.find('input').change(function(){
    calcTotalPrice();
  });

  

}



// modal


var closebtn = $('.close a');
var modal = $('.modal');

closebtn.click(function(e){
  e.preventDefault();
  modal.hide();
});