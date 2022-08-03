const app = require("./app");
const connect = require("./config/database");
let port = process.env.PORT || 8020;



app.listen(port, async (req, res) => {
  await connect();
  console.log(`Server is working on port :${port}`);
});
