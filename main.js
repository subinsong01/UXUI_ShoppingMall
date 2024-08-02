document.addEventListener("DOMContentLoaded", function() {
    let list = document.querySelector('.list');
    let items = document.querySelectorAll('.item');
    let dots = document.querySelectorAll('.dot');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length;

    next.onclick = function() {
        if (active < lengthItems - 1) {
            active++;
            reloadSlider();
        }
    };

    prev.onclick = function() {
        if (active > 0) {
            active--;
            reloadSlider();
        }
    };

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.transform = `translateX(-${checkLeft}px)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[active].classList.add('active');
    }

    reloadSlider(); // 초기 슬라이더 로드
});
