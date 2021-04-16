var dobroDoValor = numero => numero * 2

var dobroDoDobro = numero => {
    let resultado = numero * 2
    return numero * resultado
}

console.log(dobroDoValor(7))
console.log(dobroDoDobro(3))