const mongoose = require('mongoose');

uri = "mongodb+srv://ashuparouha2004:Ashutosh@2004@cluster0.xwxzidl.mongodb.net/ashuparouha2004?retryWrites=true&w=majority&appName=Cluster0";


const connect = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;