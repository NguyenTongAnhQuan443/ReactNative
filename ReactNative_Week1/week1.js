// Cau 1
// for(let i = 0 ; i < 10; i++){
//     console.log(i)
// }

// Cau 2
// for(let i = 0 ; i < 100; i++){
//     if(i % 2 != 0){
//         console.log(i)
//     }
// }

// Cau 3 
// for(let i = 1 ; i < 11; i++){
//     console.log(`7 * ${i} = ${7 * i}`)
// }

// Cau 4
// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }

// Cau 5
// const sum = sum1To10 = () => {
//     let sum = 0;
//     for (let i = 1; i < 11; i++) {
//         sum += i;
//     }
//     console.log("🚀 ~ sum:", sum)
// }
// sum()

// Cau 6
// const factorial = factorialFunction = () => {
//     let result = 1;
//     for (let i = 1; i < 11; i++) {
//         result *= i;
//     }
//     console.log(`${result}`)
// }
// factorial()

// Cau 7
// const sum10To30 = sum10To30Function = () => {
//     let sum = 0;
//     for (let i = 0; i < 100; i++) {
//         if (i > 10 && i < 30) {
//             if (i % 2 == 0) {
//                 sum += i;
//             }
//         }
//     }
//     console.log(sum)
// }
// sum10To30()

// Cau 8
// const convertTempCToF = tempCToFFunction = (doC) => {
//     return doC * (9/5) + 32;
// }
// console.log(convertTempCToF(23))

// Cau 9
// const convertTempFToC = tempFToCFunction = (doF) => {
//     return (doF - 32) * (5 / 9);
// }
// console.log(convertTempFToC(23))

// Cau 10
// const sumARR = sumArray = (arr) =>{
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// const arr = [23, 10, 2016] 
// sumARR(arr)

// Cau 11
// const avgARR = avgArray = (arr) =>{
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum / arr.length)
// }
// const arr1 = [23, 10, 2016] 
// avgARR(arr1)

// Cau 12
// const filterPositiveNum = filterPositiveNumFunction = (arr) => {
//     return arr.filter(number =>
//         number > 0
//     )
// }
// const arr2 = [-10, -4, -2018, 23, 10, 2016] 
// console.log(filterPositiveNum(arr2))

// Cau 13
const finMaxArr = finMaxArray = (arr) => {
    return Math.max(...arr)
}
const arr3 = [-10, -4, -2018, 23, 10, 2016] 
console.log(finMaxArr(arr3))