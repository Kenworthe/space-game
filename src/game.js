// Override window.onload
onload = () => {
  CANVAS = document.getElementById('canvas')
  CANVAS.width = CONFIG.width
  CANVAS.height = CONFIG.height

  CONTEXT = CANVAS.getContext('2d')

  resetGame()

  onresize()

  animationFrame()
}

// Override window.onresize
onresize = () => {
  const ratio = CONFIG.width / CONFIG.height
  let width, height

  if (innerWidth / innerHeight < ratio) {
    width = innerWidth
    height = innerWidth / ratio
  } else {
    height = innerHeight
    width = innerHeight * ratio
  }

  const inner = document.getElementById('inner')

  inner.style.width = `${ width }px`
  inner.style.height = `${ height }px`
}

animationFrame = () => {
  const now = performance.now()
  const elapsed = (now - LAST_FRAME) / 1000
  LAST_FRAME = now

  cycle(elapsed)
  renderFrame()

  requestAnimationFrame(animationFrame)
}

function startApp() {
  app.canvas = $('#gameCanvas')[0]
  app.canvas.focus()
  app.context = app.canvas.getContext('2d')
  app.lastTime = window.performance.now()
  window.requestAnimationFrame(frameUpdate)

  app.canvas.addEventListener('keydown', myKeyDown, false)
  app.canvas.addEventListener('keyup', myKeyUp, false)

  endGame() //starts game in a "paused" state
}