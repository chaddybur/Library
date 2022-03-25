let myLibrary = [
    
];
    function makeNew(){
    myLibrary.forEach(element => {

        const newCard = document.createElement("div");
        newCard.className = ("game")
        //const image = document.createElement("img")
        //image.className = "image"
        //image.src = ""
        const titles = document.createElement("h3");
        titles.innerText = element.title;
        const authors = document.createElement("h3")
        authors.innerText = element.creator;
        const times = document.createElement("h3")
        times.innerText = element.time
        playButton = document.createElement("div")
        playButton.innerText = "Played"
        playButton.className = "played"
        console.log(playButton.className)
        //newCard.appendChild(image)
        newCard.appendChild(titles)
        newCard.appendChild(authors)
        newCard.appendChild(times)
        newCard.appendChild(playButton)

        const grid = document.querySelector("#game-container");
        grid.appendChild(newCard)
        buttonPlayed();

    })}
        /*<div class = "game">
            <div class = "image"><img src="race.jpg" alt=""></div>
            <h3>Race for the Galaxy</h3>
            <h3>Thomas Lehmann</h3>
            <h3>30-60 minutes</h3>
            <div class = "played">Played</div>
        </div>*/
 /* let newCard = document.createElement("p");
    console.log(newGame)
    newGame.innerText = game;
    document.body.appendChild(newGame);*/
/*const para = document.createElement("p");
para.innerText = "This is a paragraph";

document.body.appendChild(para);*/


function Game(title, creator, time, played){
    
    this.title = title
    this.creator = creator
    this.time = time
    this.played = played
    
    
}




function pushToLibrary(x){
    myLibrary.push(x)
}

let newGame
document.querySelector(".submit").addEventListener("click", function(){
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".creator").value;
    let time = document.querySelector(".time").value;
    let played  = "Played"
    newGame = new Game(title, author, time, played)
    pushToLibrary(newGame)

    //console.table(myLibrary)
    //alert("pause")
    document.querySelector(".title").value = ""
    document.querySelector(".creator").value = ""
    document.querySelector(".time").value = ""
    //event.preventDefault();
    document.querySelector(".submit").style = "background-color: blue"

    makeNew();
    document.querySelector(".submit").style = "background-color: #1C0118"

    
});
  /* let newCard = document.createElement("p");
    console.log(newGame)
    newGame.innerText = game;
    document.body.appendChild(newGame);*/
/*const para = document.createElement("p");
para.innerText = "This is a paragraph";

document.body.appendChild(para);*/

function buttonPlayed(){
    document.querySelectorAll('.played').forEach(item => {
        item.addEventListener('click', event => {
            if(item.innerText === "Played"){
                item.innerText = "Unplayed"
                item.style = "background-color: #C17C74; color:#1C0118"
            } 
            else if(item.innerText === "Unplayed"){
                item.innerText = "Played"
                item.style = "color: #DDC9B4; background-color: #370926"
            }   
        })
      })};
    

buttonPlayed();

