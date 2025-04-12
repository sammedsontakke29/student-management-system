import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import students from './routes/students.js'; // ✅ Add .js for ES module import

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Root route
app.get('/api', (req, res) => {
  res.send("<h1>Server started successfully</h1>");
  console.log("Server started successfully");
});

// Student routes
app.use('/api/students', students);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
