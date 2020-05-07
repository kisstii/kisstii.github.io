console.log('Script file is loaded.')

let myImage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

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
