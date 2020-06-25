let removeDuplicate = (array) => array.filter((v,i) => array.indexOf(v) === i)

const buah = ['jambu', 'pisang', 'pisang', 'blueberri', 'semangka'];

console.log( removeDuplicate(buah) );
