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
const sum10To30 = sum10To30Function = () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        if (i > 10 && i < 30) {
            if (i % 2 == 0) {
                sum += i;
            }
        }
    }
    console.log(sum)
}
sum10To30()