const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://siddika123:ayesha12345@finalproject.8cypp6t.mongodb.net/", {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}
module.exports =connectToDB;