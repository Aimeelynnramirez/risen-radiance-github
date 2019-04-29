const express = require('express');
const mongoose = require('mongoose');



const data = require('./routes/api/data');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const assert = require('assert');


const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  // perform actions on the collection object

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://aimeelynn2:poopy123@clusterapi-twvc0.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("assets").collection("images");

dummyData = [
   {'img': "https://i.pinimg.com/236x/d4/c1/ae/d4c1aeaae569c100a004b5e5d61596a1.jpg"},
   {'img': "https://i.pinimg.com/236x/ad/87/88/ad87887b36d1dcc44e250d1c87b983fb.jpg"},
   {'img': "https://i.pinimg.com/236x/01/1d/c7/011dc795427f70c0410d5a478b9974d7.jpg"},
   {'img': "https://i.pinimg.com/236x/ac/63/d8/ac63d8223c5c0ea308355a76f6b424e1.jpg"},
   {'img': "https://i.pinimg.com/236x/d9/cc/4c/d9cc4c0a544e514a281bcf5fe53e33f7.jpg"},
   {'img': "https://i.pinimg.com/236x/f1/e4/87/f1e4870649d87d9ceb899e529cfdfb50.jpg"},
   {'img': "https://i.pinimg.com/236x/54/7b/29/547b296f59495a45da396952b209cc30.jpg"},
   {'img': "https://i.pinimg.com/30x30_RS/f8/33/ea/f833ead1b5fd41f8cc9d27054317bc32.jpg"},
   {'img': "https://i.pinimg.com/236x/7c/5b/96/7c5b96d59c03407df82c0c177779137f.jpg"},
   {'img': "https://i.pinimg.com/236x/ce/34/0c/ce340c3f137f240c95578982d7c77836.jpg"},
   {'img': "https://i.pinimg.com/236x/57/2c/b7/572cb7c2afd9b9c5dbd4f0c8106570e6.jpg"},
   {'img': "https://i.pinimg.com/236x/53/75/79/5375796a59d5563ebca98bab2a6a3f07.jpg"}

]
collection.insertMany(dummyData);
console.log("this is loaded", dummyData)
    // perform actions on the collection object
  
  });
  
app.get('/', (req, res) => res.send('Backend'));

// Use Routes
app.use('/api/data', data);
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
