
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute  from './routes/authorizationRoute.js';
import cookieParser from 'cookie-parser';

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set in environment variables;


dotenv.config();
mongoose.connect(
   process.env.MONGO_URI
)
.then(() =>{
    console.log("MongoDB is connected");

})
.catch((err) => {
    console.log(err);

});
const app = express();
app.use(express.json());
app.use(cookieParser());
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Ooops,internal server error!!...';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});