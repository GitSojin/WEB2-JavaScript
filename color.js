function setColor(color) {
  var alist = document.querySelectorAll("a");
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i++;
  }
  var Body = {
    setColor: function (color) {
      document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function (color) {
      document.querySelector("body").style.backgroundColor = color;
    },
  };
}
function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    target.style.backgroundColor = "black";
    target.style.color = "white";
    self.value = "day";
    setColor("powderblue");
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
    self.value = "night";
    setColor("blue");
  }
}
