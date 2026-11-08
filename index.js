const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello from CI/CD! ( deployment now automated on Render too )</h1>",
  );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

