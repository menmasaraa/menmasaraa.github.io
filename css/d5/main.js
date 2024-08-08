const cardList = document.querySelectorAll('.card');

setTimeout(function() {
    cardList.forEach(function(el) {
        el.classList.remove('before');
        
    } );
}, 1000)

const imageIndexList =[];

while(imageIndexList.length != 12) {
    let isDuplicated = false;

    const ramdomNum = Math.random()*12;
 const randomInt = Math.floor(ramdomNum);

    imageIndexList.forEach(function(n) {
        if(n === randomInt) {
            isDuplicated = true;
        }

    })
    if(isDuplicated === true) {
        continue;
    }
    imageIndexList.push(randomInt);

} 

const cardPathList = [
    './image/2S.png',
    './image/3S.png',
    './image/4S.png',
    './image/5S.png',
    './image/6S.png',
    './image/7S.png',
    './image/8S.png',
    './image/9S.png',
    './image/10S.png',
    './image/JS.png',
    './image/kS.png',
    './image/QS.png',


];
const randomCardElList = document.querySelectorAll('.random_card');

randomCardElList.forEach(function(el, index) {
    const image = new Image();
    const pathIndex = imageIndexList[index];
    image.src = cardPathList[pathIndex];
    el.appendChild(image);
})