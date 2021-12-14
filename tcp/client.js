const net = require('net')

const socket = new net.Socket()
let timeTwo
socket.on('data', data => {
    const timeOne = new Date().getTime()
    console.log(`Server >>> ${data}`)
    console.log(`Time lost ${(timeOne - timeTwo) / 100}s`)
})

socket.on(`error`, err => {
    console.log(`Server disconnected`)
})

socket.on('connect', () => {
    timeTwo = new Date().getTime()
    console.log(`Sending message`)
    socket.write('Hello World!')
})

socket.connect({port: 3000})