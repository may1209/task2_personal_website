const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    grid: {
        rows: 3,
    },
    slidesPerView: 1,
    spaceBetween: 48,
    breakpoints: {
        992: {
            grid: {
                rows: 1,
            },
            slidesPerView: 3,
            spaceBetween: 24
        },
    }
});