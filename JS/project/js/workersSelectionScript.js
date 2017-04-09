function load() {
    workerInfos = document.getElementsByClassName('teamInfo')[0].getElementsByClassName('col-lg-8');
    workerInfos[0].style.display = 'block';

    workerSkills = document.getElementsByClassName('skills')[0].getElementsByClassName('row');
    workerSkills[0].style.display = 'block';
    var canvases = workerSkills[0].getElementsByTagName('canvas');
    for (var i = 0; i < canvases.length; i++) {
        var percent = canvases[i].parentElement.getElementsByTagName('p')[0].innerHTML.replace('%', '');
        drawCircle(canvases[i], percent);
    }

    workers = document.getElementsByClassName('workers');
    for (var i = 0; i < workers.length; i++) workers[i].addEventListener('click', selectWorker);

    var closeButtons = document.getElementsByClassName('closeButton');
    for (var i = 0; i < closeButtons.length; i++)
        closeButtons[i].addEventListener('click', function () { this.parentElement.style.display = 'none'; });
}

function selectWorker(e) {
    for (var i = 0; i < workerInfos.length; i++) {
        workerInfos[i].style.display = 'none';
        workerSkills[i].style.display = 'none';
    }
    var i = 0;
    while (this !== workers[i]) i++;
    workerInfos[i].style.display = 'block';
    workerSkills[i].style.display = 'block';
    scrollAll(workerSkills[i]);
}

function drawCircle(canvas, percent) {
    var context = canvas.getContext("2d");
    var endAngle = percent / 100 * 2 * Math.PI + 0.5 * Math.PI;
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 3, 0.5 * Math.PI, endAngle, false);
    context.lineWidth = 6;
    context.strokeStyle = "#ffe600";
    context.stroke();
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2 - 3, 0.5 * Math.PI, endAngle, true);
    context.lineWidth = 5;
    context.strokeStyle = "#ffffff";
    context.stroke();
}

function scrollAll(row) {
    var canvases = row.getElementsByTagName('canvas');
    for (var i = 0; i < canvases.length; i++) {
        scrollOne(canvases[i]);
    }
}

function scrollOne(canvas) {
    var number = canvas.parentElement.getElementsByTagName('p')[0];
    var percent = number.innerHTML.replace('%', '');
    var counter = 0;
    var timer = setInterval(function () {
        number.innerHTML = counter + '%';
        drawCircle(canvas, counter);
        counter++;
        if (counter > percent) clearInterval(timer);
    }, 20);
}

window.addEventListener('load', load);