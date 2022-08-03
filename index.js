// require('./server');
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

//////////////////////////////////////////////////////////
var cacheService = require('express-api-cache');
var cache = cacheService.cache;

// app.get(
//   '/',
//   cache('10 minutes'),
//   // (req, res) => {
//   // Do some work to retrieve movies and request before 10 minutes will get movies from cache
//   // res.json([
//   //   {
//   //     title: 'The Lord of the Rings',
//   //     director: 'Peter Jackson',
//   //   },
//   //   { title: 'Memento', director: 'Christopher Nolan' },
//   // ]);
//   // }
// );

////////////////////////////////////////////////////

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};
corsOptions.credentials = true;
app.use(cors(corsOptions));
// 'mongodb+srv://pagebuilder:pagebuilder@pagebuilder.ytsht7p.mongodb.net/?retryWrites=true&w=majority';

//Connect to database
// const MONGO_URI = 'mongodb://localhost:27017/webpage_builder';
const MONGO_URI =
  'mongodb+srv://pagebuilder:pagebuilder@pagebuilder.ytsht7p.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
  // process.env.MONGO_URI || 'mongodb://localhost:27017/webpage_builder',
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

app.use('/api/', cache('10 minutes'), uiRoute);
app.use('/api/pages', pageRoute);
app.use('/api/users', userRoute);
app.use('/api/assets', assetRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // console.log(`server is runnin g at http://localhost:${PORT}/api/`);
  console.log(`server is runnin g at http://localhost:${PORT}/api/`);
});
