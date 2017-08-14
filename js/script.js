(function() {
  window.onload = function() {
    var canvas, changeMood, chooseColor, chooseMod, color, context, imageObj, imgSrc, lnk, pictureText, placeText, setDownload, state, textInput;
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    lnk = document.getElementById("downloadLink");
    lnk.href = canvas.toDataURL();
    textInput = document.getElementById('pictureText');
    pictureText = "Your text here";
    chooseColor = document.querySelectorAll('.color-picker');
    chooseMod = document.querySelectorAll('.change-mood');
    imgSrc = "img/sticker_neutral.jpg";
    imageObj = new Image();
    imageObj.src = imgSrc;
    color = '#2E2E2E';
    state = "initial";
    textInput.addEventListener("input", function() {
      return placeText();
    });
    [].forEach.call(chooseMod, function(el) {
      return el.addEventListener("change", function() {
        return changeMood(el.id);
      });
    });
    [].forEach.call(chooseColor, function(el) {
      return el.addEventListener("click", function() {
        color = el.dataset.color;
        placeText();
        return setDownload();
      });
    });
    textInput.addEventListener("change", function() {
      return setDownload();
    });
    imageObj.onload = function() {
      if (state === "initial") {
        context.beginPath();
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(imageObj, 0, 0);
        context.font = "30px Neucha";
        context.fillStyle = color;
        context.textAlign = "center";
        context.fillText(pictureText, canvas.width / 2, 355);
        return context.save();
      }
    };
    imageObj.setAttribute("crossOrigin", "Anonymous");
    placeText = function() {
      state = "changed";
      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageObj, 0, 0);
      imageObj.setAttribute("crossOrigin", "Anonymous");
      if (textInput.value.length > 0) {
        pictureText = textInput.value;
      }
      context.fillStyle = color;
      context.fillText(pictureText, canvas.width / 2, 355);
      return context.save();
    };
    changeMood = function(mood) {
      state = "initial";
      if (mood === "happy") {
        imgSrc = "img/sticker_happy.jpg";
      } else if (mood === "sad") {
        imgSrc = "img/sticker_sad.jpg";
      } else {
        imgSrc = "img/sticker_neutral.jpg";
      }
      return imageObj.src = imgSrc;
    };
    return setDownload = function() {
      var newCanvas;
      newCanvas = document.getElementById("myCanvas");
      return lnk.href = newCanvas.toDataURL();
    };
  };

}).call(this);
