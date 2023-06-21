const animItems = document.querySelectorAll('.animate-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animate');
            } else {
                if (!animItem.classList.contains('animate-no-hide')) {
                    animItem.classList.remove('animate');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll()

    }, 300)
}


// burger btn
const burgerBtn = document.querySelector('.burger__btn');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const headerBtn = document.querySelector('.header__btn');

burgerBtn.addEventListener('click', onBurgerBtn);

function onBurgerBtn() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('show');
    headerBtn.classList.toggle('show');
    body.classList.toggle('show');
}

// scroll to anchors

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        if (body.classList.contains('show')) {
            burgerBtn.classList.remove('active');
            menu.classList.remove('show');
            headerBtn.classList.remove('show');
            body.classList.remove('show');

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        } else {
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            })
        }
    })
}

