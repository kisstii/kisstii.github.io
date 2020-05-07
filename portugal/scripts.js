console.log('Script file is loaded.')

let myImage = ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.jpg', '/images/9.jpg'];

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
