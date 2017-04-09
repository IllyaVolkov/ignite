function load() {
    var inputFields = document.getElementsByTagName('input');
    for (var i = 0; i < inputFields.length; i++) {
        switch (inputFields[i].attributes['name'].value) {
            case 'name': inputFields[i].addEventListener('input', checkName); break;
            case 'mail': inputFields[i].addEventListener('input', checkMail); break;
            case 'subject': inputFields[i].addEventListener('input', checkSubject); break;
        }
    }
    submit = document.getElementsByTagName('form')[0].getElementsByTagName('button')[0];
    warning = document.getElementById('warning');
}

function checkName() {
    if (this.value.search(/[^a-z]/i) != -1) {
        submit.style.display = 'none';
        warning.style.display = 'block';
        warning.innerHTML = 'WARNING! Only latin letters are allowed in field "name"!';
    } else {
        submit.style.display = 'block';
        warning.style.display = 'none';
    }
}

function checkMail() {
    if (this.value.search(/[^a-z0-9_@\.]/i) != -1) {
        submit.style.display = 'none';
        warning.style.display = 'block';
        warning.innerHTML = 'WARNING! Only latin letters, numbers, ".", "@" and "_" are allowed in field "mail"!';
    } else {
        submit.style.display = 'block';
        warning.style.display = 'none';
    }
}

function checkSubject() {
    if (this.value.search(/[^a-z0-9]/i) != -1) {
        submit.style.display = 'none';
        warning.style.display = 'block';
        warning.innerHTML = 'WARNING! Only latin letters and numbers are allowed in field "subject"!';
    } else {
        submit.style.display = 'block';
        warning.style.display = 'none';
    }
}

window.addEventListener('load', load);