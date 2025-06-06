$('.signup').click(function () {
  $('.modal').css({
    'display': 'flex'
  });
});


$('.close-modal').click(function () {
  $('.modal').css({
    'display': 'none'
  });
});

let width=$(document).innerWidth();
if (width<600) {setTimeout(() => {
  $('.modal').css({
    'display': 'flex'
  });
}, 8000);

  
}


$('.size').click(function () {
  $('.size').removeClass('active');
  $(this).addClass('active');
});


// count

let upDate=$('.count p').val==1;
$('.bi-plus').click(function () {
  upDate++;
  $('.count p').text(upDate);
   
});
$('.bi-dash').click(function () {
  upDate--;
  // alert(upDate);
  $('.count p').text(upDate);
 
 
 
});

 if (upDate<2) {
 
  $('.bi-dash').addClass('disable');
 }
 else if (upDate>1) {
  $('.bi-dash').removeClass('disable');
 }
