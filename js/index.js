let order = [];
let clickedOrder = []; 
let score = 0;

const blue = document.querySelector('.azul');
const red = document.querySelector('.vermelho');
const green = document.querySelector('.verde');
const yellow = document.querySelector('.amarelo');

//funcao para criar ordem aleatoria de cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i + 1));
  }
}

//funcao para acender a proxima cor
let lightColor = (element, number) => {
  number = number * 300;

  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  })
}

//funcao para checar se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
    nextLevel();
  }
}

//funcao para o clique do usuário
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
  if(color == 0) {
    return green;
  } else if(color == 1) {
    return red;
  } else if(color == 2) {
    return yellow;
  } else if(color == 3) {
    return blue;
  }
}

//funcao para o proximo nivel do jogo
let nextLevel = () => {
  score++;
  shuffleOrder();
}

//funcao para quando perder o jogo
let lose = () => {
  alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
  order = [];
  clickedOrder = [];

  playGame();
}

//funcao de inicio do jogo
let playGame = () => {
  alert('Bem vindo! Começando novo jogo...')
  score = 0;

  nextLevel();
}

//eventos de click para cada cor
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();