$('.promo button').click(function () {
  const promoCode = $('.promo input').val().trim();
//   alert(promoCode);

  if (promoCode === "First500") {
   $('.Discount').addClass('active');
    // alert('Promo code applied!');
  } else {
    $('.discount').css('display', 'none'); 
  }
});
