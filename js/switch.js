/*
SWITCH


*/

console.clear();

const day = 1;

switch (day) {
    case 1:
        console.log('1: pirmadienis');
    case 2:
        console.log('2: antradienis');
    case 3:
        console.log('3: treciadienis');  
    case 4:
        console.log('4: ketvirtadienis');  
    case 5:
        console.log('5: penktadienis');  
    case 6:
        console.log('6: šeštadienis');  
    case 7:
        console.log('7: sekmadienis');
        break;
    default:
        console.log('tokios dienos savaitėje nėra');
        break;
}

console.log('-------------------------');

const weakday = 1;

switch (weakday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;
    case 6:
    case 7:
        console.log('savaitgalis');
        break;
    default:
        console.log('tokios dienos savaitėje nėra');
        break;
}


/*

1 - kintamieji
2 - if
3 - for
4 - function
5 - class
6 - event listeners

*/