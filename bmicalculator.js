var calculateBmi = function (height, weight) {
    var bmi = weight / Math.pow(height, 2);
    var output = "";
    if (bmi < 18.5) {
        return "under weight";
    }
    else if (bmi >= 18.5 && bmi <= 25) {
        return "Normal";
    }
    else if (bmi >= 25 && bmi <= 30) {
        return "Obese";
    }
    else
        (bmi > 30);
    {
        return "Overweight";
    }
    return output;
};
console.log(calculateBmi(162, 54));
