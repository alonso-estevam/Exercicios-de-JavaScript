var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpite() {
    /* 
    A linha abaixo declara uma variável chamada palpiteUsuario e define seu valor igual ao valor inserido pelo jogador no campo de texto. Nós também rodamos esse valor através do método embutido Number(), apenas para ter certeza de que o valor inserido é um número.
    */
    var palpiteUsuario = Number(campoPalpite.value);
    /*
    O teste abaixo está verificando se a variável contagemPalpites é igual a 1 (isto é, se essa é ou não a primeira tentativa do jogador). Se a condição for verdadeira, nós tornamos o conteúdo do parágrafo de palpites, <p class="palpites"></p> igual a "Palpites anteriores: ". Caso contrário, o texto não é exibido.
    */
    if (contagemPalpites === 1) {
      palpites.textContent = 'Palpites anteriores: ';
    }

    /* 
    A linha abaixo acrescenta o valor atual de palpiteUsuario ao final do parágrafo palpites, mais um espaço em branco para que haja espaçamento entre cada palpite mostrado.
    */ 
    palpites.textContent += palpiteUsuario + ' ';
    
  
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'Parabéns! Você acertou!';
      ultimoResultado.style.backgroundColor = 'green';
      ultimoResultado.style.color = 'white';
      ultimoResultado.style.textAlign = 'center';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.backgroundColor = 'red';
      ultimoResultado.style.color = 'white';
      ultimoResultado.style.textAlign = 'center';
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
  envioPalpite.addEventListener('click', conferirPalpite);
  
  function configFimDeJogo() {
/*
As primeiras duas linhas abaixo desabilitam a entrada de texto do formulário e o clique do botão, definindo a propriedade disabled (desabilitado) de cada um como true (verdadeiro). Isso é necessário, pois se não o fizermos, o usuário poderia submeter mais palpites depois do jogo ter terminado, o que iria bagunçar as coisas.
 */
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;

/* As duas linhas abaixo geram um novo elemento <button>, define o texto de seu rótulo como "Iniciar novo jogo", e o adiciona ao final do nosso HTML existente.*/
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);

/* Essa linha final define um monitor de evento (event listener) em nosso botão, para que quando seja clicado, uma função chamada reiniciarJogo() seja executada.*/
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }


/*Esse longo bloco de código redefine completamente tudo do modo como era no início do jogo, para que o jogador possa jogá-lo novamente. */

  function reiniciarJogo() {
    contagemPalpites = 1;
  
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
  
    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
  
    ultimoResultado.style.backgroundColor = 'white';
  
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }

  