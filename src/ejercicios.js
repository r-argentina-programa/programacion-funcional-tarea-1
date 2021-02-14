export function multiplicarPor10(array) {
    return array.map(element => element * 10)
}

export function soloPares(array) {
    return array.filter(element => element % 2 === 0)
}

export function moverALaDerecha(array) {
    const arrayCopy = [...array];

    return arrayCopy.map((element, index, arr) => {
        return index ? arr[index - 1] : index === 0 ? arr[arr.length - 1] : "";
    })
}

export function soloUnaPalabra(array) {
    return array.filter(element => !element.includes(" "))
}

export function soloArraysPositivos(array) {
    return array.filter(element => element.every(item => item > 0))
}

export function soloVocales(array) {
    const rex = /[bcdfghjkmnlpqrstqvwxyz]/;
    return array.map(element => {
        return element.split("").map(item => {
            if (rex.test(item)) {
                item = ""
            } else {return item}
        }).join("") 
    })
}

export function todasVocalesIguales(array) {
    const rex = /[aeiou]/
    const checkforSameVocals = (word) => {
        const wordSplit = [...word]
        const vocalsMapped = wordSplit.filter(letter => {
            return rex.test(letter)
        })
      return vocalsMapped.every((item, _index, arr) => item === arr[0])  
    }
    
    return array.filter(element => {
        return checkforSameVocals(element)
    })
}

export function duplicarMatriz(array) {
    return array.map(element => {
        return element.map(item => {
            return item * 2
        })
    })
}

export function mayoresDeEdadValidados(array) {
    return array.map(element => {
    if (element.edad > 18) {
        element.mayor = true;
    } else {
       element.mayor = false;
    }
 return element
    })
}

export function transformarObjetoEnArray(objeto) {
    const objectToArray = Object.entries(objeto)
    return objectToArray.map(element => {
        return Object.assign({id: element[0]}, element[1])  
    })
}
