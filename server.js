require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsoptions")
const connectDB = require("./config/dbConn")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 7001
const app = express()
connectDB()

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
})
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("this is the home")
})


app.use("/api/product", require("./routes/productRoute"))
app.use("/api/auth",require("./routes/authRoute"))
app.use("/api/basket",require("./routes/basketRoute"))