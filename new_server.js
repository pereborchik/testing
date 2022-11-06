const http = require('http')
const fs = require('fs')



const server = http.createServer((request, response) => {
	switch (request.url) {
		case '/home': {
			fs.readFile('pages/home.html', (err, data) => {
				if (err) response.write(err)
				else response.write(data)
				response.end()
			})
			break;
		}
		default: {
			response.write('404 not found')
			response.end()
		}
	}
	
})
server.listen(3003)