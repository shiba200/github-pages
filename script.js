$(function() {
  $('.slider').slick({
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 769, //399px以下のサイズに適用
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
