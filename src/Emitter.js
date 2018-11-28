import Victor from 'victor'

export default class Emitter {
  constructor(x = 0, y = 0) {
    this.position = new Victor(x, y)
    this.targetElement = null
    this.lastUpdateCall = null
  }

  setTargetElement(element) {
    this.targetElement = document.querySelector(element)
    console.log(this.targetElement)
  }

  addEvents() {
    this.targetElement.addEventListener('touchstart', this.onTouchStart, false)
    this.targetElement.addEventListener('touchend', this.onTouchEnd, false)
    console.log(this)
  }

  onTouchMove(event) {
    event.preventDefault()
    if (this.lastUpdateCall) cancelAnimationFrame(this.lastUpdateCall)
    this.lastUpdateCall = requestAnimationFrame(() => {
      this.touchMoveUpdate(event)
      this.lastUpdateCall = null
    })
    console.log(this.lastUpdateCall)
  }

  touchMoveUpdate(event) {
    const touches = event.touches[0]
    this.position = new Victor(touches.clientX, touches.clientY)
    console.log(this.position)
  }

  onTouchStart(event) {
    console.log(event.type)
    console.log(this.targetElement)
    this.targetElement.addEventListener('touchmove', this.onTouchMove, false)
  }

  onTouchEnd(event) {
    console.log(event.type)
    console.log(this.targetElement)
    this.targetElement.removeEventListener('touchmove', this.onTouchMove, false)
  }
}
