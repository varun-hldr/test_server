const express = require('express');
const bodyParser = require('body-parser');
const axios = require("axios")

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/verifyPan', async (req, res) => {
    const {panNumber, panDob, panName} = req.body
    console.table({panNumber, panDob, panName})
    // Getting pan response from hyperverge api
    const data = await axios({
        method: 'post',
        url: `https://ind-verify.hyperverge.co/api/verifyPAN`,
        headers: {
          'Content-Type': 'application/json',
          appId: "9eeaa4",
          appKey: "51954b619e8614fbfe74",
        },
        data: { pan: panNumber, dob: panDob, name: panName },
      })
        .then((res) => res.data)
        .catch((err) => {
          console.log('CDB Data => ', err.response);
          res.send({ message: err.response.data.error })
        });

    res.send(data)
})

const port = 4000
app.listen(port, () => {
    console.log("Server is up and running on ", port)
})