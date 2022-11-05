const { write } = require('fs')
const http = require('http')

let requestsCount = 0

const server = http.createServer( (request, response) => {

	requestsCount++
// увеличиваем количество запросов
	switch (request.url) {
		case '/test1 ':
			response.write('TEST SNOVA: ' + requestsCount + '')
			break;
// при запросе на /test1, кидаем сообщеньку + выводим количество запросов
		case '/test2 ':
		    response.write('TEST 2: ' + requestsCount + '')
		default:
			response.write('404 ')
	}

	response.write('Testdsd: ' + requestsCount + '')
	response.end()

})

server.listen(3003)

// testing server logic