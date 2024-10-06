const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// Test route to verify server is running
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
