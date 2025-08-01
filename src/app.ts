// import express from 'express';
// import { config } from 'dotenv';
// import parser from 'body-parser'
// import bodyParser from 'body-parser';

// config();
// const app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}))
// app.get('/userAuthentication', (req, res) => {
//   res.send("hello user")
//   res.status(200).json({ message: 'user created successfully', user: req.body });
//   res.end();
// });
// export default app;


import signUpRoute from './routes/signUpRoute';
import loginRoute from './routes/loginRoute';
import personalInfoRoute from './routes/personalInfoRoute';
import express from 'express';
import { config } from 'dotenv';
import updateUserPersonalInfoRoute from './routes/updateUserPersonalInfoRoute';
import cors from 'cors';
// import bodyParser from 'body-parser';

config();
const app = express();
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/login', loginRoute);

app.use('/signup', signUpRoute)
app.use('/userInfo', personalInfoRoute);
app.use('/userInfo/', updateUserPersonalInfoRoute);

app.get('/', (req, res) => {
  res.send("API is running");
});

export default app;