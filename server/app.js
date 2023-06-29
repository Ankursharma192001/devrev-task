// Importing express module
const express = require("express")
const cors = require('cors')
const app = express()
// const mongo = require("db.Connect");
const dbConnect = require("./mongo")
// const registerUser = require("./controller/user/user")
const {registerUser} = require("./controller/user/user")
const {loginCredentials} = require("./controller/user/user")
// const fetchUser = require('./controllers/users/usercntroller');
// const registerUser = require('./controllers/users/usercntroller');
// const AccountStats = require('./controllers/AccountStats/accountStats');
// const userRoute = require("./controller/routes/user/userroute");

dbConnect();


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.end('hello world');
})

// app.use('/api/user', userRoute);
app.post('/register',registerUser);
app.get('/login',loginCredentials);

// Handling GET / request

// app.use("/", (req, res) => {
//     res.send("This is the express server")
// })

// Handling GET /hello request

// app.use("/register", registerUser())

// Server setup

console.log("")

 app.listen(5000, () => {
     console.log("Server is Running")
 })


//module.export = app

// ('dotenv').config()

