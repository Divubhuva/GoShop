import express from 'express';
import data from './data';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute  from './routes/orderRoute'


const mongodbUrl = config.MONGODB_URL;
console.log(mongodbUrl);
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log("Database not connected"));



const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

// app.get("/api/products", (req, res) => {
//   res.send("product is calling")
// })
// app.get("/api/orders", (req, res) => {
//   res.send("order is calling")
// })
app.get("/api/config/paypal", (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID)

})

app.listen(config.PORT, () => { console.log("Server started at http://localhost:5000") });
