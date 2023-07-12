const mongoose = require('mongoose');
const URL =
    'mongodb+srv://root:AVkqPYy7QKS26JuT@bioinformatic.ulibahi.mongodb.net/?retryWrites=true&w=majority';
// const URL = 'mongodb://localhost:27017/Informatic_Lab';

const connect = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: false,
            // useFindAndModify: false,
        });
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = { connect };
