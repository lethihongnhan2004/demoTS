const app = require("./src/app");
const PORT = 3055

const server = app.listen(3055, () => {
    console.log(`WSV eCommerce start with ${PORT}`)
})

// process.on('SIGINT', () => {
//     server.close( () => console.log(`exit server express`))
//     //notify.send(ping...)
// })