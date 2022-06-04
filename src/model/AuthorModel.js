const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://saipreethi:123saipreethi@cluster0.rqlwy3u.mongodb.net/Library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  title: String,
  image: String,
  about: String,
});

const authordata = mongoose.model("authordata", AuthorSchema);

module.exports = authordata;
