
const {conn} = require("./DB_connection")
const server = require("./app")


const PORT = 3001
server.listen(PORT, async () => {
  console.log("localhost:" + PORT); 
  await conn.sync({force: true})
})