import _ from 'lodash'
console.log(_)

let target
let isTick = false

document.addEventListener('DOMContentLoaded', initialize, false)

function initialize() {
  target = document.querySelector('.rect')
  target.addEventListener('touchstart', onTouchStart, false)
  target.addEventListener('touchend', onTouchEnd, false)
}

function onTouchStart(e) {
  console.log(e.type)
  e.target.addEventListener('touchmove', onTouchMove, false)
}

function onTouchMove(e) {
  if (isTick) {
    console.log('isTick is true')
  }
  if (!isTick) {
    isTick = true
    requestAnimationFrame(() => {
      console.log(e.type)
      isTick = false
    })
  }
}

function onTouchEnd(e) {
  console.log(e.type)
  e.target.removeEventListener('touchmove', onTouchMove, false)
}
