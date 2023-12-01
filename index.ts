import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/db';
import userRouter  from './routes/user.route';


dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/v1', userRouter);

app.get('/', (req: Request, res: Response) => {
    return res.send('Hello World');
});


app.listen(3000, () => console.log('Server running on port 3000....'));
connectDB()