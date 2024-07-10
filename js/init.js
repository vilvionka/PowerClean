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
  variableWidth: true,
  prevArrow: $('.spectre_slider_arrow_left'),
  nextArrow: $('.spectre_slider_arrow_right'),
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
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        arows: true,
        prevArrow: $('.blog_slider_arrow_left'),
        nextArrow: $('.blog_slider_arrow_right'),
        variableWidth: false
      }
    },
    {
      breakpoint:450,
      settings: {
        slidesToShow: 1,
        arows: true,
        prevArrow: $('.blog_slider_arrow_left'),
        nextArrow: $('.blog_slider_arrow_right'),
        variableWidth: true
      }
    },
  ]
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
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        appendDots: $('.personal_slider_dots'),
        arows: true,
        prevArrow: $('.personal_slider_arrow_left'),
        nextArrow: $('.personal_slider_arrow_right'),
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
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
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        appendDots: $('.about_slider_dots'),
        arows: true,
        prevArrow: $('.about_slider_arrow_left'),
        nextArrow: $('.about_slider_arrow_right'),
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        dots: false,
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
  prevArrow: $('.action_slider_arrow_left'),
  nextArrow: $('.action_slider_arrow_right'),
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        arows: true,
      }
    }
  ]
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
  appendDots: $('.works_slider_dots'),
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        dots: false,
        arows: true,
        prevArrow: $('.works_slider_arrow_left'),
        nextArrow: $('.works_slider_arrow_right'),
      }
    }
  ]
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

$('.js_footer_middle_scroll').click(function () {
  $('html, body').animate({ scrollTop: 0 + 'px' }, 1000)
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  if (height > 700) {
    $('.js_call_fixed').addClass('active');
  } else {
    $('.js_call_fixed').removeClass('active');
  }
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.js_gamburg_box_accordion_header_one');
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
      $el.find('.js_gamburg_box_accordion_body_one').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.js_gamburg_box_accordion_one'), false);
});

$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var accordionHeader = this.el.find('.js_gamburg_box_accordion_header_too');
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
      $el.find('.js_gamburg_box_accordion_body_too').not($next).slideUp().parent().removeClass('open');
    }
  }

  var accordion = new Accordion($('.js_gamburg_box_accordion_too'), false);
});