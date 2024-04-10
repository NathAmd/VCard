

document.addEventListener('mousemove', function (e) {
    var xPos = e.pageX;
    var yPos = e.pageY;
    var VCard = document.getElementsByClassName('VCard');

    for (let i = 0; i < VCard.length; i++) {
        var Xcalc = (VCard[i].offsetWidth - xPos) / 50;
        var Ycalc = (VCard[i].offsetHeight - yPos) / 50;

        var Xgradient = 50 + (Xcalc * 1.25);
        var Ygradient = 300 + (Ycalc * 2.5);

        var Opacity = 40;

        VCard[i].style.transform =`perspective(1000px)` + `rotateY(${-Xcalc}deg)` + `rotateX(${Ycalc}deg)`;
        if (VCard[i].id === "face") {
            VCard[i].style.background = `linear-gradient(${Ygradient}deg, #67C6E3${Opacity} 0%, #67C6E3${Opacity} ${Xgradient - 12.5}%, #DFF5FF${Opacity} ${Xgradient + 12.5}%, #DFF5FF${Opacity} 100%)`;
        }
    }
});