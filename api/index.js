const express = require("express");
const users = require("../routes/users");
const cors = require('cors')

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use(users);

app.listen(3750 || process.env.PORT , () => console.log('server ready on port 3000.'))

module.exports = app;