var cors = require('cors')


const express = require('express')
const app = express();


  app.use(cors(
    {
      origin: 'http://localhost:5000'
    }
  ));
  app.use(express.json());

app.get('/names', (req,res) => {
    res.send("Response");
})

app.listen(5000, () => {
    console.log("Server running on port 5000");
})