const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength:255},
    description: {type: String, maxLength:600},
    images: {type: String, maxLength: 255},
    createdAt: {type: Date, default: Date.now}, //lưu thời gian khởi tạo
    updatedAt: {type: Date, default: Date.now}, //lưu thời gian cập nhật
});

module.exports = mongoose.model('Course', Course);