import express = require("express");
import { calculateBmi } from "./bmiCalculator";
import {calculateExercises} from "./exercisecalculator";
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

app.post('/exercise', (req, res) => {
  const {daily_exercises , target } : {daily_exercises: number[], target:number} = req.body;

  if (daily_exercises.length ==0 || !target){
    res.json({'error': 'parameters missing'});
    return;
  }
  if (!daily_exercises.every(a => !isNaN(a)) || isNaN(target)){
    res.json({'error': 'malformatted parameters'});
    return;
  }
  const result  = calculateExercises(daily_exercises, target);
  res.json(result);

})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});