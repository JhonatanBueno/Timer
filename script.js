const horatexto = document.querySelector('.horas');
const diatexto = document.querySelector('.dias')
const minutotexto = document.querySelector('.minutos');
const segundostexto = document.querySelector('.segundos');



// function contador(){
//     const horaAtual = new Date();
//     let segundos = (valores[4]-horaAtual)/1000;
//     let minutos = segundos/60;
//     let horas = minutos/60;
//     let dias = horas/24;
//     dias = Math.floor(dias);
//     horas = Math.floor(horas);
//     minutos = Math.floor(minutos);
//     segundos = Math.floor(segundos);
//     horas %= 24;
//     minutos %= 60;
//     segundos %= 60;

//     if (valores[4] > 0){
//         return [dias,horas,minutos,segundos]
//     }
// }


function define(){
    let horaEscolhida = +document.querySelector('.input-hora').value;
    horaEscolhida > 10 ? horaEscolhida : Number(`0${horaEscolhida}`);
    let data = document.querySelector('.datae').value;
    let datas = data.split('-');
    let ano = +datas[0];
    let mes = +datas[1];
    mes -= 1;
    let dia = +datas[2];
    console.log(data);

    let minutoEscolhido = +document.querySelector('.input-minuto').value;
    minutoEscolhido > 10 ? minutoEscolhido : Number(`0${minutoEscolhido}`);
    let segundosEscolhidos = +document.querySelector('.input-segundos').value;
    segundosEscolhidos > 10 ? segundosEscolhidos : Number(`0${segundosEscolhidos}`);
    const dataEscolhida = new Date(ano,mes,dia,horaEscolhida,segundosEscolhidos);
    console.log(dataEscolhida)
    const horaAtual = new Date();
    if (dataEscolhida-horaAtual < 0){
        window.alert("Coloque uma data no futuro")
        window.location.reload()
    }
    else{
    let segundos = (dataEscolhida-horaAtual)/1000;
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
    
        return [dias,horas,minutos,segundos]
    }
}
function enviaDados(evento) {
    evento.preventDefault();
    define();
    comecaCronometro();
}
addEventListener('submit',enviaDados);
    // console.log(valores)
    // console.log(dataEscolhida);
function atualizaCronometro(){
    diatexto.textContent = `${define()[0]}`
    horatexto.textContent = `${define()[1]}`
minutotexto.textContent = `${define()[2]}`
segundostexto.textContent   = `${define()[3]}`
}


function comecaCronometro(){
    atualizaCronometro()
    setInterval(atualizaCronometro,1000);
}