const horatexto = document.querySelector('.horas');
const diatexto = document.querySelector('.dias')
const minutotexto = document.querySelector('.minutos');
const segundostexto = document.querySelector('.segundos');
const horaEscolhida = window.prompt('Escolha uma hora');
const dia = window.prompt('Escolha um dia');
const mes = window.prompt('Escolha um mês');
const ano = window.prompt('Escolha um ano');
const dataEscolhida = new Date(`${ano}-${mes}-${dia}T${horaEscolhida}`);
console.log(dataEscolhida)
let valores=[horaEscolhida,dia,mes,ano,dataEscolhida];
console.log(valores[4])
function contador(){
    const horaAtual = new Date();
    let segundos = (valores[4]-horaAtual)/1000;
    let minutos = segundos/60;
    let horas = minutos/60;
    let dias = horas/24;
    dias = Math.floor(dias);
    horas = Math.floor(horas);
    minutos = Math.floor(minutos);
    segundos = Math.floor(segundos);
    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    if (valores[4] > 0){
        return [dias,horas,minutos,segundos]
    }
}
function atualizaCronometro(){
    diatexto.textContent = `${contador()[0]}`
    horatexto.textContent = `${contador()[1]}`
minutotexto.textContent = `${contador()[2]}`
segundostexto.textContent   = `${contador()[3]}`
}
function comecaCronometro(){
    atualizaCronometro()
    setInterval(atualizaCronometro,1000);
}
comecaCronometro()