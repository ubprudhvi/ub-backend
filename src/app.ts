import express from 'express';
import { config } from 'dotenv';
import parser from 'body-parser'
import bodyParser from 'body-parser';
config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get('/userAuthentication', (req, res) => {
  res.send("hello user")
  res.status(200).json({ message: 'user created successfully', user: req.body });
  res.end();
});
export default app;
