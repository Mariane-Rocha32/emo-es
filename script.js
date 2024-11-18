const caixaprincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A Escola Inspiração quer saber como estão suas emoções! Vamos responder o quiz?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Leia o texto com atenção, se necessário tire uma foto para ler depois!"
            },
            {
                texto: "Sim ",
                afirmacao: "Leia o texto com atenção, se necessário tire uma foto para ler depois!"
            }
        ]
    },
    {
        enunciado: "Qual emoção é mais difícil para você controlar?",
        alternativas: [
            {
                texto: "Alegria.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Tristeza.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Raiva.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Medo.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Nojo.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Ansiedade.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Inveja.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Vergonha.",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            {
                texto: "Tédio",
                afirmacao: "A emoção que é mais difícil para você controlar e expressar de forma saudável, pode estar teatrapalhando ou te favorecendo nas relações pessoais e profissionais. Manter uma vida emocional em equilíbrio pode ser uma tarefa difícil para muitos, mas não é impossível."
            },
            
        ]
    },
    {
        enunciado: "Você costuma sentir vários momentos de alegria no seu dia?",
        alternativas: [
            {
                texto: "Sim, em vários momentos.",
                afirmacao: "Que bom que você sente alegria, ela nos impulsiona para uma vida feliz."
            },
            {
                texto: " Não, raramente sinto.",
                afirmacao: "Não sentir alegria com frequência também faz parte de alguns períodos da vida, mas atenção, esta fase não pode se prolongar, ok"
            }
        ]
    },
    {
        enunciado: "Você consegue lidar bem com a raiva?",
        alternativas: [
            {
                texto: " Sim, consigo.",
                afirmacao: "Sentir raiva todo mundo pode sentir, mas expressar a raiva da forma “certa” é para poucos."
            },
            {
                texto: "Não consigo, acabo explodindo.",
                afirmacao: "Lidar bem com a raiva, realmente pode ser desafiador, quando ela nos domina, podemos prejudicar a si e aos outros."
            }
        ]
    },
    {
        enunciado: "Você costuma se sentir ansioso?",
        alternativas: [
            {
                texto: "Raramente.",
                afirmacao: "Se você não costuma se sentir ansioso com frequência, é um bom sinal, manter o autocontrole pode te favorecer em muitas circunstâncias."
            },
            {
                texto: "Sim, sinto ansiedade com muita frequência.",
                afirmacao: "Se sentir ansioso com frequência pode te atrapalhar em muitos momentos, ok? Se reconhecer e aceitar que não temos o controle de tudo, pode ser o início para uma vida mais harmônica."
            } 
        ]
    },
    {
        enunciado: "Você costuma esconder suas emoções?",
        alternativas: [
            {
                texto: "Não. Eu costumo expressá-las. ",
                afirmacao: "Continue expressando suas emoções, não precisamos carregar ou reprimir elas!"
            },
            {
                texto: "Sim. Costumo esconder o que sinto.",
                afirmacao: "Reprimir emoções não é a melhor saída! Que tal começar a falar com alguém de confiança sobre o que você sente?"
            }
        ]
    },
    {
        enunciado: "Você costuma sentir vergonha?",
        alternativas: [
            {
                texto: "Raramente.",
                afirmacao: "Não sentir vergonha constante pode te favorecer a ser, e viver quem você realmente é, e da forma que te deixa mais feliz"
            },
            {
                texto: "Sim, sinto muita vergonha com facilidade.",
                afirmacao: "Sentir vergonha também faz parte, mas ela não pode te dominar a ponto de te impedir de fazer ou viver o que você deseja."
            } 
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();