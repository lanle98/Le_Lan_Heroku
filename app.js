const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/running", (req, res) => {
  res.render("categories", {
    name: "Adidas UltraBoost",
    description:
      "Rock a fresh but classic look with the all-white Ultraboost Shoes from adidas. Ultraboost technology provides the ultimate in cushioning while the Torison System provides a stable ride for runners of all abilities.",
    img: `running`
  });
});

app.get("/boots", (req, res) => {
  res.render("categories", {
    name: "Timberland Boots",
    description:
      "When you think of Timberland® boots, you're thinking of these. Our original waterproof boot was designed more than 40 years ago and remains a best-seller today, with tireless waterproof performance and instantly recognizable work-boot styling.",
    img: `boots`
  });
});

app.get("/basketball", (req, res) => {
  res.render("categories", {
    name: "Jordan Retro 12",
    description:
      "If you’re looking for a top-quality kick for your kid, look no further than the Jordan Retro 12. This sneaker is comfortable, cool, and inspired by the shoe Michael Jordan wore when he won his fifth league title. Your kiddo will start their day on the right foot with the Jordan Retro 12, knowing that they walk in a shoe similar to the one Michael Jordan rocked to the top. Kids will step ahead in the classroom and on the court with the Jordan Retro 12.",
    img: `basketball`
  });
});

app.listen(port, () => {
  console.log(`app is running on ${port}`);
});
