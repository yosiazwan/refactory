let oddEvent = val => {
  if( val % 2 == 0 ) {
    return 'genap';
  } else {
    return 'ganjil';
  }
}

console.log(oddEvent(1));
console.log(oddEvent(2));
