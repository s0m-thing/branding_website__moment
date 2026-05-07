console.clear;

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 24,

    navigation: {
        nextEl: "#review-next",
        prevEl: "#review-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },

        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 4,
        }
    }
});