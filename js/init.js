$('.main_slider').slick({
  dots: true,
  arows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
  autoplay: false,
  appendDots: $('.main_slider_dots')
});

$('.spectre_slider').slick({
  dots: false,
  arows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  centerMode: false,
  variableWidth: true
});
$('.blog_slider').slick({
  dots: false,
  arows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: false,
  variableWidth: false,
  prevArrow: $('.blog_slider_arrow_left'),
  nextArrow: $('.blog_slider_arrow_right'),
});

$('.personal_slider').slick({
  dots: true,
  arows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: false,
  autoplay: false,
  appendDots: $('.personal_slider_dots'),
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        appendDots: $('.personal_slider_dots'),
        arows: true,
        prevArrow: $('.personal_slider_arrow_left'),
        nextArrow: $('.personal_slider_arrow_right'),
      }
    }
  ]
});
$('.about_slider').slick({
  dots: true,
  arows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  adaptiveHeight: false,
  autoplay: false,
  appendDots: $('.about_slider_dots'), 
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        appendDots: $('.about_slider_dots'),
        arows: true,
        prevArrow: $('.about_slider_arrow_left'),
        nextArrow: $('.about_slider_arrow_right'),
      }
    }
  ]
});

$('.action_slider').slick({
  dots: false,
  arows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  centerMode: false,
});

$('.foto_slider').slick({
  dots: true,
  arows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: false,
  centerMode: true,
  variableWidth: true,
  autoplay: false,
  appendDots: $('.foto_slider_dots'),
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        appendDots: $('.foto_slider_dots'),
        arows: true,
        prevArrow: $('.foto_slider_arrow_left'),
        nextArrow: $('.foto_slider_arrow_right'),
      }
    }
  ]
});
$('.works_slider').slick({
  dots: true,
  arows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  adaptiveHeight: false,
  autoplay: false,
  appendDots: $('.works_slider_dots')
});


$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.question_accardion_item_header');
    accordionHeader.on('click', {
      el: this.el,
      multiple: this.multiple
    },
      this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.question_accardion_item p').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.question_accardion'), false);
});