$(document).ready(function () {

  // --aos--
  AOS.init({
    duration: 400,
    easing: 'ease'
  })

  // --Materialize option--
  $('.button-collapse').sideNav()
  $('.modal').modal({
    startingTop: '0%',
    endingTop: '5%'
  })
})

// --HEADER--
$(function () {
  $(window).on('scroll', function () {
    if ($('.cover-about').height() < $(this).scrollTop()) {
      $('.js-header').addClass('change-color');
    } else {
      $('.js-header').removeClass('change-color');
    }
  });
});

// --NAVBAR--
$(document).ready(function () {
  $(".navbar-nav a").click(function () {
    $(".navbar-collapse").collapse('hide');
  });
});

// --MODAL--
const overlay = $("#js-overlay");
const close = $(".modal-close,#js-overlay");
const open = $(".card-img-top");

open.on('click', function () {
  const id = $(this).attr('id').replace(/js-open-/g, '');
  const modal = $(`#js-modal-${id}`);
  modal.addClass("open");
  overlay.addClass("open");
  $('body').css('overflow-y', 'hidden');
  $('.gallery, .choice-btn').slick('setPosition');
});

close.on('click', function () {
  $(".modal").removeClass("open");
  overlay.removeClass("open");
  $('body').css('overflow-y', 'auto');
});

// --MODAL_IMAGE--
$('.gallery').slick({
  infinite: true,
  fade: true,
  arrows: false,
});

$('.choice-btn').slick({
  infinite: true,
  slidesToShow: 10,
  focusOnSelect: true,
  asNavFor: '.gallery',
});

$('.gallery').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var index = nextSlide;
  $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});

// --