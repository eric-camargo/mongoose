require('dotenv');
let mongoose = require('mongoose');

const server = process.env.MONGO_URI;
const database = 'My-Awesome-DB';

class Database {
  constructor() {
    this.connect()
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}

module.exports = new Database()