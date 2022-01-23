// const express = require("express");
// const app = express();
// const port = 3001;

// const amountQuery = require("./amount_query");
// app.use(express.json())
// app.use(function(req,res,next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
//   next();
// })
// app.get("/", (req, res) => {
//   amountQuery.getMonth()
//   .then((response) => {
//     res.status(200).send(response)
// })
//       .catch((error) => res.status(500).send(error));
  
// });

// app.listen(port, () => {
//   console.log("running");
// });
