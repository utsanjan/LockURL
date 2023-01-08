"use strict";

function resizeForm(){
    var width=(window.innerWidth>0)?window.innerWidth:document.documentElement.clientWidth;
    if(width > 1024){document.getElementById("social-menu").checked = true;
    document.getElementById("social-menu").style.visibility = "hidden";
    document.getElementById("ham1").style.visibility = "hidden";
    document.getElementById("ham2").style.visibility = "hidden";
    document.getElementById("ham3").style.visibility = "hidden"} 
    else {document.getElementById("social-menu").checked = false;
    document.getElementById("social-menu").style.visibility = "visible";
    document.getElementById("ham1").style.visibility = "visible";
    document.getElementById("ham2").style.visibility = "visible";
    document.getElementById("ham3").style.visibility = "visible"}    
    }window.onresize = resizeForm;
    resizeForm();
    
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