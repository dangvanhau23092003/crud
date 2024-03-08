const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/data_user')
        console.log('Kết nối đến sdl thành công')
    }
    catch(error) {
        console.log('Kết nối đến csdl thất bại: ' + error);
    }
}

module.exports = {connect}