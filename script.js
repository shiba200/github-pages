/*$('.slider').slick({
  autoplay:true,
  autoplaySpeed:5000,
  arrows: true, 
  dots: true,
  centerMode: true,
  centerPadding: '25%'
});

$('.slider').on('beforeChange', function(){
  $('.slick-current').removeClass('is--active');
});
$('.slider').on('afterChange', function(){
  $('.slick-current').addClass('is--active');
});*/

$(function() {
  $('.slider').slick({
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
  });
});