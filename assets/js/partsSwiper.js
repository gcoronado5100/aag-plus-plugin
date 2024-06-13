if (document.querySelector("#partsCarousel")) {
  console.log("partsCarousel exists");
  const partsCarousel = new Swiper("#partsCarousel", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".partsSwiper-button-next",
      prevEl: ".partsSwiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
}
