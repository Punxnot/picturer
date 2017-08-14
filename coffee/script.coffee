window.onload = ->
  canvas = document.getElementById("myCanvas")
  context = canvas.getContext("2d")
  context.fillStyle = "white"
  context.fillRect(0, 0, canvas.width, canvas.height)
  lnk = document.getElementById("downloadLink")
  lnk.href = canvas.toDataURL()
  textInput = document.getElementById('pictureText')
  pictureText = "Your text here"
  chooseColor = document.querySelectorAll('.color-picker')
  chooseMod = document.querySelectorAll('.change-mood')
  imgSrc = "img/sticker_neutral.jpg"
  imageObj = new Image()
  imageObj.src = imgSrc
  color = '#2E2E2E'

  state = "initial"

  textInput.addEventListener("input", ->
    placeText()
  )

  [].forEach.call(chooseMod, (el)->
    el.addEventListener("change", ->
      changeMood(el.id)
    )
  )

  [].forEach.call(chooseColor, (el)->
    el.addEventListener("click", ->
      color = el.dataset.color
      placeText()
      setDownload()
    )
  )

  textInput.addEventListener("change", ->
    setDownload()
  )

  imageObj.onload = ->
    if state == "initial"
      context.beginPath()
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(imageObj, 0, 0)
      context.font = "30px Neucha"
      context.fillStyle = color
      context.textAlign="center"
      context.fillText(pictureText, canvas.width/2, 355)
      context.save()
  imageObj.setAttribute("crossOrigin", "Anonymous")

  placeText = ()->
    state = "changed"
    context.beginPath()
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(imageObj, 0, 0)
    imageObj.setAttribute("crossOrigin", "Anonymous")
    if textInput.value.length > 0
      pictureText = textInput.value
    context.fillStyle = color
    context.fillText(pictureText, canvas.width/2, 355)
    context.save()

  changeMood = (mood)->
    state = "initial"
    if mood == "happy"
      imgSrc = "img/sticker_happy.jpg"
    else if mood == "sad"
      imgSrc = "img/sticker_sad.jpg"
    else
      imgSrc = "img/sticker_neutral.jpg"
    imageObj.src = imgSrc

  setDownload = ()->
    newCanvas = document.getElementById("myCanvas")
    lnk.href = newCanvas.toDataURL()
