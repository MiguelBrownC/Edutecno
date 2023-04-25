function repeted(texto) {
    let textoDoble = '';
    for (let i = 0; i < texto.length; i++) {
        textoDoble += texto[i] + texto[i]
        // console.log(textoDoble);    
    }
    return textoDoble
}

// let aenviar ="holas"
// console.log(repeted(aenviar))
//         console.log(textoDoble);    
//     }
// }

let aenviar = "holas"
console.log(repeted(aenviar))


function concatenar(string1, string2) {
    let junto = string1 + " " + string2
    return junto;
}

let dat1 = "hola"
let dat2 = "a TODOS"

console.log(concatenar(dat1, dat2))


function dataType(cadena) {
    return typeof (cadena)
}
let aconsultar = true
console.log(dataType(aconsultar))

function fizzBuzz(num) {
    return num % 3 == 0 && num % 5 == 0 ? "FizzBuzz" : num % 3 == 0 ? "Fizz" : num % 5 == 0 ? "Buzz" : num.toString()
}

console.log(fizzBuzz(15))



function upperLower(cadena) {
    let lowerCadena = cadena.toLowerCase()
    // const vocals = ["a", "e", "i", "o", "u"]
    let final = ''

    for (let letra in lowerCadena) {
        // for (let vocal in vocals) {
        //     vocals[vocal] === lowerCadena[letra]
        //         ? console.log(lowerCadena[letra]+" verdadero")
        //         // final += lowerCadena[letra].toUpperCase()
        //         : console.log(lowerCadena[letra]+" falso")
        //         // final += lowerCadena[letra].toLowerCase()
        // }
        
        // INCLUDE
        // if(vocales.includes(cadena[letra]))
        // console.log(cadena[letra])


        if(cadena[letra]=== "a"||cadena[letra]=== "e"||cadena[letra]=== "i"||cadena[letra]=== "o"||cadena[letra]=== "u"){
            final+=cadena[letra].toUpperCase()
        }else{
            final+=cadena[letra].toLowerCase()
        }
    }
    return final
}
console.log(upperLower("holas"))



console.log("---------------")

function formatData(day, month) {
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "septiebre", "octubre", "noviembre", "diciembre"]
    const dayIsValid = day > 1 && day < 31
    const monthIsValid = months[month - 1]
    return dayIsValid && monthIsValid ? `${day} de ${months[month - 1]}` : ''
}

let dia = 12
let mes = "enero"
console.log(formatData(dia, mes))