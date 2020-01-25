const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());

//upload endpoint

app.use("/api/uploads", require("./routes/upload"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
