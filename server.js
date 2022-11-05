const { write } = require('fs')
const http = require('http')


const server = http.createServer( (request, response) => {
	response.write('Test')
	response.end()

})

server.listen(3003)

#testing server http.request, response