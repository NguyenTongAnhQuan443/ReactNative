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
// const finMaxArr = finMaxArray = (arr) => {
//     return Math.max(...arr)
// }
// const arr3 = [-10, -4, -2018, 23, 10, 2016] 
// console.log(finMaxArr(arr3))

// Cau 14
// const first10Fibonacci = first10FibonacciFunction = () =>{
//     const fibonacci = [0, 1];
//     for(let i =2; i <= 10; i++){
//         fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     }
//     return fibonacci;
// }
// console.log(first10Fibonacci())

// Cau 15
// const findFibonacci = (n) => {
//     if (n <= 0) {
//         return 0;
//     } else if (n == 1) {
//         return 1;
//     } else {
//         return findFibonacci(n - 1) + findFibonacci(n - 2)
//     }
// }
// console.log(findFibonacci(10))

//  Cau 16
// const isPrime = isPrimeFunction = (number) =>{
//     if(number <=1){
//         return false;
//     }
//     if(number == 2){
//         return true;
//     }
//     if(number % 2 === 0){
//         return false;
//     }
//     for(let i = 3; i <= Math.sqrt(number); i+=2){
//         if(number % i === 0){
//             return false;
//         }
//     }
//     return true
// }
// let checkPrime = 2;
// console.log(isPrime(checkPrime) ? 'isPrime' : 'Not isPrime')

// Cau 17
// const sumOfDigits = sumOfDigitsFunction = (number) => {
//     let sum = 0;
//     while(number > 0){
//         sum += number % 10;
//         number = Math.floor(number / 10); // bỏ chữ số cuối cùng
//     }
//     return sum;
// }
// console.log(`SUM = ${sumOfDigits(23102016)}`)

// Cau 18
// const isPrime = isPrimeFunction = (number) =>{
//     if(number <=1){
//         return false;
//     }
//     if(number == 2){
//         return true;
//     }
//     if(number % 2 === 0){
//         return false;
//     }
//     for(let i = 3; i <= Math.sqrt(number); i+=2){
//         if(number % i === 0){
//             return false;
//         }
//     }
//     return true
// }
// const first100Prime = first100PrimeFunction = () =>{
//     let isPrimeArr = [];
//     let i = 2;
//     while(isPrimeArr.length < 100){
//         if(isPrime(i)){
//             isPrimeArr.push(i)
//         }
//         i++;
//     }
//     console.log(isPrimeArr)
// }
// first100Prime()

// Cau 19
// const isPrime = isPrimeFunction = (number) => {
//     if (number <= 1) {
//         return false;
//     }
//     if (number == 2) {
//         return true;
//     }
//     if (number % 2 === 0) {
//         return false;
//     }
//     for (let i = 3; i <= Math.sqrt(number); i += 2) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true
// }
// const primesGreaterThanN = (p, n) => {
//     let primeArr = [];
//     let currrentNumber = n + 1;
//     while (primeArr.length < p) {
//         if (isPrime(currrentNumber)) {
//             primeArr.push(currrentNumber)
//         }
//         currrentNumber++;
//     }
//     return primeArr;
// }
// console.log(primesGreaterThanN(5, 10))

// Cau 20
// const rotateLeft = (arr) => {
//     if(arr.length === 0) return arr;
//     const firstElement = arr.shift(); // Lấy và xóa phần tử đầu tiên
//     arr.push(firstElement);
//     return arr;
// } 
// const myArr = [2016, 10, 23];
// console.log(rotateLeft(myArr))

// Cau 21
// const rotateRight = (arr) => {
//     if(arr.length === 0) return arr;
//     const firstElement = arr.pop(); // Lấy và xóa phần tử cuối cùng
//     arr.unshift(firstElement); // Thêm vào đầu mảng
//     return arr;
// } 
// const myArr = [2016, 10, 23];
// console.log(rotateRight(myArr))

// Cau 22
// const reverseArr = (arr) =>{
//     return arr.reverse();
// }
// const myArr = [2016, 10, 23];
// console.log(reverseArr(myArr))

// Cau 23 
// const reverseString = (str) =>{
//     return str.split('').reverse().join('');
// }
// const myStr = 'NguyenQuan'
// console.log(reverseString(myStr))

// Cau 24
// const mergeArr = (arr1, arr2) =>{
//     return arr1.concat(arr2);
// }
// const myArr1 = [2016, 10, 23];
// const myArr2 = [2018, 4, 10];
// console.log(mergeArr(myArr1, myArr2))

// Cau 25 hợp trừ giao của hai mảng
// const symmetricDifference = (arr1, arr2) => {
//     const onlyInArr1 = arr1.filter(item => !arr2.includes(item));
//     const onlyInArr2 = arr2.filter(item => !arr1.includes(item));
//     return [...onlyInArr1, ...onlyInArr2];
// }
// const arr1 = [2,0,1,6]
// const arr2 = [2,0,1,8]
// console.log(symmetricDifference(arr1, arr2))

// Cau 26
const arrayDifference = (arr1, arr2) =>{
    return arr1.filter(item => !arr2.includes(item));
}
const arr1 = [2,0,1,6]
const arr2 = [2,0,1,8]
console.log(arrayDifference(arr1, arr2))

