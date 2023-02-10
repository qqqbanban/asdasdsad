const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
app.use(express.json())
app.use("/api/auth", authRouter)

const app = express()
const PORT = config.get('serverPort')

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT, () => {
            console.log('server started on port', PORT)
        })
    } catch (e) {

    }
}

start()
