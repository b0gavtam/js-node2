import express from "express"
import routing from "./routes/router.js"
const PORT = 3001
const app = express();
app.use(routing);
app.listen(PORT,() =>console.log(`fut a szerver a https://localhost:${PORT} porton`))
