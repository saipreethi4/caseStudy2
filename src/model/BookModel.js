const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://saipreethi:123saipreethi@cluster0.rqlwy3u.mongodb.net/Library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  about: String,
});

const bookdata = mongoose.model("bookdata", BookSchema);

module.exports = bookdata;
