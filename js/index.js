var gottenEle = document.querySelectorAll("li"),
  gottenpopup = document.getElementById("pop-up"),
  popuptoggled = false;

var testfun = function() {
  var r = 72,
    b = 85,
    g = 99,
    a = 0.50,
    gswitch = false;
  for (var i = 0; i < gottenEle.length; i++) {
    gottenEle[i].style.background = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    if (!gswitch) {
      if (b < 255) {
        b += 10;
        r -= 20;
        g += 5;
      } else {
        gswitch = true;
      }
    } else {
      if (b > 0) {
        b -= 10;
        r += 20;
        g -= 5;
      } else {
        gswitch = false;
      }
    }

  }
}
