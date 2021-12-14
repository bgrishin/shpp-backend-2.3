const http = require('http')

let port = 3000

const server = http.createServer()

server.on('connection', () => {
    console.log(`[INFO ${new Date().toISOString()}] User has been connected`)
})

server.on('request', (req, res) => {
    req.on('data', msg => {
        console.log(`[CLIENT ${new Date().toISOString()}] New data >>> ${msg.toString()}`)
        console.log(`[INFO ${new Date().toISOString()}] Reponse for client >>> ${msg.toString()}`)
        res.write(msg.toString())
    })
    req.on('close', (err) => {
        console.log(`[CLIENT ${new Date().toISOString()}] Disconnect`)
    })
    console.log(req.socket.remoteAddress)
}).listen(port, () => {
    console.log(`[INFO ${new Date().toISOString()}] The server has been started on port ${port}`)
})