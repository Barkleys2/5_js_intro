console.clear();

const a = 13;
const b = 72;
const c = 61;

console.log('suma');
const suma = (a + b + c);
console.log(a, b, c, suma);

console.log('skirtumas');
const skirtumas = (a - b - c);
console.log(a, b, c, skirtumas);

console.log('skirtumassuma');
const skirtumassuma = (a - b + c);
console.log(a, b, c, skirtumassuma);

console.log('suma2');
const suma2 = (suma - skirtumas + skirtumassuma);
console.log(suma, skirtumas, skirtumassuma, suma2);


console.log('-----------------------');


console.log('Title');
const title = "EINA ";
console.log(title);

console.log('Title 2');
const title2 = "DU ";
console.log(title2);

console.log('Title 3');
const title3 = "KAČIUKAI ";
console.log(title3);

console.log('Title 4');
const title4 = "TRYSE ";
console.log(title4);

console.log('Title 5');
const title5 = (title + title2 + title3 + title4);
console.log(title5);