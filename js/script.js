window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  var lnk = document.getElementById("downloadLink");
  var pictureText = document.getElementById('pictureText').value;
  var imageObj = new Image();
  var btn = document.getElementById("saveButton");
  var state = "initial";
  btn.addEventListener("click", function() {
    placeText();
  });
  imageObj.onload = function(){
    if (state == "initial") {
      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imageObj, 0, 0);
      context.font = "20px Calibri";
      context.fillStyle = 'green';
      context.fillText("Your text here", 120, 50);
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
      context.font = "20px Calibri";
      context.fillStyle = 'green';
      context.fillText(pictureText, 120, 50);
      context.save();

      var newCanvas = document.getElementById("myCanvas");
      lnk.href = newCanvas.toDataURL();
    }
  }
};
