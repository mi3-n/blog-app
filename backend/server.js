const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json())
dotenv.config();
connectDB();

app.get('/', (req, res) => {
    res.send('API is running');
});

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// });

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3333;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));