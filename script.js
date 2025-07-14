
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('left-[0]');
        hamburger.classList.toggle('ri-close-large-line');
    })
})


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        speed: 600,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        grabCursor: true,
        breakpoints: {
            640: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById('scroll-up');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;


        if (currentScrollY < lastScrollY) {

            scrollButton.classList.remove('-botton-1/2');
            scrollButton.classList.add('bottom-4');
        } else {

            scrollButton.classList.remove('bottom-4');
            scrollButton.classList.add('-botton-1/2');
        }

        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
});

const header = () => {
    const borderHeader = document.getElementById('navbar');
    console.log(borderHeader);

    if (this.scrollY >= 150) {
        borderHeader.classList.add('border-b', 'border-yellow-300', 'duration-300', 'transform', 'unset')
    } else {
        borderHeader.classList.remove('border-b', 'border-yellow-500', 'duration-300', 'transform', 'unset')
    }
}
window.addEventListener('scroll', header);


const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navList = document.querySelectorAll('.nav-link');

    let temp = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            temp = section.getAttribute('id');
        }

    })

    navLink.forEach(item => {
        item.classList.remove('active');

        if (item.href.includes(temp)) {
            item.classList.add('active');
        }
    })
}

window.addEventListener('scroll', activeLink)





