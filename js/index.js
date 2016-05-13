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

$("input[type=text]").keypress(function(e) {
  if (event.which === 13) {
    var inputted = $(this).val();
    if (inputted == "") {
      return visib("warning");
    }
    $(this).val("");
    $("ul").append("<li><span class = 'delete'><i class=\"fa fa-trash\"></i></span>" + inputted + "</li>");
    gottenEle = document.querySelectorAll("li");
    testfun();
    visib("added");
    testfun2();
  }
})

var visib = function(e) {
  if (!popuptoggled) {
    if (e === "warning") {
      gottenpopup.style.opacity = "100";
      gottenpopup.style.height = "50px";
      gottenpopup.style.color = "red";
      gottenpopup.textContent = "Please enter a to-do event!";
      popuptoggled = true;
      setTimeout(OpenPU, 4000);
    } else if (e === "added") {
      gottenpopup.style.color = "#FFF";
      gottenpopup.style.opacity = "100";
      gottenpopup.style.height = "50px";
      gottenpopup.textContent = "To-do event added!";
      popuptoggled = true;
      setTimeout(OpenPU, 4000);
    } else {
      console.log("WARNING");
    }
  }

}

var OpenPU = function() {
  if (!popuptoggled) {
    gottenpopup.style.opacity = "100";
    gottenpopup.style.height = "200px";
    popuptoggled = true;
  } else {
    gottenpopup.style.opacity = "0";
    gottenpopup.style.height = "0px";
    popuptoggled = false;
  }
}

$("ul").on("click", "li", function() {
  $(this).toggleClass("marked");
})

$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
})

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
