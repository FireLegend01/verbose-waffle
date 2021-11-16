import Paddle from '/src/paddle';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, 1500, 730);

ctx.fillStyle = '#f00';
ctx.fillRect(20, 20, 100, 100);

const GAME_WIDTH = 1500;
const GAME_HEIGHT = 730;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx)