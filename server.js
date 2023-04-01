const express = require("express")
const app = express()
const port = 3000

app.use(express.static("./"));

app.use(express.static('public'));

app.use(
  express.urlencoded({
    extended: true,
  })
)


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/cart.html")
});


app.post('/submit-form', async (req, res) => {
  const userName = req.body.userName
  const userEmail = req.body.userEmail
  const userAddress = req.body.userAddress
  const userCity = req.body.userCity
  const userState = req.body.userState
  if (!userName || !userEmail || !userAddress || !userCity || !userState) {
    return res.status(400).send('Missing required form fields.');
  }

  console.log(`
  User Name: ${userName}
  User Email: ${userEmail}
  User Address: ${userAddress}
  User City: ${userCity}
  User State: ${userState}`)
  res.send('<h1 style = "font-family: Arial; color: white; background-color: #BCA79D; text-align: center; height: 200px; width: 400px; border-radius: 10px; display: table; justify-content: center; line-height: 200px;">Order Submitted!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

