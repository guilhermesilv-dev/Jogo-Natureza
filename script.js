let nomeJogador = "";
let faseAtual = 0;
let travaClique = false;
let fases = [
    {
        pergunta: "Quantos MACACOS você vê ? 🐒🐒🐒 ",
        opcoes: ["2", "5", "3"],
        correta: "3"
    },
    {
        pergunta: "Qual é a cor do lindo PÁSSARO TUCANO que vive nas nossas árvores? ",
        opcoes: ["Azul", "Amarelo e Preto", "Verde"],
        correta: "Amarelo e Preto"
    },
    {
        pergunta: "Ajude o JACARÉ DO PAPO-AMARELO! Onde ele gosta de viver? ",
        opcoes: ["Na Lagoa", "No Deserto", "Na Árvore"],
        correta: "Na Lagoa"
    }
];


function iniciarJogo() {

    nomeJogador = document.getElementById("nome-crianca").value;

    if (nomeJogador === "") {
        nomeJogador = "Amiguinho";
    }

    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("tela-jogo").style.display = "block";

    carregarFase();
}

function carregarFase() {
    
    document.getElementById("fase-texto").innerText = "Fase " + (faseAtual + 1) + " de " + fases.length;
    document.getElementById("pergunta-texto").innerText = fases[faseAtual].pergunta;
    
    let container = document.getElementById("opcoes-container");
    container.innerHTML = "";
    document.getElementById("mensagem-acerto").innerText = "";
    document.getElementById("mensagem-erro").innerText = "";
    

    for (let i = 0; i < fases[faseAtual].opcoes.length; i++) {
        
        let novoBotao = document.createElement("button");
        
     
        novoBotao.innerText = fases[faseAtual].opcoes[i];
        
        novoBotao.onclick = function() {
            verificarResposta(novoBotao.innerText);
        }

        container.appendChild(novoBotao);
    }
    
}

function verificarResposta(respostaClicada) {
    
    if (travaClique === true) {
        return;
    }

    if (respostaClicada === fases[faseAtual].correta) {
        document.getElementById("mensagem-acerto").innerText = "Muito bem, " + nomeJogador + "! Você acertou! ";
        travaClique = true; 
        setTimeout(function() {
            faseAtual = faseAtual + 1;
            travaClique = false;

    if (faseAtual === fases.length) {

        document.getElementById("tela-jogo").style.display = "none";
        document.getElementById("tela-final").style.display = "block";
        
        document.getElementById("mensagem-final").innerText = "Obrigado por ajudar os animais de Brusque, " + nomeJogador + "! Você é um herói da natureza! 🎖️";
    } else {
        carregarFase();
    }
        }, 1300);
    } else {
        document.getElementById("mensagem-erro").innerText = "Quase lá, " + nomeJogador + "! Tente de novo! ";
        setTimeout(function() {
            document.getElementById("mensagem-erro").innerText = "";
        }, 1500);
        return; 
    }
   
    
}

function reiniciarJogo() {
    faseAtual = 0;

    document.getElementById("tela-final").style.display = "none";
    document.getElementById("tela-inicial").style.display = "block";

}