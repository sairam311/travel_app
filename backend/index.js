import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import packageRoute from "./routes/package.route.js";
import ratingRoute from "./routes/rating.route.js";
import bookingRoute from "./routes/booking.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import axios from 'axios';
const app = express();
dotenv.config();

const __dirname = path.resolve();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use(
  cors({
    origin : process.env.SERVER,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/package", packageRoute);
app.use("/api/rating", ratingRoute);
app.use("/api/booking", bookingRoute);

if (process.env.NODE_ENV_CUSTOM === "production") {
  //static files
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
  });
} else {
  // //rest api
  app.use("/", (req, res) => {
    res.send("Welcome to travel and tourism app");
  });
}
app.post('/api/chatbot', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(process.env.CHATBOT, {
      message: userMessage,
    });
    
    // Assuming the response has a 'reply' field with the bot's reply
    const botReply = response.data.reply;
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Error with API request:', error);
    res.status(500).json({ reply: 'Sorry, something went wrong. Please try again.' });
  }
});
//port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
