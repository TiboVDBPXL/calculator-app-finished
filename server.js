const app = require("./app");

require('dotenv').config();
console.log("env logging:" + process.env.PORT);

const port = process.env.PORT || 3000;

app.listen(port);
console.log("Server running on port: " + port);
