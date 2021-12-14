const dgram = require('dgram')
let port = 3000
const server = dgram.createSocket('udp4')

server.on('message', (msg, rinfo) => {
    console.log(`[INFO ${new Date().toDateString()}] User connected (IP: ${rinfo.address})`)
    console.log(`[CLIENT] User send data, Responsing...`)
    server.send(msg, rinfo.port, 'localhost')
})

server.bind(port, () => {
    console.log(`Server started at port ${port}`)
})