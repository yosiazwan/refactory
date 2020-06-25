let rekursif = num => {
    if (num === 0) {
        return 0;
    } else {
        return num + rekursif(--num)
    }
}

console.log( rekursif(5) );
