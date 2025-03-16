// gerador de IDs

function* ids(){
    let i = 0
    while (true){
       let id= yield  `ID-n{i++}`
       if (id = 10){
            break
       }
    }
}

let iti = ids()
while(true){console.log(iti.next().value)}

