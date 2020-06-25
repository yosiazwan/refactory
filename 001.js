function grade(val) {
  if (val >= 90 ) {
    return 'A';
  } else if ( val >= 80 && val <= 89 ) {
    return 'B';
  } else if ( val >= 70 && val <= 79 ) {
    return 'C';
  } else if ( val >= 60 && val <= 69 ) {
    return 'D';
  } else {
    return 'E';
  }
}

console.log(grade(95));
console.log(grade(85));
console.log(grade(75));
console.log(grade(65));
console.log(grade(55));
