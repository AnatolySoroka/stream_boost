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


const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', onBurgerBtn);

function onBurgerBtn() {
    document.querySelector('.menu').classList.toggle('show');
    document.querySelector('.header__btn').classList.toggle('show');
    document.querySelector('body').classList.toggle('show');
}