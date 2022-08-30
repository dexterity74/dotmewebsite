const ua = detect.parse(navigator.userAgent);

function matchBackgroundDevice() {
    var bgType = document.getElementsByClassName('background-image-container');
    var fontSize = document.getElementById('typed1');
    //var projectFontSize = document.getElementById('typed1');
    // iPhones are special, they render images strangely, so we need a less wide image for bg
    // also allow font sizes to not go off-screen on mobiles devices
    if(ua.device.family === 'iPhone') {
        // bgType[0].style.backgroundSize = "cover";
        bgType[0].style.backgroundImage = "url('./assets/images/bg_iphone.jpg')";
        fontSize.style.fontSize = '50px';
        //document.body.style.backgroundImage = "url('assets/images/bg_iphone.jpg')";
    }
    else if(ua.device.family === 'iPad') {
        // bgType[0].style.backgroundSize = "cover";
        bgType[0].style.backgroundImage = "url('./assets/images/bg_ipad.jpg')";
    }
    // This is to point to Androids and any mobile device that is not iOS because the original
    // background does work. However, we don't want the background to move, we want to stay fixed
    else if(ua.device.type === 'Mobile') {
        bgType[0].style.backgroundImage = "url('./assets/images/bg.jpg')";
        bgType[0].style.backgroundAttachment = "fixed";
        fontSize.style.fontSize = '50px';
    }
    // This points to desktops, macs, etc. We do want background to move
    else{
        //document.body.style.backgroundImage = "url('assets/images/bg.jpg')";
        bgType[0].style.backgroundImage = "url('./assets/images/bg.jpg')";
        bgType[0].style.backgroundAttachment = "fixed";
        bgType[0].style.transform = "scale(1.01)";
        movingBackgroundImage();
    }
}