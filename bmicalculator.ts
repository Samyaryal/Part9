export const  calculateBmi = (height:number, weight: number) : string=> {
  
  const bmi =weight/ ((height / 100) * (height / 100));
  
  if (bmi<18.5){
    return "under weight"
  }
  else if(bmi>=18.5 && bmi<=25){
    return "Normal"
  }
  else if (bmi>=25 && bmi<=30) {
    return "Obese"
  }
  else if (bmi > 30) {
    return "Overweight"
  }
  return `Oops something went wrong, unable to calculate bmi`;

}


console.log(calculateBmi(179, 200))