
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute  from './routes/authorizationRoute.js';
import cookieParser from 'cookie-parser';

const MONGO_URI = "mongodb+srv://jeewa2000:itpIT2080@mernapp.4rrg7bl.mongodb.net/?retryWrites=true&w=majority&appName=MERNapp"


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
app.listen(3000, () =>{
    console.log("Server is running on port 3000!!")
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