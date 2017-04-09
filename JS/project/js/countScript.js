function load() {
    numbers = document.getElementsByClassName('numbers');
    window.addEventListener('scroll', countNumbers);
}

function countNumbers(e) {
    if (window.scrollY + screen.height > numbers[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top) {
        for (var i = 0; i < numbers.length; i++) countNumberIndex(i);
        window.removeEventListener('scroll', countNumbers);
    }
}

function countNumberIndex(i) {
    var value = numbers[i].getElementsByTagName('b')[0].innerHTML.replace(' ', '');
    var curr = 0;
    var localtimer = setInterval(function () {
        try {
            numbers[i].getElementsByTagName('b')[0].innerHTML = new Intl.NumberFormat('ru-RU').format(~~curr);
        } catch(e) {
            numbers[i].getElementsByTagName('b')[0].innerHTML = ~~curr;
        } 
        curr += value / 100;
        if (curr > value - value / 100) {
            try {
                numbers[i].getElementsByTagName('b')[0].innerHTML = new Intl.NumberFormat('ru-RU').format(value);
            } catch (e) {
                numbers[i].getElementsByTagName('b')[0].innerHTML = value;
            }
            clearInterval(localtimer);
        }
    }, 30);
}

window.addEventListener('load', load);