"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* =====================================
		TESTIMONIALS SLIDER
	======================================== */
    var testimonialsSlider = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================
		VIDEO MODAL
	======================================== */
    new ModalVideo(".js-modal-btn");

    /* =====================================
		NAVBAR BEHAVIOR
	======================================== */
    window.addEventListener("scroll", navBehavior);
    window.addEventListener("load", navBehavior);

    function navBehavior() {
        if (window.pageYOffset > 5) {
            document.querySelector(".navbar").classList.add("active");
        } else {
            document.querySelector(".navbar").classList.remove("active");
        }

        if (window.pageYOffset > 1000) {
            document.querySelector("#scrollTop").classList.add("active");
        } else {
            document.querySelector("#scrollTop").classList.remove("active");
        }
    }

    /* =====================================
		MOVE TO TOP OF THE PAGE
	======================================== */
    document
        .getElementById("scrollTop")
        .addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo(0, 0);
        });

    /* =====================================================
		BOOTSTRAP SCROLLSPY
	===================================================== */
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });
});