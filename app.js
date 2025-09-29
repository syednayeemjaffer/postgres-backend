require('dotenv').config();
const express = require('express');
const UserRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use('/api', UserRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
