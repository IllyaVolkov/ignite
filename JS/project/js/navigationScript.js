function load() {
    // Arrow up
    var upArr = document.getElementsByClassName('up');
    for (var i = 0; i < upArr.length; i++) {
        upArr[i].addEventListener('click', function () {
            scrollSmooth(0);
        });
    }

    // Arrow down
    var downArr = document.getElementsByClassName('down');
    for (var i = 0; i < upArr.length; i++) {
        downArr[i].addEventListener('click', function () {
            scrollSmooth(document.getElementsByTagName('footer')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top);
        });
    }

    // Contact us
    document.getElementById('contactUs').addEventListener('click', function () {
        scrollSmooth(document.getElementsByClassName('contact')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top);
    });
}

function scrollSmooth(position) {
    var currentPos = document.documentElement.scrollTop || document.body.scrollTop;
    var step = (position - currentPos) / 20;
    var timerScroll = setInterval(function () {
        currentPos += step;
        window.scrollTo(0, currentPos);
        if (currentPos - position < 10 && position - currentPos < 10) { window.scrollTo(0, currentPos); clearInterval(timerScroll); }

    }, 10);
}

window.addEventListener('load', load);
