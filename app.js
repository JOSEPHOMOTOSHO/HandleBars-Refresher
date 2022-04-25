const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    posts: [
      {
        author: "Omotosho Joseph",
        image: "https://picsum.photos/500/500",
        comments: [
          "This is the first comment",
          "This is the second comment",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.",
        ],
      },
      {
        author: "Janith Kasun",
        image: "https://picsum.photos/500/500",
        comments: [
          "This is the first comment",
          "This is the second comment",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.",
        ],
      },
      {
        author: "John Doe",
        image: "https://picsum.photos/500/500?2",
        comments: [],
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("The web server has started on port 3000");
});
