/*let myLibrary = [];

function Game(title, creator, time, played){
    this.title = title
    this.creator = creator
    this.time = time
    this.played = played
}*/

let submit = document.getElementsByClassName("submit")
    submit.addEventListener("submit", function(){
    let newGame = document.createElement("p");
    //let game = [Game.title, Game.creator, Game.time, Game.played]
    newGame.innerText = "THIS SHIT WORKING?";
    document.body.appendChild(newGame);
});


/*const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);*/