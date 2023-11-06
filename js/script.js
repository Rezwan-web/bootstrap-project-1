// ================ slider prt start ==================
$('.popular_destination_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',

  });
  // -----------------------slider end prt --------------------
// ================ counter prt start ==================
$('.count').counterUp({
  delay: 10,
  time: 1000
});

 // ----------------------- counter end prt --------------------
  // ================ back to top button prt start ==================
  let top_button = document.querySelector('.top_button')


  window.addEventListener('scroll',function(){
  
    let scrolling = this.scrollY
  
    if(scrolling > 200){
      top_button.classList.add('janina')
    }else{
      top_button.classList.remove('janina')
    }
  })
  top_button.addEventListener('click',function(){

    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  
  
  })

 // ----------------------- back to top button end prt --------------------
