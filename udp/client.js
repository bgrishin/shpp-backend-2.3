const dgram = require('dgram')

const client =  dgram.createSocket('udp4')

let timeTwo

client.send('Hello World!', 3000, () => {
    timeTwo = new Date().getTime()
    console.log('Sending message...')
})

client.on('message', msg => {
    const timeOne = new Date().getTime()
    console.log(`Server >>> ${msg.toString()}`)
    console.log(`Time lost ${(timeOne - timeTwo) / 100}s`)
})