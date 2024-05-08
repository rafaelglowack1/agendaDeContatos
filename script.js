let form = document.querySelector('#formulario')
var linhas =''
const registros  = {}
const valorNome = []
const valorNumero = []
form.addEventListener("submit" , function(e){
    e.preventDefault()
    addlinha()
    addtabela()
    
    
})
function addtabela(){
    let tabela = document.querySelector('#tbody')
    tabela.innerHTML=linhas

    document.querySelector('.nome').value = ""
    document.querySelector('.numero').value = ""

}
function addlinha(){
    let nome = document.querySelector('.nome')
    let numero = Number(document.querySelector('.numero').value)
    const index = valorNumero.indexOf(numero)
    
    if(index !== -1 ){
        alert (`o número ${numero} ja foi adicionado pelo nome ${valorNome[index]}`)
        return
    }else {
        let linha = '<tr>'
        linha += ` <td> ${nome.value} </td>`
        linha += `<td> ${numero} </td>`
        linha += '</tr>'
        linhas += linha
        valorNome.push(nome.value)
        valorNumero.push(numero)
    }

    
    
}

