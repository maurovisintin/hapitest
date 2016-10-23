import Config from './config'
import Mongoose from 'mongoose'

const CONNECTION_STRING = `mongodb://${Config.database.username}:${Config.database.password}@${Config.database.host}:${Config.database.port}/${Config.database.db}`
console.log("CONNECTION_STRING", CONNECTION_STRING)
Mongoose.connect(CONNECTION_STRING)

let db = Mongoose.connection;
db.on('error', console.error.bind(console, "connection error"))
db.once('open', () => console.log("Connection with database succeded"))

module.exports.Mongoose = Mongoose
module.exports.db = db
