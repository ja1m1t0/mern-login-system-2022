import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

// import { MongoClient } from "mongodb";

const mdbpwd = process.env.MONGODB;
mongoose.connect(
  `mongodb+srv://jaime:` +
    mdbpwd +
    `@mernauth.7erhhih.mongodb.net/?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully to MongoDB");
});


export default db;


// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);

// let conn;
// try {
//   console.log("Connecting to MongoDB Atlas...");
//   conn = await client.connect();
// } catch(e) {
//   console.error(e);
// }

// let db = conn.db("sample_training");

