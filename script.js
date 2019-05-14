$(document).ready(function(){
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    	$('.post-pic').on('dblclick', function(){
    	$(this).children('.post-big-like').show();
    	setTimeout(function(){
			$('.post-big-like').hide();
    	},1000);
    	
    	$(this).siblings('.icon-bar').children('.border-heart').addClass('like');
    	})
   	$('.icon-bar').on('click',function(){
   		$(this).children('.border-heart').toggleClass('like');
   		$(this).children('.border-heart').toggleClass('unlike');
	});
});