import express from "express";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json())
app.post("/api/addName", (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ error: "FirstName and LastName are required" });
  }

  console.log("Received:", firstName, lastName);

  res.status(200).json({ firstName, lastName });
});

app.listen(3002);
