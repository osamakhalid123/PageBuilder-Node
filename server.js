const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uiRoute = require('./ui/ui.route');
const pageRoute = require('./page/page.route');
const userRoute = require('./user/user.route');
const assetRoute = require('./assets/assets.route');

//Initialize App
const app = express();
app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};
corsOptions.credentials = true;
app.use(cors(corsOptions));

//Connect to database
const MONGO_URI = 'mongodb://localhost:27017/webpage_builder';
mongoose.connect(
  MONGO_URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('CONNECTED TO MONGODB');
  },
);

app.use('/api/', uiRoute);
app.use('/api/pages', pageRoute);
app.use('/api/users', userRoute);
app.use('/api/assets', assetRoute);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}/api/`);
});
