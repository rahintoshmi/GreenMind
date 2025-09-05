$('.review-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  dots: true,          // enable dots
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 991,
      settings: { slidesToShow: 1 }
    }
  ]
});
