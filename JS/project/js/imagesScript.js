function load() {
    // Image selector
    var work = document.getElementsByClassName('work')[0];
    imageSelectorLis = work.getElementsByTagName('li');
    for (var i = 0; i < imageSelectorLis.length; i++) {
        imageSelectorLis[i].addEventListener('click', imageSelector);
    }

    // Image hover
    var imgsToHover = document.getElementsByClassName('selector');
    for (var i = 0; i < imgsToHover.length; i++) {
        imgsToHover[i].addEventListener('mouseover', hoverImage);
        imgsToHover[i].addEventListener('mouseout', unHoverImage);
    }
}

function hoverImage(e) {
    this.getElementsByClassName('imageInfo')[0].style.display = 'block';
}

function unHoverImage(e) {
    this.getElementsByClassName('imageInfo')[0].style.display = 'none';
}

function imageSelector(e) {
    for (var i = 0; i < imageSelectorLis.length; i++) {
        imageSelectorLis[i].className = '';
    }
    e.target.className = 'selected';
    switch (e.target) {
        case imageSelectorLis[0]:
            {
                var images = document.getElementsByClassName('selector');
                for (var i = 0; i < images.length; i++) {
                    images[i].style.display = 'block';
                }
            }
            break;
        case imageSelectorLis[1]:
            {
                var images = document.getElementsByClassName('selector');
                for (var i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                    if (images[i].dataset.category === 'web')
                        images[i].style.display = 'block';
                }
            }
            break;
        case imageSelectorLis[2]:
            {
                var images = document.getElementsByClassName('selector');
                for (var i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                    if (images[i].dataset.category === 'graphic')
                        images[i].style.display = 'block';
                }
            }
            break;
        case imageSelectorLis[3]:
            {
                var images = document.getElementsByClassName('selector');
                for (var i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                    if (images[i].dataset.category === 'photography')
                        images[i].style.display = 'block';
                }
            }
            break;
        case imageSelectorLis[4]:
            {
                var images = document.getElementsByClassName('selector');
                for (var i = 0; i < images.length; i++) {
                    images[i].style.display = 'none';
                    if (images[i].dataset.category === 'illustration')
                        images[i].style.display = 'block';
                }
            }
            break;
    }
}

window.addEventListener('load', load);