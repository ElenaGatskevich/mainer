
    document.addEventListener("DOMContentLoaded", (function () {

            Fancybox.bind("[data-fancybox]");
            new Swiper(".main-slider",{


                spaceBetween:20,
                breakpoints: {
                    1281:{
                        slidesPerView: 4
                    },
                    1100:{
                        slidesPerView: 3
                    },
                    768:{
                        slidesPerView: 2
                    },
                   480: {
                       slidesPerView: 1

                    },
                    0:{
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
            new Swiper(".brand__swiper",{

                grid:{
                    rows:2,
                },
                slidesPerView: 5,
                breakpoints: {
                    1281:{
                        slidesPerView: 5,
                        grid:{
                        rows:2,
                        }
                    },
                    960:{
                        slidesPerView: 3,
                        grid:{
                            rows:1,
                        }
                    },
                    720:{
                        slidesPerView: 2,
                        grid:{
                            rows:1,
                        }
                    },

                    0:{
                        slidesPerView: 1,
                        grid:{
                            rows:1,
                        }
                    }
                },
                navigation: {
                    nextEl: '.brand-slider-next',
                    prevEl: '.brand-slider-prev',
                }


            });
            new Swiper(".maining__images",{


                slidesPerView: 1,
                pagination:{
                    el:'.maining__images_pagination'
                }


            });
            new Swiper(".maining__slider",{


                slidesPerView: 4,
                breakpoints: {
                    1280:{
                        slidesPerView: 4,
                    },

                    768:{
                        slidesPerView: 2,

                    },
                    480:{
                        slidesPerView: 1,
                    },
                    0:{
                        slidesPerView: 1,
                    }
                },
                navigation: {
                    nextEl: '.maining__slider-next',
                    prevEl: '.maining__slider-prev',
                },


            });
            new Swiper(".maining__slider_most-profitable",{


                slidesPerView: 4,
                breakpoints: {
                    1280:{
                        slidesPerView: 4,
                    },

                    768:{
                        slidesPerView: 2,

                    },
                    480:{
                        slidesPerView: 1,
                    },
                    0:{
                        slidesPerView: 1,
                    }
                },
                navigation: {
                    nextEl: '.maining__slider_most-profitable-next',
                    prevEl: '.maining__slider_most-profitable-prev',
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },


            });
            new Swiper(".case-slider_slider",{

               spaceBetween:40,

                breakpoints: {
                   1280:{
                        slidesPerView: 3,
                        },
                    768:{
                        slidesPerView: 3,
                        spaceBetween:15
                    },
                    480:{
                        slidesPerView: 1,
                    },
                    0:{
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
            new Swiper(".reviews-slider",{
                navigation: {
                    nextEl: '.reviews-slider__next',
                    prevEl: '.reviews-slider__prev',
                },
                spaceBetween:16,
                slidesPerView: 1,
                breakpoints: {
                    1280: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween:6,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween:0

                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween:6

                    }

                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                },



            });
            new Swiper(".awards-slider",{

                spaceBetween:40,

                breakpoints: {
                    1280:{
                        slidesPerView: 3,
                    },
                    768:{
                        slidesPerView: 3,
                        spaceBetween:15
                    },
                    480:{
                        slidesPerView: 1,
                    },
                    0:{
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
           var main= new Swiper(".images__main",{

                slidesPerView: 1,


            });

            var thumb=new Swiper(".thumbs",{


                centeredSlidesBounds: true,

                spaceBetween: 20,


                breakpoints: {
                    1280:{
                        slidesPerView: 3,
                    },
                    769:{
                        slidesPerView:3,

                    },

                    0:{
                        spaceBetween: 10,
                        slidesPerView: 4,
                        direction:"horizontal",
                    }
                },
                direction:"vertical",
                slidesPerView: 3,
                navigation: {
                    nextEl: '.thumbs-prev',
                    prevEl: '.thumbs-next',
                },
                thumbs:{
                    swiper:main,
                }


            });
        }

    ));


var parent = document.querySelectorAll('.parent');
var parentMobile=document.querySelectorAll('.parent_mobile');
var drop = document.querySelectorAll('.dropdown-menu');
    parent.forEach(element => element.addEventListener('mouseenter', showChild, false));
    parent.forEach(element => element.addEventListener('mouseleave', hideChild, false));
    drop.forEach(element => element.addEventListener('mouseenter', showDrop, false));
    drop.forEach(element => element.addEventListener('mouseleave', hideDrop, false));
    parentMobile.forEach(element => element.addEventListener('click', openMenu, false));

function hideDrop() {
    this.classList.remove("dropdown-menu_active");
    this.parentNode.classList.remove("parent_open");
    this.parentNode.classList.remove("parent_open_drop");
    this.classList.remove("menu-horizont__child-border");
}

function showDrop() {
    this.parentNode.classList.add("parent_open_drop");
}

function showChild() {
    if (this.children.length > 1) {
        this.children[1].classList.add("dropdown-menu_active");
        this.classList.add("parent_open");
        this.parentNode.classList.add("menu-horizont__child-border");

    } else {
        return false;
    }
}

function hideChild() {
    setTimeout(() => this.classList.remove("parent_open"), 1000);
}
function openMenu() {
        event.stopPropagation()
        this.children[1].classList.toggle("dropdown-menu_active");
        this.children[1].classList.toggle("border-round");
        this.children[1].classList.toggle("menu-column__child-border");
        this.classList.toggle("menu-column__item_open");
        this.classList.toggle("dropdown-menu__item-border");
         }


    var answerAccordion = document.getElementsByClassName("accordion-group__accordion");
    var i;

    for (i = 0; i < answerAccordion.length; i++) {
        answerAccordion[i].addEventListener("click", function() {
            this.classList.toggle("accordion-group__accordion_active");
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }
    var filterAccordion = document.getElementsByClassName("filter-group__accordion");


    for (i = 0; i < filterAccordion.length; i++) {
        filterAccordion[i].addEventListener("click", function() {
            this.classList.toggle("filter-group__accordion_open");
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }

    var filterToggle = document.getElementsByClassName("filter__toggle");


    for (i = 0; i <  filterToggle.length; i++) {
        filterToggle[i].addEventListener("click", function() {

            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    }
