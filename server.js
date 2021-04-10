//bring in express
const express = require('express');
//bring in mongoose
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup mongoose to connect when app is started. MongoDB will find and connect to the database if it exists, or create the database if it doesn't exist.
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/friend-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

//log mongo queries
mongoose.set('debug', true);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}.`);
});
