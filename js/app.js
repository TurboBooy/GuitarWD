(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const reviewsSwiper = document.querySelector(".swiper-reviews");
    if (reviewsSwiper) {
        new Swiper(".swiper-reviews", {
            autoHeight: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const script_reviewsSwiper = document.querySelector(".swiper-reviews");
    if (script_reviewsSwiper) {
        new Swiper(".swiper-reviews", {
            autoHeight: true,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });
    }
    window["FLS"] = true;
    isWebp();
})();