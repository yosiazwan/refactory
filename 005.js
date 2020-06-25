let lapYear = year => {
    if ((year%4)===0) {
      if ((year%100)!==0){
        return year + ' adalah tahun kabisat';
      } else {
        if ((year%400)===0) {
          return year + ' adalah tahun kabisat';
        } else {
          return year + 'adalah bukan tahun kabisat';
        }
      }
    }

    return year + ' adalah bukan tahun kabisat';
}

console.log( lapYear(2004) );
console.log( lapYear(2008) );
console.log( lapYear(2012) );
console.log( lapYear(1900) );
console.log( lapYear(2100) );
console.log( lapYear(1600) );
console.log( lapYear(2000) );
console.log( lapYear(2009) );
