const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// const db = require("../db/conn")

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(`Couldn't connect to MongoDB: ${e}}`);
  });

// const MONGOOSE_URL = "mongodb://localhost:27017/LSYSTEM"

// mongoose.connect(MONGOOSE_URL, {useNewUrlParser: true})
// .then(()=> app.listen(PORT, ()=>{
//     console.log(`Server is running at port ${PORT}`);
// }))
// .catch(err=>{
//     console.log(err)
// })
