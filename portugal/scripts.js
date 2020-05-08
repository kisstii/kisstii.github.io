console.log('Script file is loaded.')

let myImage = ['/Portugal/images/1.jpg', '/Portugal/images/2.jpg', '/Portugal/images/3.jpg', '/Portugal/images/4.jpg', '/Portugal/images/5.jpg', '/Portugal/images/6.jpg', '/Portugal/images/7.jpg', '/Portugal/images/8.jpg', '/Portugal/images/9.jpg'];

let title = ['Porto', 'Porto', 'Batalha', 'Tomar', 'Sintra', 'Sintra', 'Fatima', 'Ocean', 'Ocean']

let i = 0;

$('#leftsideArrow').click(() => {
    if (i > 0) {
    i--;
    } else {
    i = myImage.length-1;
    }
    document.getElementById("mainImage").src = myImage[i];
    document.getElementById("photo-title").textContent = title[i];
})

$('#rightsideArrow').click(() => {
    if (i < myImage.length-1) {
    i++;
    } else {
    i = 0;
    }
    document.getElementById("mainImage").src = myImage[i];
    document.getElementById("photo-title").textContent = title[i];
})
