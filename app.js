let who = ['The dog','My granma','His turtle','My bird'];
let what = ['ate','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


let ramdomnumber1 =  Math.floor(Math.random() * who.length)
let ramdomnumber2 = Math.floor(Math.random() * what.length) 
let ramdomnumber3 = Math.floor(Math.random() * when.length) 

let excuse = who[ramdomnumber1] + " " + what[ramdomnumber2]+ " " + when[ramdomnumber3]

console.log(excuse)

