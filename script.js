

document.addEventListener('mousemove', function (e) {
    var xPos = e.pageX;
    var VCard = document.getElementsByClassName('VCard');
    for (let i = 0; i < VCard.length; i++) {
        var Xcalc = (VCard[i].offsetWidth - xPos) / 50;
        VCard[i].style.transform = `rotateY(${Xcalc}deg)`;
    }
});