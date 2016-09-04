window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var lnk = document.getElementById("downloadLink");
  lnk.href = canvas.toDataURL();
  var textInput = document.getElementById('pictureText');
  var pictureText = document.getElementById('pictureText').value;
  var chooseColor = document.querySelectorAll('.color-picker');
  var imageObj = new Image();
  var color = '#767676';
  var state = "initial";

  textInput.addEventListener("input", function() {
    placeText();
  });

  [].forEach.call(chooseColor, function(el) {
    el.addEventListener("click", function() {
      color = el.dataset.color;
      placeText();
      setDownload();
    });
  });

  textInput.addEventListener("change", function() {
    setDownload();
  })
  imageObj.onload = function(){
    if (state == "initial") {
      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageObj, 0, 0);
      context.font = "20px Roboto";
      context.fillStyle = color;
      context.textAlign="center";
      context.fillText("Your text here", canvas.width/2, 50);
      context.save();
    }
  };
  imageObj.src = "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E_400x400.jpg";
  imageObj.setAttribute("crossOrigin", "Anonymous");

  function placeText() {
    state = "changed";
    pictureText = document.getElementById('pictureText').value;
    if (pictureText.length > 0) {
      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageObj, 0, 0);
      imageObj.src = "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E_400x400.jpg";
      imageObj.setAttribute("crossOrigin", "Anonymous");
      pictureText = document.getElementById('pictureText').value;
      context.fillStyle = color;
      context.fillText(pictureText, canvas.width/2, 50);
      context.save();
    }
  }

  function setDownload() {
    var newCanvas = document.getElementById("myCanvas");
    lnk.href = newCanvas.toDataURL();
  }
};
