// // Coding Challenge #1
// // Data 1
// let markMass1 = 78;
// let markHeight1 = 1.69;
// let johnMass1 = 92;
// let johnHeight1 = 1.95;

// // Data 2
// let markMass2 = 95;
// let markHeight2 = 1.88;
// let johnMass2 = 85;
// let johnHeight2 = 1.76;

// // tính bmi
// function calculateBMI(mass, height, callback) {
//     let bmi = mass / (height ** 2);
//     callback(bmi);
// }

// // so sánh bmi
// function compareBMI(bmiMark, bmiJohn){
//     return bmiMark > bmiJohn;
// }

// // callback
// const f1 = calculateBMI(markMass1, markHeight1, function(markBMI1){
//     calculateBMI(johnMass1, johnHeight1, function(johnBMI1){
//         let compare = compareBMI(markBMI1, johnBMI1);
//         console.log("Data 1: Mark BMI is height: ", compare)
//     });
// });

// const f2 = calculateBMI(markMass2, markHeight2, function(markBMI2){
//     calculateBMI(johnMass2, johnHeight2, function(johnBMI2){
//         let compare = compareBMI(markBMI2, johnBMI2);
//         console.log("Data 2: Mark BMI is height: ", compare)
//     });
// });


// // Coding Challenge #2
// calculateBMI(markMass1, markHeight1, function(markBMI1){
//     calculateBMI(johnMass1, johnHeight1, function(johnBMI1){
//         let compare = compareBMI(markBMI1, johnBMI1);

//         if(compare){
//             console.log(`Data 1: Mark's BMI is higher than John's!`)
//         }else{
//             console.log(`Data 1: John's BMI is higher than Mark's!b`)
//         }
//     })
// })

// calculateBMI(markMass2, markHeight2, function(markBMI2){
//     calculateBMI(johnMass2, johnHeight2, function(johnBMI2){
//         let compare = compareBMI(markBMI2, johnBMI2);

//         if(compare){
//             console.log(`Data 2: Mark's BMI is higher than John's!`)
//         }else{
//             console.log(`Data 2: John's BMI is higher than Mark's!b`)
//         }
//     });
// });

// function bmiOnePeople(functionBMI){
//     return functionBMI;
// }

// calculateBMI(markMass1, markHeight1, function(markMass1, markHeight1 ){
//     calculateBMI(johnMass1, johnHeight1, function(johnMass1, johnHeight1){
//         let bmiMark = bmiOnePeople(markMass1,markHeight1);
//         let bmiJohn = bmiOnePeople(johnMass1, johnHeight1);

//         if(bmiMark > bmiJohn){
//             console.log(`Data 1: Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
//         }else{
//             console.log(`Data 1: John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
//         }
//     });
// });

// calculateBMI(markMass2, markHeight2, function(markMass2, markHeight2){
//     calculateBMI(johnMass2, johnHeight2, function(johnMass2, johnHeight2){
//         let bmiMark = bmiOnePeople(markMass2, markHeight2);
//         let bmiJohn = bmiOnePeople(johnMass2, johnHeight2);

//         if(bmiMark > bmiJohn){
//             console.log(`Data 2: Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
//         }else{
//             console.log(`Data 2: John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
//         }
//     })
// })

// Coding Challenge #3
// Data 1
// let dataDolphinsScore1 = [96, 108, 89];
// let dataKoalasScore1 = [88, 91, 110];

// let dataDolphinsScore2 = [97, 112, 101];
// let dataKoalasScore2 = [109, 95, 123];

// let dataDolphinsScore3 = [97, 112, 101];
// let dataKoalasScore3 = [109, 95, 106];

// const avgDataDolphinsScore1 = dataDolphinsScore1.reduce((total, num) => total + num, 0) / dataDolphinsScore1.length;
// const avgDataKoalasScore1 = dataKoalasScore1.reduce((total, num) => total + num, 0) / dataKoalasScore1.length;

// const avgDataDolphinsScore2 = dataDolphinsScore2.reduce((total, num) => total + num, 0) / dataDolphinsScore2.length;
// const avgDataKoalasScore2 = dataKoalasScore2.reduce((total, num) => total + num, 0) / dataKoalasScore2.length;

// const avgDataDolphinsScore3 = dataDolphinsScore3.reduce((total, num) => total + num, 0) / dataDolphinsScore3.length;
// const avgDataKoalasScore3 = dataKoalasScore3.reduce((total, num) => total + num, 0) / dataKoalasScore3.length;

// if (avgDataDolphinsScore1.toFixed(2) > avgDataKoalasScore1.toFixed(2)) {
//     if (checkWin(dataDolphinsScore1)) {
//         console.log(`DolphinsScore1: ${avgDataDolphinsScore1.toFixed(2)} - avgDataKoalasScore1: ${avgDataKoalasScore1.toFixed(2)} => Dolphins WIN`)
//     } else {
//         console.log(`Not qualified to win`)
//     }

// } else if (avgDataDolphinsScore1.toFixed(2) < avgDataKoalasScore1.toFixed(2)) {
//     if (checkWin(dataKoalasScore1)) {
//         console.log(`DolphinsScore1: ${avgDataDolphinsScore1.toFixed(2)} - avgDataKoalasScore1: ${avgDataKoalasScore1.toFixed(2)} => Koalas WIN`)
//     } else {
//         console.log(`Not qualified to win`)
//     }

// } else {
//     if (checkWin(dataKoalasScore1) && checkWin(dataKoalasScore1)) {
//         console.log(`DolphinsScore1: ${avgDataDolphinsScore1.toFixed(2)} - avgDataKoalasScore1: ${avgDataKoalasScore1.toFixed(2)} => DROW !!`)
//     } else {
//         console.log(`Not qualified to win`)
//     }
// }

// if (avgDataDolphinsScore2.toFixed(2) > avgDataKoalasScore2.toFixed(2)) {
//     if (checkWin(dataDolphinsScore2)) {
//         console.log(`DolphinsScore2: ${avgDataDolphinsScore2.toFixed(2)} - avgDataKoalasScore2: ${avgDataKoalasScore2.toFixed(2)} => Dolphins WIN`)
//     } else {
//         console.log(`Not qualified to win`)
//     }

// } else if (avgDataDolphinsScore2.toFixed(2) < avgDataKoalasScore2.toFixed(2)) {
//     if (checkWin(dataKoalasScore2)) {
//         console.log(`DolphinsScore2: ${avgDataDolphinsScore2.toFixed(2)} - avgDataKoalasScore2: ${avgDataKoalasScore2.toFixed(2)} => Koalas WIN`)
//     } else {
//         console.log(`Not qualified to win`)
//     }

// } else {
//     if (checkWin(dataDolphinsScore2) && checkWin(dataKoalasScore2)) {
//         console.log(`DolphinsScore2: ${avgDataDolphinsScore2.toFixed(2)} - avgDataKoalasScore2: ${avgDataKoalasScore2.toFixed(2)} => DROW !!`)
//     } else {
//         console.log(`Not qualified to win`)
//     }
// }

// if (avgDataDolphinsScore3.toFixed(2) > avgDataKoalasScore3.toFixed(2)) {
//     if (checkWin(dataDolphinsScore3)) {
//         console.log(`DolphinsScore3: ${avgDataDolphinsScore3.toFixed(2)} - avgDataKoalasScore3: ${avgDataKoalasScore3.toFixed(2)} => Dolphins WIN`)
//     } else {
//         console.log(`Not qualified to win`)
//     }
// } else if (avgDataDolphinsScore3.toFixed(2) < avgDataKoalasScore3.toFixed(2)) {
//     if (checkWin(dataKoalasScore3)) {
//         console.log(`DolphinsScore3: ${avgDataDolphinsScore3.toFixed(2)} - avgDataKoalasScore3: ${avgDataKoalasScore3.toFixed(2)} => Koalas WIN`)
//     } else {
//         console.log(`Not qualified to win`)
//     }

// } else {
//     if (checkWin(dataDolphinsScore3) && checkWin(dataDolphinsScore3)) {
//         console.log(`DolphinsScore3: ${avgDataDolphinsScore3.toFixed(2)} - avgDataKoalasScore3: ${avgDataKoalasScore3.toFixed(2)} => DROW !!`)
//     } else {
//         console.log(`Not qualified to win`)
//     }

// }

// function checkWin(scoreArr) {
//     for (let value of scoreArr) {
//         if (value > 100) {
//             return true;
//         }
//     }
//     return false;
// }


// Coding Challenge #4
// const bill275 = 316.25;
// const tip = checkTip = (value) => {
//     return (value > 15 && value <= 300) ? 15 : (value > 300 ? 20 : 0)
// }
// console.log(`The bill was 275, the tip was ${tip(bill275)}, and the total value ${bill275}`)


// Part 2
// Coding Challenge #1
// Data 1
let dolphinsScore1 = [44, 23, 71];
let koalasScore1 = [65, 54, 49];

let dolphinsScore2 = [85, 54, 41];
let koalasScore2 = [23, 34, 27];

calcAverage = (arr) => {
    return arr.reduce((total, num) => total + num, 0) / arr.length
}

let avgDataDolphinsScore1 = calcAverage(dolphinsScore1);
let avgDataDolphinsScore2 = calcAverage(dolphinsScore2);

let avgDataKoalasScore1 = calcAverage(koalasScore1);
let avgDataKoalasScore2 = calcAverage(koalasScore2);

checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= avgKoalas * 2) {
        console.log(`Dolhins: ${avgDolhins}- Koalas: ${avgKoalas} => Dolhins WIN`)
    } else if (avgDolhins <= avgKoalas * 2) {
        console.log(`Dolhins: ${avgDolhins}- Koalas: ${avgKoalas} => Koalas WIN`)
    } else {
        console.log(`NO WINNER`)
    }

}

checkWinner(avgDataDolphinsScore1, avgDataKoalasScore1);
checkWinner(avgDataDolphinsScore2, avgDataKoalasScore2);