function load() {
    images = document.getElementsByClassName('sliderImage');
    sliderText = document.getElementsByClassName('sliderText');
    sliderText[1].style.display = 'block';
    images[0].style.width = '0%';
    images[0].style.left = '0';
    images[1].style.width = '100%';
    images[1].style.left = '0';
    images[2].style.width = '0%';
    images[2].style.right = '0';
    timerSlideAuto = setInterval(imgSlide, 3000);
    timerSlideOnce = null;
    var sliderBack = document.getElementById('sliderBack');
    var sliderForward = document.getElementById('sliderForward');
    sliderBack.addEventListener('click', slideBack);
    sliderForward.addEventListener('click', slideForward);
}

function imgSlide() {
    var shift = 0;
    if (images[2].style.width === '0%' && images[0].style.width === '0%') {
        sliderText[0].parentElement.insertBefore(sliderText[0], sliderText[2].nextSibling);
        sliderText[1].style.display = 'block';
        sliderText[0].style.display = 'none';
        var timerSlide = setInterval(function () {
            shift++;
            images[2].style.width = shift + '%';
            images[1].style.width = 100 - shift + '%';
            if (100 <= shift) {
                images[0].parentElement.insertBefore(images[0], images[2].nextSibling);
                images = document.getElementsByClassName('sliderImage');
                images[0].style.width = '0%';
                images[0].style.right = '';
                images[0].style.left = '0';
                images[1].style.width = '100%';
                images[1].style.right = '';
                images[1].style.left = '0';
                images[2].style.width = '0%';
                images[2].style.left = '';
                images[2].style.right = '0';
                clearInterval(timerSlide);
            }
        }, 10);
    }
}

function imgSlideBack() {
    var shift = 0;
    if (images[0].style.width === '0%' && images[2].style.width === '0%') {
        sliderText[0].parentElement.insertBefore(sliderText[2], sliderText[0]);
        sliderText[1].style.display = 'block';
        sliderText[2].style.display = 'none';
        images[1].style.right = '0';
        images[1].style.left = '';
        var timerSlide = setInterval(function () {
            shift++;
            images[0].style.width = shift + '%';
            images[1].style.width = 100 - shift + '%';
            if (100 <= shift) {
                images[0].parentElement.insertBefore(images[2], images[0]);
                images = document.getElementsByClassName('sliderImage');
                images[0].style.width = '0%';
                images[0].style.right = '';
                images[0].style.left = '0';
                images[1].style.width = '100%';
                images[1].style.right = '';
                images[1].style.left = '0';
                images[2].style.width = '0%';
                images[2].style.left = '';
                images[2].style.right = '0';
                clearInterval(timerSlide);
            }
        }, 10);
    }
}

function slideBack() {
    clearInterval(timerSlideAuto);
    clearInterval(timerSlideOnce);
    imgSlideBack();
    timerSlideOnce = setTimeout(function () { timerSlideAuto = setInterval(imgSlide, 3000); }, 2000);
}

function slideForward() {
    clearInterval(timerSlideAuto);
    clearInterval(timerSlideOnce);
    imgSlide();
    timerSlideOnce = setTimeout(function () { timerSlideAuto = setInterval(imgSlide, 3000); }, 2000);
}

window.addEventListener('load', load);
