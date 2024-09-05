const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());
// Serve static files from /front-end/public
app.use(express.static('frontend/public'));

// Handle form submission
app.post('/submit-request', (req, res) => {
    const requestData = req.body;
    console.log(requestData);

    // Perform actions like sending an email or storing the data
    res.status(200).send({ message: 'Request received' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
