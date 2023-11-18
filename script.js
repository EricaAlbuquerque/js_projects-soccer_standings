//colocar oss objetos dentro de uma lista
var times = [
    {
      nome: "Arsenal",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nome: "Man. City",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nome: "H. Tottenham",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nome: "Liverpool",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    },
    {
      nome: "Chelsea",
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0
    }
  ];
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    elementoTabela.innerHTML = "";
  
    var maiorPontuacao = 0; // Variável para armazenar a maior pontuação
    var timeComMaiorPontuacao = times[0]; // Inicializa com o primeiro time da lista
  
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
  
      elementoTabela.innerHTML += `
        <tr>
          <td>${time.nome}</td>
          <td>${time.vitoria}</td>
          <td>${time.empate}</td>
          <td>${time.derrota}</td>
          <td>${time.pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">V</button></td>
          <td><button onClick="adicionarEmpate(${i})">E</button></td>
          <td><button onClick="adicionarDerrota(${i})">D</button></td>
          <td><button onClick="zerarPontuacao(${i})">Zerar</button></td>
        </tr>
      `;
  
      if (time.pontos > maiorPontuacao) {
        maiorPontuacao = time.pontos;
        timeComMaiorPontuacao = time;
      }
    }
  
    var texto = `Maior pontuação é do time: ${timeComMaiorPontuacao.nome}`;
  
  
  function adicionarVitoria(index) {
    times[index].vitoria++;
    times[index].pontos += 3;
    exibirNaTela();
  }
  
  function adicionarEmpate(index) {
    times[index].empate++;
    times[index].pontos++;
    exibirNaTela();
  }
  
  function adicionarDerrota(index) {
    times[index].derrota++;
    exibirNaTela();
  }
  
  function zerarPontuacao(index) {
    times[index].vitoria = 0;
    times[index].empate = 0;
    times[index].derrota = 0;
    times[index].pontos = 0;
    exibirNaTela();
  }