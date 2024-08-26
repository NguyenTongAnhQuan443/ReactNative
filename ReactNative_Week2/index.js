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
const f1 = calculateBMI(markMass1, markHeight1, function(markBMI1){
    calculateBMI(johnMass1, johnHeight1, function(johnBMI1){
        let compare = compareBMI(markBMI1, johnBMI1);
        console.log("Data 1: Mark BMI is height: ", compare)
    });
});

const f2 = calculateBMI(markMass2, markHeight2, function(markBMI2){
    calculateBMI(johnMass2, johnHeight2, function(johnBMI2){
        let compare = compareBMI(markBMI2, johnBMI2);
        console.log("Data 2: Mark BMI is height: ", compare)
    });
});


// Coding Challenge #2
calculateBMI(markMass1, markHeight1, function(markBMI1){
    calculateBMI(johnMass1, johnHeight1, function(johnBMI1){
        let compare = compareBMI(markBMI1, johnBMI1);

        if(compare){
            console.log(`Data 1: Mark's BMI is higher than John's!`)
        }else{
            console.log(`Data 1: John's BMI is higher than Mark's!b`)
        }
    })
})

calculateBMI(markMass2, markHeight2, function(markBMI2){
    calculateBMI(johnMass2, johnHeight2, function(johnBMI2){
        let compare = compareBMI(markBMI2, johnBMI2);

        if(compare){
            console.log(`Data 2: Mark's BMI is higher than John's!`)
        }else{
            console.log(`Data 2: John's BMI is higher than Mark's!b`)
        }
    });
});

function bmiOnePeople(functionBMI){
    return functionBMI;
}

calculateBMI(markMass1, markHeight1, function(markMass1, markHeight1 ){
    calculateBMI(johnMass1, johnHeight1, function(johnMass1, johnHeight1){
        let bmiMark = bmiOnePeople(markMass1,markHeight1);
        let bmiJohn = bmiOnePeople(johnMass1, johnHeight1);

        if(bmiMark > bmiJohn){
            console.log(`Data 1: Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
        }else{
            console.log(`Data 1: John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
        }
    });
});

calculateBMI(markMass2, markHeight2, function(markMass2, markHeight2){
    calculateBMI(johnMass2, johnHeight2, function(johnMass2, johnHeight2){
        let bmiMark = bmiOnePeople(markMass2, markHeight2);
        let bmiJohn = bmiOnePeople(johnMass2, johnHeight2);

        if(bmiMark > bmiJohn){
            console.log(`Data 2: Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
        }else{
            console.log(`Data 2: John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
        }
    })
})