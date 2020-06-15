// bringing in express server
const express = require('express');

// initialzing express into a variable
const app = express();

// adding endpoint /route
app.get('/', (req,res) => res.json({msg: "Welcome to the contact keeper api"}))

// Defining Routes
app.use('/api/users', require('./Routes/users'))
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/contacts', require('./Routes/contacts'))


// made a enviromental variable
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));


