const express = require('express');
const path = require('path');
const app = express();

// Use the port provided by AWS, or default to 8080 for local testing
const PORT = process.env.PORT || 8080;

// Serve the index.html file from the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

