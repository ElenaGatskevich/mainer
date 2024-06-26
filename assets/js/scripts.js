
function init() {
    new Swiper(".main-slider", {

        loop: true,
        spaceBetween: 20,
        breakpoints: {
            1281: {
                slidesPerView: 4
            },
            1100: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1

            },
            0: {
                slidesPerView: 1
            }
        },
        navigation: {
            nextEl: '.main-slider-next',
            prevEl: '.main-slider-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    new Swiper(".main-slider-cart", {

        loop: true,
        spaceBetween: 20,
        breakpoints: {
            1281: {
                slidesPerView: 4
            },
            1100: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2

            },
            480: {
                spaceBetween: 10,
                slidesPerView: "auto"

            },
            0: {
                spaceBetween: 10,
                slidesPerView: "auto"
            }
        },
        navigation: {
            nextEl: '.main-slider-next',
            prevEl: '.main-slider-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    new Swiper(".brand__swiper", {
        loop: true,
        grid: {
            rows: 2,
        },
        spaceBetween: 20,
        breakpoints: {
            1281: {
                slidesPerView: "auto",
                grid: {
                    rows: 2,
                }
            },
            960: {
                slidesPerView: "auto",
                grid: {
                    rows: 1,
                }
            },
            720: {
                slidesPerView: "auto",
                grid: {
                    rows: 1,
                }
            },

            0: {

                grid: {
                    rows: 1,
                },
                slidesPerView: "auto",
            }
        },
        navigation: {
            nextEl: '.brand-slider-next',
            prevEl: '.brand-slider-prev',
        }


    });
    new Swiper(".maining__images", {

        loop: true,
        slidesPerView: 1,
        pagination: {
            el: '.maining__images_pagination',
            clickable: true,
        }


    });
    new Swiper(".maining__slider", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        breakpoints: {
            1280: {
                slidesPerView: "auto",
            },

            768: {
                slidesPerView: "auto",

            },
            480: {
                slidesPerView: "auto",
            },
            0: {
                slidesPerView: "auto",
            }
        },
        navigation: {
            nextEl: '.maining__slider-next',
            prevEl: '.maining__slider-prev',
        },


    });
    new Swiper(".maining__slider_most-profitable", {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 4,
        breakpoints: {
            1280: {
                slidesPerView: "auto",
            },

            768: {
                slidesPerView: "auto",

            },
            480: {
                slidesPerView: "auto",
            },
            0: {
                slidesPerView: "auto",
            }
        },
        navigation: {
            nextEl: '.maining__slider_most-profitable-next',
            prevEl: '.maining__slider_most-profitable-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },


    });
    new Swiper(".maining__slider_most-like", {
        spaceBetween: 20,
        loop: true,
        slidesPerView: 4,
        breakpoints: {
            1280: {
                slidesPerView: 4,
            },

            768: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 2,
            }
        },
        navigation: {
            nextEl: '.maining__slider_most-profitable-next',
            prevEl: '.maining__slider_most-profitable-prev',
        },


    });
    new Swiper(".case-slider_slider", {
        loop: true,
        spaceBetween: 40,


        breakpoints: {
            1280: {
                slidesPerView: 3,

            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            }
        },
        slidesPerView: 3,
        navigation: {
            nextEl: '.case-slider__next',
            prevEl: '.case-slider__prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    });
    new Swiper(".reviews-slider", {
        loop: true,

        navigation: {
            nextEl: '.reviews-slider__next',
            prevEl: '.reviews-slider__prev',
        },
        centeredSlidesBounds: true,
        spaceBetween: 16,
        slidesPerView: 1,
        breakpoints: {
            1280: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,

            },
            480: {
                slidesPerView: 2,


            },
            0: {
                slidesPerView: 1,


            }

        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },


    });
    new Swiper(".awards-slider", {
        loop: true,
        spaceBetween: 40,

        breakpoints: {
            1280: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            480: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            }
        },
        slidesPerView: 3,
        navigation: {
            nextEl: '.awards-slider__next',
            prevEl: '.awards-slider__prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    });
    new Swiper(".massmedia-slider", {
        loop: true,
        spaceBetween: 20,

        breakpoints: {
            1280: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            480: {
                slidesPerView: "auto",
            },
            0: {
                slidesPerView: "auto",
            }
        },
        slidesPerView: 3,
        navigation: {
            nextEl: '.massmedia-slider__next',
            prevEl: '.massmedia-slider__prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },

    });


    const thumb = new Swiper(".thumbs", {

        loop: true,

        slidesPerView: 3,


        spaceBetween: 20,


        breakpoints: {
            1280: {
                slidesPerView: 3,

            },
            769: {
                slidesPerView: 3,
                direction: "horizontal",

            },

            0: {
                spaceBetween: 10,
                slidesPerView: 4,
                direction: "horizontal",
            }
        },
        direction: "vertical",

        navigation: {
            nextEl: '.thumbs-prev',
            prevEl: '.thumbs-next',
        },


    });
    const main = new Swiper(".images__main", {
        loop: true,
        freeMode: true,


        thumbs: {
            swiper: thumb,
        }
    });



    const thumbAbout = new Swiper(".about__thumbs", {

        loop: true,

        freeMode: true,
        spaceBetween: 10,


        breakpoints: {
            1280: {
                slidesPerView: 4,
            },
            769: {
                slidesPerView: 4,

            },

            0: {
                spaceBetween: 5,
                slidesPerView: 4,

            }
        },

        slidesPerView: 4,



    });
    const mainAbout = new Swiper(".about__main", {
        loop: true,
        slidesPerView: 1,
        freeMode: true,
        navigation: {
            nextEl: '.about-prev',
            prevEl: '.about-next',
        },
        thumbs: {
            swiper: thumbAbout,
        }

    });


}
    document.addEventListener("DOMContentLoaded", (function () {

            Fancybox.bind("[data-fancybox]");



            setTimeout(init, 10);
        }

    ));
    window.addEventListener('resize', (e) => {
        setTimeout(init, 10);
    });

const parent = document.querySelectorAll('.parent');
const parentMobile=document.querySelectorAll('.parent_mobile');
const drop = document.querySelectorAll('.dropdown-menu');
    parent.forEach(element => element.addEventListener('mouseenter', showChild, false));
    parent.forEach(element => element.addEventListener('mouseleave', hideChild, false));
    drop.forEach(element => element.addEventListener('mouseenter', showDrop, false));
   drop.forEach(element => element.addEventListener('mouseleave', hideDrop, false));
    parentMobile.forEach(element => element.addEventListener('click', openMenu, false));
/* Это для меню по ховеру */
function hideDrop() {

    this.classList.remove("dropdown-menu_active");
    //this.parentNode.classList.remove("parent_open");
    this.parentNode.classList.remove("parent_open_drop");
   // this.classList.remove("menu-horizont__child-border");
}
function showDrop() {

    this.parentNode.classList.add("parent_open_drop");
}
function showChild() {

        this.children[1].classList.add("dropdown-menu_active");
        this.classList.add("parent_open");
        this.parentNode.classList.add("menu-horizont__child-border");

}
function hideChild() {

    this.classList.remove("parent_open");
    this.parentNode.classList.remove("menu-horizont__child-border");
}
/**/

/* Для мобильного меню по клику*/
function openMenu() {

        this.classList.toggle("parent_mobile_active");
    event.stopPropagation();
         }
/**/

   const answerAccordion = document.querySelectorAll(".accordion-group__accordion");

    answerAccordion.forEach(element => element.addEventListener('click', openAccordion, false));

function openAccordion() {
    this.classList.toggle("accordion-group__accordion_active");
}


    const filterAccordion = document.querySelectorAll(".filter-group__accordion");
    filterAccordion.forEach(element => element.addEventListener('click', openAccordionFilter, false));

function openAccordionFilter() {
    this.classList.toggle("filter-group__accordion_open");
}


    const filterToggle =  document.querySelectorAll(".filter__toggle");

    filterToggle.forEach(element => element.addEventListener('click',function () {
        this.classList.toggle("filter_open");
    },false));



    const tabsLinks =  document.querySelectorAll(".tab__links");
    tabsLinks.forEach(element => element.addEventListener('click',function () {
        this.classList.toggle("tab__links_active");
    },false));

    function openTab(tabName) {

        const tabs = document.querySelectorAll(".tab__content");
        tabs.forEach(element => element.classList.remove("tab__content_active"));
        tabsLinks.forEach(element => element.classList.remove("tab__links_active"));
        document.getElementById(tabName).classList.toggle('tab__content_active');
    }


const tabCharacterictic =  document.querySelectorAll(".product__properties_link");
tabCharacterictic.forEach(element => element.addEventListener('click',function () {
   document.getElementById("all").click();
},false));
