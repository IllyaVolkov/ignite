function load() {
    document.getElementsByClassName('review')[0].style.display = 'block';
    document.getElementsByClassName('author')[0].style.display = 'block';
    reviewButtons = document.getElementById('reviewButtons').getElementsByTagName('div');
    reviewButtons[0].style.background = '#ffe600';
    for (var i = 0; i < reviewButtons.length; i++) {
        reviewButtons[i].addEventListener('click', selectReview);
    }
}

function selectReview() {
    var reviews = document.getElementsByClassName('review');
    var authors = document.getElementsByClassName('author');
    var tmp = 0;
    for (var i = 0; i < reviewButtons.length; i++) {
        if (this === reviewButtons[i]) tmp = i;
        reviewButtons[i].style.background = '#fff';
        reviews[i].style.display = 'none';
        authors[i].style.display = 'none';
    }
    reviewButtons[tmp].style.background = '#ffe600';
    reviews[tmp].style.display = 'block';
    authors[tmp].style.display = 'block';
}

window.addEventListener('load', load);