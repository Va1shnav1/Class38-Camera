var form, game, player;
var database;
var player, form, game;
var GS = 0;
var pCount = 0;
var allPlayers ;
var p1, p2;
var cars;
function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}
function draw(){
    //background(255);
    if(pCount===2){
        game.updateState(1);
    }
   if(GS===1){
       clear();
       game.play();
   }
}