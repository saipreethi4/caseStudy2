const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://saipreethi:123saipreethi@cluster0.rqlwy3u.mongodb.net/Library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: String,
  pwd: String,
});

const userdata = mongoose.model("userdata", userSchema);

module.exports = userdata;
