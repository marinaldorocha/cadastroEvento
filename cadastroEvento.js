let nomeEvento = "Evento1";
let dataAtual = new Date();
let dataEvento = new Date(2021, 11, 09);
let participante = "Marinaldo";
let participantes = ["Maria","José","Mateus","Marcos","Rebeca","Francisco"];
let palestrantes = ["Cleiton"];

let idade = 19;

if (dataEvento > dataAtual) {
    console.log( "Evento Permitido")
} else {
   console.log("Data Invalida") 
}

if (participantes.length < 100){
    if (idade >= 18) {
        participantes.push(participante);
        console.log("Cadastramento Concluido com Sucesso.")
    } else {
        console.log("idade Invalida, Cadastro não permitido")
    }    
} else {
    console.log("Cadastramento não permitido, Limite atingido")
}

let dia = String(dataEvento.getDate()).padStart(2, '0');
let mes = String(dataEvento.getMonth() + 1).padStart(2, '0');
let ano = dataEvento.getFullYear();



console.log("Nome do Evento: " + nomeEvento);
console.log("Data do Evento: " + dia + "/" + mes + "/" + ano);
console.log("Participantes do Evento: "+ participantes);
console.log("Palestrante do Evento: " + palestrantes);




