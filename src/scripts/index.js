"use strict"

// require('../styles/main.css');

console.log("I'm in here!")

const getCurrentUrl = () => window.location.pathname

// console.log('location:', window.location);

const listen = () => {
  const current = getCurrentUrl()
  const filePath = /\pages\//
  const fileExtension = /\.html/
  if (current.includes('pages/')) {
    const newUrl = current
    .replace(filePath, '')
    .replace(fileExtension, '')
    console.log('new url:', newUrl);
    // window.location.pathname  = newUrl
  }

}

listen()

// const navigate = path => {
// }
//
// const cleanUrl = path => {
//   const current = window.location.href
//   if(current.startsWith)
//   const newUrl = current
//   window.location.href = current.replace()
// }
