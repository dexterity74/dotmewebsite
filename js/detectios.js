const ua = detect.parse(navigator.userAgent);

//const backgroundType = document.querySelector('.background-image-container');

function matchBackgroundDevice() {
    var bgType = document.getElementsByClassName('background-image-container');
    // iPhones are special, they render images strangely, so we need a less wide image for bg
    if(ua.device.family === 'iPhone') {
        bgType[0].style.backgroundImage = "url('assets/images/bg_iphone.jpg')";
        //document.body.style.backgroundImage = "url('assets/images/bg_iphone.jpg')";
    }
    // This is to point to Androids and any mobile device that is not iOS because the original
    // background does work. However, we don't want the background to move, we want to stay fixed
    else if(ua.device.type === 'Mobile') {
        bgType[0].style.backgroundImage = "url('assets/images/bg.jpg')";
    }
    // This points to desktops, macs, etc. We do want background to move
    else{
        //document.body.style.backgroundImage = "url('assets/images/bg.jpg')";
        bgType[0].style.backgroundImage = "url('assets/images/bg.jpg')";
        bgType[0].style.transform = "scale(1.01)";
        movingBackgroundImage();
    }
}