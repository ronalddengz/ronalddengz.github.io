document.addEventListener('DOMContentLoaded', function() {
  var headImg = document.getElementById('floating-head');
  if (headImg) {
    headImg.src = 'head/forward.png';
  }
  var headImages = {
    top: 'head/up1.png',
    bottom: 'head/down1.png',
    left: 'head/left2.png',
    right: 'head/right2.png',
    center: 'head/forward.png',
    topright: 'head/upright1.png',
    topleft: 'head/upleft1.png',
    downright: 'head/downright1.png',
    downleft: 'head/downleft1.png',
    topper: 'head/up2.png',
    downer: 'head/down2.png',
  };
  document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var w = window.innerWidth;
    var h = window.innerHeight;

    var imgRect = headImg.getBoundingClientRect();
    var imgCenterX = imgRect.left + imgRect.width / 2;
    var imgCenterY = imgRect.top + imgRect.height / 2;

    var dx = x - imgCenterX;
    var dy = y - imgCenterY;

    var thresholdX = imgRect.width * 0.5;
    var thresholdY = imgRect.height * 0.5;

    var region = 'center';
    var topper = dy < -thresholdY * 2;
    var downer = dy > thresholdY * 1.2;
    var top = dy < -thresholdY;
    var bottom = dy > thresholdY;
    var left = dx < -thresholdX;
    var right = dx > thresholdX;

    if (top && left || topper && left) region = 'topleft';
    else if (top && right || topper && right) region = 'topright';
    else if (bottom && left || downer && left) region = 'downleft';
    else if (bottom && right || downer && right) region = 'downright';
    else if (topper) region = 'topper';
    else if (downer) region = 'downer';
    else if (top) region = 'top';
    else if (bottom) region = 'bottom';
    else if (left) region = 'left';
    else if (right) region = 'right';
    headImg.src = headImages[region];
  });
});
