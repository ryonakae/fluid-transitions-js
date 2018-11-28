import _ from 'lodash'
import Emitter from './Emitter'

document.addEventListener('DOMContentLoaded', initialize, false)

function initialize() {
  const emitter = new Emitter()
  emitter.setTargetElement('.rect')
  emitter.addEvents()
}
