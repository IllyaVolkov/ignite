function load() {
    header = document.getElementsByTagName('header')[0];
    headerLis = header.getElementsByTagName('li');
    for (var i = 0; i < headerLis.length; i++) {
        headerLis[i].addEventListener('click', headerClick);
    }
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

function headerClick() {
    for (var i = 0; i < headerLis.length; i++) {
        headerLis[i].className = '';
    }
    this.className = 'selected';
    switch (this) {
        case headerLis[0]: scrollSmooth(0); break;
        case headerLis[1]: scrollSmooth(document.getElementsByClassName('services')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top); break;
        case headerLis[2]: scrollSmooth(document.getElementsByClassName('work')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top); break;
        case headerLis[3]: scrollSmooth(document.getElementsByClassName('about')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top); break;
        case headerLis[4]: scrollSmooth(document.getElementsByClassName('clients')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top); break;
        case headerLis[5]: scrollSmooth(document.getElementsByClassName('contact')[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top); break;
    }
}

window.addEventListener('load', load);