import Paddle from '/src/paddle';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1500;
const GAME_HEIGHT = 730;

ctx.clearRect(0, 0, 1500, 730);


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx)

function gameLoop() {
    ctx.clearRect(0, 0, 1500, 730)
    
}