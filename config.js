const dotenv = require('dotenv');

const envFound = dotenv.config();

if (!envFound) {
    throw new Error(' Couldn\'t find .env file! ');
}

module.exports = {
    port: parseInt(process.env.PORT, 10) || 3000,
    api: {
        prefix: '/',
    },
    dbCluster: process.env.DB_CLUSTER,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USERNAME,
    dbPassword: process.env.DB_PASSWORD,
    get dbUri() { 
        if (!this.dbUser || !this.dbName) return 'mongodb://localhost:27017/magazineDB';
        return `mongodb+srv://${this.dbUser}:${this.dbPassword}@${this.dbCluster}.ju7iw.mongodb.net/${this.dbName}?retryWrites=true&w=majority`;
    }
}
