let myLibrary = [{
    title: "Wingspan",
    creator: "Elizabeth Hargrave",
    time: "40-70 Minutes",
    played: "Played"
},
{
    title: "Clank! Legacy",
    creator: "Andy Clautice, Paul Dennen",
    time: "90-120 Minutes",
    played: "Played"

},
{
    title: "Pandemic",
    creator: "Matt Leacock",
    time: "45 Minutes",
    played: "Played"
},
{
    title: "Race for the Galaxy",
    creator: "Thomas Lehmann",
    time: "30-60 Minutes",
    played: "Played"
}
];



function Game(title, creator, time, played){
    
    this.title = title
    this.creator = creator
    this.time = time
    this.played = played
    
    
}


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
    
});
  /* let newCard = document.createElement("p");
    console.log(newGame)
    newGame.innerText = game;
    document.body.appendChild(newGame);*/
/*const para = document.createElement("p");
para.innerText = "This is a paragraph";

document.body.appendChild(para);*/



