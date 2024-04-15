require('dotenv').config();

const express = require('express');
const connectDB = require("./db/connect");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Require User and Post models
const User = require('./models/user');
const Post = require('./models/posts');

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from environment variable if available, else default to 3000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using environment variables
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

// mongoose.connect(`mongodb://${dbUser}:${dbPass}@${dbHost}/blogDB`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
mongoose.connect("mongodb://127.0.0.1:27017/blog").then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
})

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// API Endpoints for Posts
app.get('/api/posts', async(req, res) => {
    try {
        const posts = await Post.find().populate('author');
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/posts', async(req, res) => {
    const { title, content, authorId } = req.body;
    try {
        await connectDB();
        const newPost = new Post({ title, content, author: authorId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// API Endpoints for Users
app.get('/api/users', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/users', async(req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});