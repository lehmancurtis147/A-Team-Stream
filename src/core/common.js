/* eslint-disable */
let debugMode = true

export function logDebug(...data) {
  if (debugMode) {
    console.log(...data)
  }
}

export function setDebugMode(mode) {
  debugMode = mode
}

export function logEvent(event, callback) {
  console.log('Event:', event)
  if (
    window.sa_event &&
    process.env.NODE_ENV === 'production' &&
    process.env.VUE_APP_SA_DOMAIN !== undefined
  ) {
    window.sa_event(event, callback)
  } else if (callback !== undefined) {
    callback()
  }
}

export function readBlobAsBuffer(blob) {
  const bufferPromise = blob.arrayBuffer()
  return new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.onload = () => {
      arrayBuffer = event.target.result
      resolve(reader.result.blob[0])
    }
    reader.onerror = () => {
      reject(reader.error)
    }
    reader.readAsArrayBuffer(blob[0])
    reader.result
  })
}

export function waitForFrame() {
  return new Promise((resolve, _reject) => {
    window.requestAnimationFrame(resolve)
  })
}
