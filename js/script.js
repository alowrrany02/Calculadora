function somar(){
    let som1 = window.document.getElementById('soma1')
    let som2 = window.document.getElementById('soma2')
    let r = window.document.getElementById('resul')
    let n1 = parseFloat(som1.value)
    let n2 = parseFloat(som2.value)
    let s = n1 + n2
    r.innerHTML = `O resultado da soma entre ${n1} e ${n2} é igual a <strong><i>${s}</i></strong>`
}
function sub(){
    var sub1 = window.document.getElementById('subtra1')
    var sub2 = window.document.getElementById('subtra2')
    var r = window.document.getElementById('resu')
    var n1 = parseFloat(sub1.value)
    var n2 = parseFloat(sub2.value)
    var s = n1 - n2
    r.innerHTML = `O resultado da subtração entre ${n1} e ${n2} é igual a <strong><i>${s}</i></strong>`
}

function multi(){
    var mul1 = window.document.getElementById('multi1')
    var mul2 = window.document.getElementById('multi2')
    var r = window.document.getElementById('res')
    var n1 = parseFloat(mul1.value)
    var n2 = parseFloat(mul2.value)
    var s = n1 * n2
    r.innerHTML = `O resultado da multiplicação entre ${n1} e ${n2} é igual a <strong><i>${s}</i></strong>`
}

function divis(){
    var divi1 = window.document.getElementById('divi1')
    var divi2 = window.document.getElementById('divi2')
    var r = window.document.getElementById('re')
    var n1 = parseFloat(divi1.value)
    var n2 = parseFloat(divi2.value)
    var s = n1 / n2
    r.innerHTML = `O resultado da divisão entre ${n1} e ${n2} é igual a <strong><i>${s}</i></strong>`
}