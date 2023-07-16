const { MongoClient } = require("mongodb");
require("dotenv").config();

let dbConnection;
const uri = "mongodb+srv://annedeekshith:IYmqd6QMRIDZfnsU@cluster1.a4sdzos.mongodb.net/mycontacts";

const connectToDb = (cb) => {
  MongoClient.connect(uri)

    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.error(err);
      return cb(err);
    });
};
const getDb = () => dbConnection;

module.exports = { connectToDb, getDb };