const { write } = require('fs')
const http = require('http')

let requestsCount = 0

const server = http.createServer( (request, response) => {

	requestsCount++

	switch (request.url) {
		case '/test1 ':
			response.write('TEST SNOVA222: ' + requestsCount + '')
			break;
		case '/test2 ':
		    response.write('TEST 2222: ' + requestsCount + '')
		default:
			response.write('404222 ')
	}

	response.write('Testdsd: ' + requestsCount + '')
	response.end()

})

server.listen(3003)

// testing server logic