require('dotenv').config();
const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/userRoutes');
const ViewRoutes = require('./routes/viewRoutes');
const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/profile', express.static("files/usersProfiles"));

app.set("view engine", "pug");
app.set("views", "./views");

app.use('/api', UserRoutes);
app.use('/', ViewRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
