const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve index.html from /public

// Bot Chat API
app.post('/api/chat', (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "🤖 আমি বুঝতে পারিনি। একটু সহজভাবে বলো।";

  if (msg.includes("hello") || msg.includes("hi")) {
    reply = "হ্যালো! আমি Mr Rabbit Bot। তোমাকে কীভাবে সাহায্য করতে পারি?";
  } else if (msg.includes("your name")) {
    reply = "আমার নাম Mr Rabbit Bot 🐰";
  } else if (msg.includes("who are you")) {
    reply = "আমি একজন চ্যাট এআই বট। তোমার প্রশ্নের উত্তর দিতে পারি।";
  } else if (msg.includes("bye")) {
    reply = "আবার দেখা হবে! ধন্যবাদ আমাকে ব্যবহারের জন্য।";
  } else if (msg.includes("help")) {
    reply = "তুমি যেকোনো প্রশ্ন করতে পারো — যেমন:\n- Who is Elon Musk?\n- Tell me a joke\n- What is AI?";
  } else if (msg.includes("joke")) {
    reply = "😂 এক লোক বলল: ডাক্তার সাহেব, আমি ভুলে যাই! ডাক্তার: কবে থেকে? লোক: কবে থেকে কী?";
  }

  res.json({ reply });
});

// ✅ Port binding for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Mr Rabbit Bot running on port ${PORT}`);
});
