
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });