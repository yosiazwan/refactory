let max = arrayNum => {
  return Math.max(...arrayNum);
}

let min = arrayNum => {
  return Math.min(...arrayNum);
}

let average = arrayNum => {
  return arrayNum.reduce((a,b) => a + b, 0) / arrayNum.length;
}

let arrayNumber = [1,2,3,4,5,6,8,9,10];
console.log(max(arrayNumber));
console.log(min(arrayNumber));

let randomNumber = [5,5,6,6,6];
console.log(average(randomNumber));
