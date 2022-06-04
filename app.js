const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser"); //part#1 point2

//part#2 point6 created a navbar.ejs static in views/partials/navbar.ejs

// const nav = [
//   {
//     link: "/books",
//     title: "Books",
//   },
//   {
//     link: "/authors",
//     title: "Authors",
//   },
//   {
//     link: "/addbook",
//     title: "Add Book",
//   },
//   {
//     link: "/addauthor",
//     title: "Add Author",
//   },
// ];

const loginRouter = require("./src/routes/loginroute");
const signupRouter = require("./src/routes/signuproute");
const homeRouter = require("./src/routes/homerouter"); //part#1 point3
const booksRouter = require("./src/routes/booksroute");
const authorsRouter = require("./src/routes/authorsroute");

const app = new express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(cors()); //part#2 point7
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/home", homeRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

app.get("/", function (req, res) {
  res.render("index", {});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Ready on ${PORT}`); //#5 Part 1
});
