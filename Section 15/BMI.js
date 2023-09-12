

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

function calculateBMI(height, weight) {
    // Calculate BMI
    const bmi = Math.round(weight / (height * height));
    return bmi;
}

// Example usage:
const heightInMeters = 1.78; // Replace with the actual height in meters
const weightInKg = 82; // Replace with the actual weight in kilograms

const bmiResult = calculateBMI(heightInMeters, weightInKg);

if (bmiResult < 18) {
    console.log("Your BMI is " + bmiResult + "so you are underweight.")
}
else if(bmiResult >= 18 && bmiResult <= 24) {
    console.log("Your BMI is " + bmiResult + " so you have a normal weight.")
}
else  {
    console.log("Your BMI is " + bmiResult + " so you are overweight.")

}
