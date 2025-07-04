import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/save-location", (req, res) => {
  console.log("Location received:", req.body);
  res.status(200).send("Location saved successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
