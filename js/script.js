const header = document.querySelector("header");

window.addEventListener("scroll",function(){
header.classList.toggle("sticky",window.scrollY>120);
});

$(document).ready(function() {
  var menu = $('#menu-icon');
  var navList = $('.navList');

  menu.click(function() {
      menu.toggleClass('bx-x');
      navList.toggleClass('active');
  });

  $(window).scroll(function() {
      menu.removeClass('bx-x');
      navList.removeClass('active');
  });
});


   

