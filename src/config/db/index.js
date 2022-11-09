const mongoose = require('mongoose');

async function connect() {

    try {
      await mongoose.connect('mongodb://localhost:27017/blog_dev', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Connected to mongodb');
    } catch (error) {
      console.log('Error connecting');
    }
}

module.exports = { connect };