const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve sign-in page on the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/public', 'sign-in.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
