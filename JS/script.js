/* -------------------- ProgressBar Effect Animation ---------------------------------- */
let progress = document.getElementById('progressBar'); 
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}




/* --------------- Active Section Switch while Scrolling ---------------------------------- */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset; 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}



/* --------------------- Skills Tabs ------------------------------------------------- */
const tabs = document.querySelectorAll('[data-target]'), 
        tabContent = document.querySelectorAll('[data-content]')

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.target)

                tabContent.forEach(tabContents => {
                    tabContents.classList.remove('skills_active')
                })

                target.classList.add('skills_active')

                tabs.forEach(tabContents => {
                    tabContents.classList.remove('skills_active')
                })

                tab.classList.add('skills_active')
            })
        })




/* ----------------- Projects Filter ----------------------------------------------- */
let mixerProjects = mixitup('.projectsContainer', {
    selectors: {
        target: '.projectCard'
    },
    animation: {
        duration: 300
    }
});


/* -------------- Active Projects Filter -------------------------------------------- */
const linkProject = document.querySelectorAll('.projectItem')

function activeProject() {
    linkProject.forEach(l=> l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l=> l.addEventListener("click", activeProject))



/* ------------ Projects Modals ----------------------------------------------------- */
/* View Project Overlay */
const viewProjectModalViews = document.querySelectorAll('.viewProjectModal'),
        viewProjectModalBtns = document.querySelectorAll('.viewProject'),
        viewProjectModalCloses = document.querySelectorAll('.viewProjectModal_exit_btn')

let viewProjectModal = function(viewProjectModalClick) {
    console.log(viewProjectModal)

    let viewProjectModalViews2 = viewProjectModalViews[viewProjectModalClick];

    console.log(viewProjectModalViews2)

    viewProjectModalViews2.classList.add('active-modal');

    /*viewProjectModalViews[viewProjectModalClick].classList.add('active-modal')*/
}

viewProjectModalBtns.forEach((viewProjectModalBtn, i) => {
    viewProjectModalBtn.addEventListener('click', () => {
        viewProjectModal(i)
    })
})

viewProjectModalCloses.forEach((viewProjectModalClose) => {
    viewProjectModalClose.addEventListener("click", () => {
        viewProjectModalViews.forEach((viewProjectModalView) => {
            viewProjectModalView.classList.remove('active-modal')
        })
    })
})


/* View Project Infos Overlay */
const viewProjectModalViews_info = document.querySelectorAll('.viewProjectInfoModal'),
        viewProjectModalBtns_info = document.querySelectorAll('.viewProjectInfo'),
        viewProjectModalCloses_info = document.querySelectorAll('.viewProjectModal_exit_btn')

let viewProjectModal_info = function(viewProjectModalClick_info) {
    viewProjectModalViews_info[viewProjectModalClick_info].classList.add('active-modal')
}

viewProjectModalBtns_info.forEach((viewProjectModalBtn_info, i) => {
    viewProjectModalBtn_info.addEventListener('click', () => {
        viewProjectModal_info(i)
    })
})

viewProjectModalCloses_info.forEach((viewProjectModalClose_info) => {
    viewProjectModalClose_info.addEventListener("click", () => {
        viewProjectModalViews_info.forEach((viewProjectModalView_info) => {
            viewProjectModalView_info.classList.remove('active-modal')
        })
    })
})

/* Infos about project Modal */
const projectModalViews = document.querySelectorAll('.projectsModal'), 
        projectModalBtns = document.querySelectorAll('.project_InfoBtn'),
        projectModalCloses = document.querySelectorAll('.projectsModal_exit_btn')

let projectModal = function(projectModalClick) {
    projectModalViews[projectModalClick].classList.add('active-modal')
}

projectModalBtns.forEach((projectModalBtn, i) => {
    projectModalBtn.addEventListener('click', () => {
        projectModal(i)
    })
})

projectModalCloses.forEach((projectModalClose) => {
    projectModalClose.addEventListener("click", () => {
        projectModalViews.forEach((projectModalView) => {
            projectModalView.classList.remove('active-modal')
        })
    })
})



/* Projects Image Slideshow */
const swiper = new Swiper('.swiper_WoN, .swiper_WoN_small, .swiper_LAGOM, .swiper_LAGOM_resize, .swiper_LAGOM_small, .swiper_ESHOP, .swiper_ESHOP_resize, .swiper_ESHOP_small', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    loop: true, 

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    },
});

/* Projects Image Slideshow without autoplay */
const swiper2 = new Swiper('.swiper_Roboterarm, .swiper_Roboterarm_resize, .swiper_Roboterarm_small, .swiper_SURVIVE, .swiper_SURVIVE_resize, .swiper_SURVIVE_small', {
    loop: true, 

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    },
});

const swiper3 = new Swiper('.swiper_Anleitung, .swiper_Anleitung_resize, .swiper_Anleitung_small', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    
    loop: true, 

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    },
});





/* ----------- Art Slideshow ----------------------------------------------------------- */
/* Art Slideshow Desktop */
var artSwiper = new Swiper('.swiper_Art', {
    effect: 'coverflow',
    calculateHeight: true,
    grabCursor: true, 
    centeredSlides: true, 
    slidesPerView: 3, 
    slideToClickedSlide: true,
    coverflowEffect: {
        /*rotate: 5,*/
        rotate: 0, 
        stretch: 30, 
        depth: 200, 
        modifier: 3,
        slideShadows: true, 
    }, 
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
        /*dynamicBullets: true,*/
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    autoplay: {
        delay: 3500, 
        disableOnInteraction: false,
    }, 
    breakpoints: {
        1408: {
            slidesPerView: 3, 
            coverflowEffect: {
                stretch: 30, 
            }
        },
        1216: {
            slidesPerView: 2, 
            coverflowEffect: {
                stretch: 60, 
            }
        },
        1024: {
            slidesPerView: 2, 
            coverflowEffect: {
                stretch: 50, 
            }
        },
        768: {
            slidesPerView: 2, 
            coverflowEffect: {
                stretch: 55, 
            },
        },
        576: {
            slidesPerView: 1, 
            coverflowEffect: {
                stretch: 55, 
            }
        },
        490: {
            slidesPerView: 1, 
            coverflowEffect: {
                stretch: 0,
            }
        },
    },
});

/* Art Slideshow Mobile */
var artSwiper2 = new Swiper('.swiper_Art_mobile', {
    effect: 'cards',
    calculateHeight: true,
    grabCursor: true, 
    centeredSlides: true, 
    slideToClickedSlide: true,
    cardsEffect: {
        rotate: true, 
        perSlideOffset: 8,
        perSlideRotate: 5,
        slideShadows: true, 
    }, 
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    autoplay: {
        delay: 3500, 
        disableOnInteraction: false,
    },
});


/* Art Slideshow Mobile smaller */
var artSwiper2 = new Swiper('.swiper_Art_mobile_smaller', {
    effect: 'cards',
    calculateHeight: true,
    grabCursor: true, 
    centeredSlides: true, 
    slideToClickedSlide: true,
    cardsEffect: {
        rotate: true, 
        perSlideOffset: 1,
        perSlideRotate: 5,
        slideShadows: true, 
    }, 
    pagination: {
        el: '.swiper-pagination', 
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev',
    },

    loop: true,
    autoplay: {
        delay: 3500, 
        disableOnInteraction: false,
    },
});








/* Show & Close Sidebar (Hamburger Menu) */
const navMenu = document.getElementById('sidebar'), 
        navToggle = document.getElementById('navToggle'), 
        navClose = document.getElementById('nav-close'),
        navClose_home = document.getElementById('nav_close_home'), 
        navClose_about = document.getElementById('nav_close_about'), 
        navClose_skills = document.getElementById('nav_close_skills'), 
        navClose_projects = document.getElementById('nav_close_projects'), 
        navClose_art = document.getElementById('nav_close_art'), 
        navClose_contact = document.getElementById('nav_close_contact')

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navClose_home) {
    navClose_home.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navClose_about) {
    navClose_about.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navClose_skills) {
    navClose_skills.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navClose_projects) {
    navClose_projects.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navClose_art) {
    navClose_art.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}

if(navClose_contact) {
    navClose_contact.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}