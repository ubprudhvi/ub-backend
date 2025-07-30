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


import express from 'express';
import { config } from 'dotenv';
// import bodyParser from 'body-parser';

config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import authRoutes from './routes/loginRoute'; // <-- Import the signup route
// Use the auth routes for authentication endpoints
// app.use('/api/auth', authRoutes);
app.use('/signup',authRoutes)

// Optionally, keep a simple health check route
app.get('/', (req, res) => {
  res.send("API is running");
});

export default app;