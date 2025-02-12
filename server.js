const express = require("express");
const app = express();

const PORT = 8800;

app.use(express.json());

const routes = require("./routes/routes");

routes(app);

app.listen(PORT, function () {
  console.log(`Server is Running Successfully.! at  http://localhost:${PORT}`);
});
