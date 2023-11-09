// Create web server
// ----------------
// 1. Create web server
// 2. Create route
// 3. Create route handler
// 4. Start web server

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create route
// app.get('/', (req, res) => {
//     res.send('Hi there!');
// });

// 3. Create route handler
app.get('/', (req, res) => {
    res.send(`
    <div>
        <form>
            <input placeholder="email" />
            <input placeholder="password" />
            <input placeholder="password confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `);
});

// 4. Start web server
app.listen(3000, () => {
    console.log('Listening');
});