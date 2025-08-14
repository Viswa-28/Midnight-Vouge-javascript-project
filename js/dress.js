// $(document).ready(function () {

//     $('.all').click(function () {
//         if($(".product-card").hasClass("men")) {
//      $('men').fadeout(0);
//      $('.product-card').fadeIn(0);
//         };
// });
// });
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

$(document).ready(function () {
    $(".filter-btn").click(function () {
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        let filterValue = $(this).attr("data-filter");

        if (filterValue === "all") {
            $(".product-card").fadeIn(200);
        } else {
            $(".product-card").hide();
            $(`.product-card[data-category='${filterValue}']`).fadeIn(200);
        }
    });
});

