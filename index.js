const express = require('express')
const routerApi = require('./routes')
const server = express()
const PORT = 3000;





server.listen(PORT, () => {
console.log(`Server raised on http://localhost:${PORT}`);
})
routerApi(server)
