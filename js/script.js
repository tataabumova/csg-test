document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const burgerBtn = document.getElementById("burgerBtn");
  const nav = document.getElementById("nav");
  const closeBtn = document.getElementById("closeBtn");
  const scrollToTop = document.getElementById("scrollToTop");
  const btnElems = document.querySelectorAll('.tab-btn');
  const resetActivityFn = () => {
    btnElems.forEach(btnElem => {
      btnElem.classList.remove('tab-btn-active')
    })
    document.querySelectorAll('.catalog__items').forEach(catalogElem => {
      catalogElem.classList.remove('catalog__items--active')
    })
  }

  //Меню
  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      nav.classList.add("active");
      body.classList.add("active-nav");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      nav.classList.remove("active");
      body.classList.remove("active-nav");
    });
  }


  //Стрелочка наверх
  if (scrollToTop) {
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }

  if (typeof Swiper !== 'undefined') {
    // Инициализация слайдеров
    new Swiper('#mainSwiper .swiper-container', {
      spaceBetween: -1,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper('#secondarySwiper .swiper-container', {
      spaceBetween: -1,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper('#productSwiper .swiper-container', {
      spaceBetween: 70,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        940: {
          slidesPerView: 2
        },
        1460: {
          slidesPerView: 3
        }
      }
    });

    new Swiper('#productBottomSwiper .swiper-container', {
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  //Каталог табы

  btnElems.forEach(btnElem => {
    btnElem.addEventListener('click', () => {
      const targetId = btnElem.getAttribute('data-target-id');

      const targetCatalogElem = document.querySelector('.catalog__items[data-id="' + targetId + '"]')
      if (targetCatalogElem) {
        resetActivityFn();
        btnElem.classList.add('tab-btn-active')
        targetCatalogElem.classList.add('catalog__items--active')
      }
    })
  })
});