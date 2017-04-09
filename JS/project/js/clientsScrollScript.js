function load() {
    var arrowLeft = document.getElementById('navigation').getElementsByTagName('img')[0];
    var arrowRight = document.getElementById('navigation').getElementsByTagName('img')[1];
    arrowLeft.addEventListener('click', clientsMoveLeft);
    arrowRight.addEventListener('click', clientsMoveRight);
}

function clientsMoveLeft() {
    var logos = document.getElementsByClassName('clients')[0].getElementsByClassName('row')[0].getElementsByTagName('div');
    logos[0].parentElement.insertBefore(logos[0], logos[logos.length - 1].nextSibling);
    var tmp = logos[logos.length - 1].className;
    for (var i = logos.length - 2; i >= 0; i--) {
        logos[i + 1].className = logos[i].className;
    }
    logos[0].className = tmp;
}

function clientsMoveRight() {
    var logos = document.getElementsByClassName('clients')[0].getElementsByClassName('row')[0].getElementsByTagName('div');
    logos[0].parentElement.insertBefore(logos[logos.length - 1], logos[0]);
    var tmp = logos[0].className;
    for (var i = 0; i < logos.length - 1; i++) {
        logos[i].className = logos[i + 1].className;
    }
    logos[logos.length - 1].className = tmp;
}

window.addEventListener('load', load);