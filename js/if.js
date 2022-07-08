console.clear();

/*
IF - reiksmiu palyginimas

palyginimo operatoriai:
visi: >, <, <=, >=, ==, !=, ===, !==
naudotini: >, <, <=, >=, ===, !==
nenaudotini: ==, !=,

!= - yra ne;
!== - griezta lygybe arba neligybe;
=== - grieztai;

šablonai:
if () {};
if () {} else {};
if () {} else if {}  . . . else if {};
if () {} else if {}  . . . else if {} . . . else if {};
*/
const labas = 5;
const a = '5';
const b = 5;

if (a === b) {
    console.log('A lygu B');
} else {
    console.log('A nelygu B');
}


const eyeColor = 'rud';


if(eyeColor === 'zalia'){
    console.log('Žaliakis');
} else if (eyeColor === 'melyna') {
    console.log('Melynakis');
} else if (eyeColor === 'ruda') {
    console.log('Rudaakis');
} else {
    console.log('Nezinoma akiu spalva');
}

if ('aaa' === 'aaa') {
    console.log(true);
} else {
    console.log(false);
}

const day = 7

if (day === 1) {
    console.log('Pirmadienis');
} else {
    if (day === 2) {
        console.log('Antradienis');
    } else {
        if (day === 3) {
            console.log('Trečiadienis');
        } else {
            if (day === 4) {
                console.log('Ketvirtadienis');
            } else {
                if (day === 5) {
                    console.log('Penktadienis');
                } else {
                    if (day === 6) {
                        console.log('Šeštadienis');
                    } else {
                        if (day === 7) {
                            console.log('Sekmadienis');
                        } 
                    }
                }
            }
        }
    }
}

console.clear();

const nuoKadaSilta = 24;
const dabartineTemp = 25;
const yraKrituliai = true;

if (yraKrituliai) {
    if (dabartineTemp > nuoKadaSilta) {
        console.log('Einam nuogi');
    } else {
        console.log('Sketis ir striuke');
    }
} else {
    if (dabartineTemp > nuoKadaSilta) {
        console.log('Alaus');
    } else {
        console.log('Degtine');
    }
}

console.clear();

