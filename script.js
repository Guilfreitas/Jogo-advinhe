document.getElementById("form")

var numeroAleatorio= math.floor(math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var envioPalpite = document.querySelector(".envioPalpite");
var campoPalpite = document.querySelector(".campoPalpite");

var contagemPalpites = 1;
var botaoRenicio;

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabens! Voce acertou";
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        configFimDeJogo();

    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
      } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio) {
          baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        } else if(palpiteUsuario > numeroAleatorio) {
          baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
      }
    
      contagemPalpites++;
      campoPalpite.value = '';
      campoPalpite.focus();
    
}

conferirPalpite();
envioPalpite.addEventListener("click", conferirPalpite);