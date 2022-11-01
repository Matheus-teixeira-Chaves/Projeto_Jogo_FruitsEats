let configInicial = true;
let pontos = 0;
let vidas = 3;
let fimDeJogo = false;

const audio = new Audio ("/audios/musica_tema.mp4");
const audioFruta = new Audio ("/audios/acertando.mp4");
const audioErrando = new Audio ("/audios/errando.mp4");

var iniciandoIntervalo;
var limpandoTela;

let time = 2000,
    currentImage = 0
    images = document.querySelectorAll("#tela_do_Jogo")
    max = images.lenght;


function configuracaoInicial () {
    let nome = window.prompt("Digite o seu nome:");
    document.getElementById("nome_jogador").innerText = nome;
    document.getElementById("pontos").innerText = pontos;
    document.getElementById("vidas").innerText = vidas;
    configInicial = false;
}

function adicionarPontos (x) {
    pontos += 10;
    document.getElementById("pontos").innerText = pontos;
    x.style = "visibility: hidden";
    audioFruta.play();
}

function tirarVidas(x) {
    vidas--;
    document.getElementById("vidas").innerText = vidas;
    x.style = "visibility: hidden";
    if (vidas <= 0) {fimDeJogo = true};
    audioErrando.play();
}

/*function playGame () {
    setInterval ( () => {
        console.log("jogo rodando");
    }, time)
}*/

function stopGame () {
    document.getElementById("tela_do_Jogo").style.display = "none";
    document.getElementById("txt_fim_jogo").innerHTML = "<P> FIM DE JOGO! </P>";
    setInterval ( () => { audio.pause() }, 0); 
}

function mostrarImagens () {
    if (!fimDeJogo) {

        if (configInicial) {
            configuracaoInicial();
            configInicial = false;
        }
        aleatorio = Math.floor (Math.random () * 11);
        document.getElementsByClassName('elementos')[aleatorio].setAttribute("style", "visibility: visible");
        document.getElementsByClassName('containerImage')[aleatorio].setAttribute("style", "opacity: 1");

            var iniciandoIntervalo = setInterval ( () => {
                if (!fimDeJogo) {
                    audio.play();
                    aleatorio = Math.floor (Math.random () * 11);
                    document.getElementsByClassName('containerImage')[aleatorio].setAttribute("style", "opacity: 1");
                    document.getElementsByClassName('elementos')[aleatorio].setAttribute("style", "visibility: visible");
                }
                else {
                    audio.pause();
                    document.getElementById("tela_do_Jogo").style.display = "none";
                    document.getElementById("txt_fim_jogo").innerHTML = "<P> FIM DE JOGO! </P>";
                }
            }, 500);

            var limpandoTela = setInterval ( () => {
                if (!fimDeJogo) {
                    document.getElementsByClassName('elementos')[aleatorio].setAttribute("style", "visibility: hidden");
                }
            }, 1500); 
    } 
    else {
        document.getElementsByClassName('containerImage').setAttribute("style", "opacity: 0");
        document.getElementsByClassName('elementos').setAttribute("style", "visibility: hidden");
    }
}


function mudarCor (btn) {
    btn.setAttribute("style", "background-color: #95CEC5")
}

function resetarCor (btn) {
    btn.setAttribute("style", "background-color: #8DBE24")
}