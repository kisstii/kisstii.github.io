console.log('Script file is loaded.')

let myImage = ['/portugal/images/1.jpg', '/portugal/images/2.jpg', '/portugal/images/3.jpg', '/portugal/images/4.jpg', '/portugal/images/5.jpg', '/portugal/images/6.jpg', '/portugal/images/7.jpg', '/portugal/images/8.jpg', '/portugal/images/9.jpg'];

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
