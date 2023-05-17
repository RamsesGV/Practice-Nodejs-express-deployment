const express = require('express')
const routerApi = require('./routes')
const { logErrors, errorHandler} = require('./middlewares/errorHandler')
const server = express()
const PORT = 3000;


server.use(express.json())
server.use(logErrors())
server.use(errorHandler())



server.listen(PORT, () => {
console.log(`Server raised on http://localhost:${PORT}`);
})
routerApi(server)
