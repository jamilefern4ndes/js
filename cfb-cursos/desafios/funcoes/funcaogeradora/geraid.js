let i = 0;
function* ids() {
    while (i < 3) { 
        yield `ID-n${i++}`;
    }
}

let iti = ids();

for (let v of iti) {
    console.log(v);
}

   



