// $('.bi-chevron-right').click(function () {
//     $('.carousel-container').css({
//         'transform': 'translateX(-50%)'

//     });
  
// });
// $('.bi-chevron-left').click(function () {
//     $('.carousel-container').css({
//         'transform': 'translateX(0%)'
//     });
  
// });
// let currentIndex = 0;
// const cardsPerView = 3;
// const totalCards = $('.product-card').length;

// $('.next').click(function () {
//   if (currentIndex < totalCards - cardsPerView) {
//     currentIndex++;
//     updateCarousel();
//   }
// });

// $('.prev').click(function () {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateCarousel();
//   }
// });

// function updateCarousel() {
//   const cardWidth = $('.product-card').outerWidth(true);
//   $('.carousel-track').css('transform', `translateX(-${cardWidth * currentIndex}px)`);
// }


$('.size').click(function () {
  $('.size').removeClass('active');
  $(this).addClass('active');
});


// count

let ubDate=$('.count p').val==1;
$('.bi-plus').click(function () {
  ubDate++;
  $('.count p').text(ubDate);
});
$('.bi-dash').click(function () {
  ubDate--;
  $('.count p').text(ubDate);
});
// if (ubDate=1) {
//  $('.bi-dash').removeClass('bi-dash');
  
// }
// elseif(ubDate>1) ;{
//    $('.bi-dash').addClass('bi-dash');
// };
 
