const { registerUser} = require("../../../controller/user/user")
// const registerUser = require('./controllers/users/usercntroller');
const express = require('express');

const userRoute = express.Router();
console.log("shshs");
userRoute.post('/register', registerUser);
console.log("sdhhdd");

// const express = require('express');
// const fetchUser = require('./controllers/users/usercntroller');

// const app = express();
// const cors = require('cors')

module.exports = userRoute;