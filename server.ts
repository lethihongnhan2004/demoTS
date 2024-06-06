import app from "./src/app";
import { Server } from "http";

const PORT: number = 3055;

const server: Server = app.listen(PORT, () => {
    console.log(`WSV eCommerce start with ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log(`exit server express`));
    // notify.send(ping...)
});
