
let hamburgerIcon = document.querySelector('.hamburger-icon');
let linksMenu = document.querySelector('.links');
let icon = document.querySelector('.icon-container');
let parent = document.querySelector('.nav');


hamburgerIcon.addEventListener('click', () => {
  linksMenu.classList.toggle('show');
    icon.classList.toggle('show');


});
// if ($('.hamburger-icon').css('display') == 'none') {
//   linksMenu.classList.remove('show');
//   icon.classList.remove('show');
    
// }

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    linksMenu.classList.remove('show');
    icon.classList.remove('show');
  }
});
// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 768) {
//     parent.innerhtml = `
//     <div class="hamburger-icon">
//     <i class="bi bi-list"></i>
//   </div>
//     `;
//     hamburgerIcon = document.querySelector('.hamburger-icon');
//     hamburgerIcon.addEventListener('click', () => {
//       linksMenu.classList.toggle('show');
//       icon.classList.toggle('show');
//     });
//   }
// });



// third
// let tabs= document.querySelectorAll('.tabs');
let menBtn= document.querySelector('.men');
let womenBtn= document.querySelector('.women');
let men= document.querySelectorAll('.men-card');
let women= document.querySelectorAll('.women-card');
// let tabContents = document.querySelectorAll('.tab-content');





$('.men-btn').click(function () {
  $('.men-btn').addClass('active');
  $('.women-btn').removeClass('active');
  $('.men-card').addClass('active');
  $('.women-card').removeClass('active');
  $('.men-card'.css({
    'transform': 'rotateY(45deg)'
  }));
});
$('.women-btn').click(function () {
  $('.women-btn').addClass('active');
  $('.men-btn').removeClass('active');
  $('.women-card').addClass('active');
  $('.men-card').removeClass('active');
});






// accordian


  $('.question').click(function () {
    let isActive = $(this).hasClass('active');
    $('.question').removeClass('active');
    $('.answer').removeClass('active').slideUp(400);
   if (!isActive) {
      $(this).addClass('active');
      $(this).next('.answer').addClass('active').slideDown(400);
    }
  });
//   $('.question').click(function () {
//     let $this = $(this);
//     let isActive = $this.hasClass('active');

//     $('.question').removeClass('active');
//     $('.answer').removeClass('active').stop(true, true).slideUp(200);

//     if (!isActive) {
//         $this.addClass('active');
//         $this.next('.answer').addClass('active').stop(true, true).slideDown(200);
//     }
// });





  // form

  /^[^\s@]+@[^\s@]+\.[^\s@]+$/


  $('#contactForm').click(function (e) {
    e.preventDefault();

    let isValid = true;

    let fname = $('.fname').val().trim();
    let email = $('.email').val().trim();

    // Clear previous errors
    $('.error').text('');

    // Validate First Name
    if (fname === '') {
      $('.fname-error').text('First name is required');
      isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      $('.email-error').text('Enter a valid email address');
      isValid = false;
    }


    if (isValid) {
      alert('Form submitted successfully!');
      $('#contactForm')[0].reset();
      
    }
  });










