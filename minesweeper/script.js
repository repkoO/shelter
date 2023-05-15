const BODY = document.body;
const mainPage = document.createElement('div');
const TITLE = document.createElement('h1');
const GAME = document.createElement('div');
const resetGameButton = document.createElement('button');

function init() {
  mainPage.classList.add('container');
  BODY.insertAdjacentElement('afterbegin', mainPage);
  TITLE.textContent = 'Minesweaper';
  GAME.classList.add('game');
  mainPage.append(TITLE);
  mainPage.append(GAME);
  mainPage.append(resetGameButton);
  resetGameButton.classList.add('new-game__button');
  resetGameButton.innerHTML = 'Новая игра';
}
init();

function initGame(width, heigth, bombscount) {
  const mainGame = document.querySelector('.game');
  const cells = width * heigth;
  mainGame.innerHTML = '<button></button>'.repeat(cells);
}

initGame(10, 10, 5);
