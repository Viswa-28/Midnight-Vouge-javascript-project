$('.promo button').click(function () {
  const promoCode = $('.promo input').val().trim();
//   alert(promoCode);

  if (promoCode === "First500") {
   $('.Discount').addClass('active');
   
//    ubDatePrice();
   let total = $('.total-val').text()
    // total= parseInt(total);
      total = parseInt(total); 
    let discount= 500;
    total= total - discount;
    $('.total-val').text(`Rs. ${total}`);
  } else {
    $('.discount').css('display', 'none'); 
  }
});



 let upDate = parseInt($(".count p").text());

  function updateCountDisplay() {
    $(".count p").text(upDate);
    if (upDate <= 1) {
      $(".bi-dash").addClass("disable");
    } else {
      $(".bi-dash").removeClass("disable");
    }
  }

  $(".bi-plus").click(function () {
    upDate++;
    updateCountDisplay();
    $('.total-amount').text(`Rs. ${upDate * 2000}`);
    $('.Subtotal').text(`Rs. ${upDate * 2000}`);
    $('.total-val').text(`Rs. ${upDate * 2000}`);

  });

  $(".bi-dash").click(function () {
    if (upDate > 1) {
      upDate--;
      $('.total-amount').text(`Rs. ${upDate * 2000}`);
      $('.Subtotal').text(`Rs. ${upDate * 2000}`);
      $('.total-val').text(`Rs. ${upDate * 2000}`);
      updateCountDisplay();
    }
  });

// Initialize variables

// function ubDatePrice() {
//     const total = subtotal - discount;
//   $('.total-val').text(Rs. ${total});
// }