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
        myLibrary.pop(element)

        playButton.addEventListener('click', event => {
            if(playButton.innerText === "Played"){
                playButton.innerText = "Unplayed"
                playButton.style = "background-color: #C17C74; color:#1C0118"
            } 
            else if(playButton.innerText === "Unplayed"){
                playButton.innerText = "Played"
                playButton.style = "color: #DDC9B4; background-color: #370926"
            }   
        })
      

    })}

    class Game{
    constructor(title, creator, time, played){
    this.title = title
    this.creator = creator
    this.time = time
    this.played = played
}
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

    document.querySelector(".title").value = ""
    document.querySelector(".creator").value = ""
    document.querySelector(".time").value = ""
    document.querySelector(".submit").style = "background-color: blue"

    makeNew();
    document.querySelector(".submit").style = "background-color: #1C0118"

});
 


