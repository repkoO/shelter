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

function initGame(gameSize, bombCount) {
  const game = [];
  for (let xDirection = 0; xDirection < gameSize; xDirection += 1) {
    const row = [];
    for (let yDirection = 0; yDirection < gameSize; yDirection += 1) {
      const square = document.createElement('div');
      square.classList.add('hidden');
      const tile = {
        square,
        xDirection,
        yDirection,
      };
      row.push(tile);
    }
    game.push(row);
  }
  return game;
} // cоздание массива с элементамиж

const board = initGame(10);

const gameBoard = document.querySelector('.game');

board.forEach((row) => {
  row.forEach((tile) => {
    gameBoard.append(tile.square);
  });
});
