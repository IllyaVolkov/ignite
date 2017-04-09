function load() {
    var services = document.getElementsByClassName('service');
    serviceWidth = services[0].clientWidth;
    for (var i = 0; i < services.length; i++) {
        services[i].addEventListener('mouseover', zoomServices);
        services[i].addEventListener('mouseout', unzoomServices);
    }

    var aboutImages = document.getElementsByClassName('about')[0].getElementsByClassName('row')[0].getElementsByTagName('img');
    aboutImgWidth = aboutImages[0].clientWidth;
    for (var i = 0; i < aboutImages.length; i++) {
        aboutImages[i].addEventListener('mouseover', zoomAbout);
        aboutImages[i].addEventListener('mouseout', unzoomAbout);
    }
}

function zoomServices(e) {
    var multiplier = 0;
    var zoomTimer = setInterval(function () {
        multiplier += 0.005;
        e.target.style.width = serviceWidth + serviceWidth * multiplier + 'px';
        e.target.style.top = '-' + serviceWidth * multiplier / 2 + 'px';
        e.target.style.left = '-' + serviceWidth * multiplier / 2 + 'px';
        if (multiplier >= 0.1) {
            e.target.style.width = serviceWidth * 1.1;
            clearInterval(zoomTimer);
        }
    }, 10);

}

function unzoomServices(e) {
    var multiplier = 0.1;
    var zoomTimer = setInterval(function () {
        multiplier -= 0.005;
        e.target.style.width = serviceWidth + serviceWidth * multiplier + 'px';
        e.target.style.top = '-' + serviceWidth * multiplier / 2 + 'px';
        e.target.style.left = '-' + serviceWidth * multiplier / 2 + 'px';
        if (multiplier <= 0.005) {
            
            clearInterval(zoomTimer);
        }
    }, 10);
}

function zoomAbout(e) {
    var multiplier = 0;
    var zoomTimer = setInterval(function () {
        multiplier += 0.005;
        e.target.style.width = aboutImgWidth + aboutImgWidth * multiplier + 'px';
        e.target.style.top = '-' + aboutImgWidth * multiplier / 2 + 'px';
        e.target.style.left = '-' + aboutImgWidth * multiplier / 2 + 'px';
        if (multiplier >= 0.1) {
            e.target.style.width = aboutImgWidth * 1.1;
            clearInterval(zoomTimer);
        }
    }, 10);

}

function unzoomAbout(e) {
    var multiplier = 0.1;
    var zoomTimer = setInterval(function () {
        multiplier -= 0.005;
        e.target.style.width = aboutImgWidth + aboutImgWidth * multiplier + 'px';
        e.target.style.top = '-' + aboutImgWidth * multiplier / 2 + 'px';
        e.target.style.left = '-' + aboutImgWidth * multiplier / 2 + 'px';
        if (multiplier <= 0) {
            e.target.style.width = aboutImgWidth;
            clearInterval(zoomTimer);
        }
    }, 10);
}

window.addEventListener('load', load);