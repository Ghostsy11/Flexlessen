const myImage = document.getElementById('myImage');

let paintings = ["img/winter.jpg ", "img/autumn.jpg", "img/summer.jpg", "img/seasons.jpg", "img/spring.jpg"];


function changeImage(index) {
    myTitle.innerHTML = titles[index]
    myImage.src = paintings[index];
}

const myTitle = document.getElementById('myTitle');

let titles = ["", "imgg1", "imgg2", "imgg3", "imgg4"];

