const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/public"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "build", "public", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`);
});
