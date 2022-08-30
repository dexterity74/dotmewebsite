const ua = detect.parse(navigator.userAgent);


function matchTextDevice() {
    var fontSizeProjects = document.getElementById('typed1');
    if(ua.device.family === 'iPhone') {
        fontSizeProjects.style.fontSize = '20px';
    }
    else if(ua.device.type === 'Mobile') {
        fontSizeProjects.style.fontSize = '20px';
    }
}