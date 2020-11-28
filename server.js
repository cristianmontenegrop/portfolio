const compression = require('compression');
const express = require('express');

const app = express();
app.use(compression());

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

app.use(express.static('public'));

// require("./routes/apiRoutes")(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
  console.log('App listening on PORT: ', PORT);
});
