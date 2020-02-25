const mongoose = require('mongoose');
const config = require('config');

console.log('config', config);

module.exports = class DatabaseService {
    static connect(cb) {
        mongoose.connect(config.DB.HOST, { useNewUrlParser: true });
        mongoose.Promise = global.Promise;
        const db = mongoose.connection;
        db.on('error', (error) => {
            console.error('Unable to connect to MongoDB');
            console.error(error);
            process.exit(1)
        });
        db.once('open', cb);
    }
}