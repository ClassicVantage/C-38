var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var blue, red, white, black,track


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

 function preload(){
  blue=loadImage("../images/car1.png")
  red=loadImage("../images/car2.png")
  black=loadImage("../images/car3.png")
  white=loadImage("../images/car4.png")
  track=loadImage("../images/track.png")

 }


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
