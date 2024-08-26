// Coding Challenge #1
// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// tính bmi
function calculateBMI(mass, height, callback) {
    let bmi = mass / (height ** 2);
    callback(bmi);
}

// so sánh bmi
function compareBMI(bmiMark, bmiJohn){
    return bmiMark > bmiJohn;
}

// callback
calculateBMI(markMass1, markHeight1, function(markBMI1){
    calculateBMI(johnMass1, johnHeight1, function(johnBMI1){
        let compare = compareBMI(markBMI1, johnBMI1);
        console.log("Data 1: Mark BMI is height: ", compare)
    });
});

calculateBMI(markMass2, markHeight2, function(markBMI2){
    calculateBMI(johnMass2, johnHeight2, function(johnBMI2){
        let compare = compareBMI(markBMI2, johnBMI2);
        console.log("Data 1: Mark BMI is height: ", compare)
    });
});