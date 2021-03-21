import express = require("express");
import { calculateBmi } from "./bmiCalculator";
const app = express();

app.use(express.json());

app.get('/hello', (_req,res) => {
  res.send('Hello Full Stack');
} );


app.get('/bmi', (req, res) => {
  const { height, weight} = req.body;
  
  if(isNaN(height) || isNaN(weight)){
    res.status(400).json({error: " malformated parameters"});
  }
  else {
    const result = {height: height, weight:weight, bmi:calculateBmi(height, weight)}
    res.json(result)
  }
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});