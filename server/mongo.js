
const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://ankursharma192001:48Z0qJxmm7il3ixp@devrevmain.bsv1mzf.mongodb.net/`, {


            useNewUrlParser: true,

        });
        console.log('database connected');
    } catch (error) {
        console.log(`${error.message}`)
    }
}
module.exports = dbConnect;
//nodemon me missing script hoga to json file me "nodemon":"nodemon";