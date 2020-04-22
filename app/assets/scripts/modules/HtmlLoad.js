const xhr = new XMLHttpRequest();
const container = document.getElementById('footer-section');

xhr.onload = function () {
  if (this.status === 200) {
    container.innerHTML = xhr.responseText;
  } else {
    console.warn('did not receive 200 OK from response!');
  }
};

xhr.open('get', 'footer.html');
xhr.send();