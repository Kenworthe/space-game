// Override window.onload
onload = () => {
  CANVAS = document.getElementById('canvas')
  CANVAS.width = CONFIG.width
  CANVAS.height = CONFIG.height

  CANVAS.focus()
  CANVAS.addEventListener('keydown', onKeyDown, false)
  CANVAS.addEventListener('keyup', onKeyUp, false)

  CONTEXT = CANVAS.getContext('2d')

  resetGame()

  // TODO: onresize()

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
  const now = window.performance.now()
  const delta = (now - LAST_FRAME) / 1000
  LAST_FRAME = now

  cycleGame(delta) // calculate game interactions
  renderFrame() // then render everything

  window.requestAnimationFrame(animationFrame) // request next frame
}

cycleGame = (delta) => {
  if (!MENU || MENU.dismissed) {
    GAME_DURATION += delta
  } else {
    GAME_DURATION = 0
  }

  if (!MOUSE_DOWN) {
    WAIT_FOR_RELEASE = false
  }

  // PLAYER.cycle(delta)
  // CAMERA.cycle(delta);
  // ITEMS.forEach(i => i.cycle(delta))

  // Prob not needed.
  // const appliedDiff = Math.max(-delta * 0.5, Math.min(delta * 0.5, PLAYER.power - RENDERED_POWER))
  // RENDERED_POWER += appliedDiff

  // if (!OBSTACLES.length || OBSTACLES[OBSTACLES.length - 1].y >= CAMERA.topY) {
  //   generateNewObstacle()
  // }
}

renderFrame = () => {
  // TODO
  console.log('[renderFrame]')

  CONTEXT.fillStyle = '#000'
  CONTEXT.fillRect(0, 0, CONFIG.width, CONFIG.height)

  // TODO: call render on all players/objects/etc
}

resetGame = () => {
  // TODO
  console.log('[resetGame]')
}

onKeyDown = (e) => {
  // TODO
  console.log('[onKeyDown]', e)
}

onKeyUp = (e) => {
  // TODO
  console.log('[onKeyUp]', e)
}