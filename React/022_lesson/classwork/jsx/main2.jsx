 let promise = new Promise((resolve, reject) => {
     xhr = new XMLHttpRequest;
     xhr.open('GET', 'image.jpg', true);
     xhr.responseType = 'blob';
     xhr.onload = function () {
         if (xhr.status == 200) {
             resolve(this.response);
         } else {
             var error = new Error(this.statusText);
             error.code = this.status;
             reject(error);
         }
     };
     xhr.onerror = function () {
         reject(new Error("Network error"));
     };
     xhr.send();
 });

 promise.then(
    (result) => {
        var urlCreator = window.URL || window.webkitURL;
        var img = document.createElement('img');
        img.src = urlCreator.createObjectURL(result);
        document.body.appendChild(img);
    },
    (error) => {
        alert("Rejected: " + error);
    }
  );