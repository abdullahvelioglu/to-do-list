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
var testfun2 = function() {
  var gottenEle2 = document.querySelectorAll(".delete"),
    r2 = 255,
    b2 = 0,
    g2 = 0,
    a2 = 0.50,
    gswitch2 = false;
  for (var i = 0; i < gottenEle2.length; i++) {
    gottenEle2[i].style.background = "rgba(" + r2 + ", " + g2 + ", " + b2 + ", " + a2 + ")";
    if (!gswitch2) {
      if (g2 < 255) {
        g2 += 20;
      } else {
        gswitch2 = true;
      }
    } else {
      if (g2 > 0) {
        g2 -= 20;
      } else {
        gswitch2 = false;
      }
    }

  }
}
