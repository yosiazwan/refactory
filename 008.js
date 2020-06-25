const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var totalAngka = 0;

let ask = () => {
  rl.question('Input Angka / Sama Dengan? ', (value) => {
    if(value !== "="){
      totalAngka += parseInt(value);
      ask();
    }
    else {
      console.log(`Total Penjumlahan ${totalAngka}`);
      rl.close();
    }
  });
}

ask();
