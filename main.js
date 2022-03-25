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
            console.log(item.innerText)
            if(item.innerText === "Played"){
                item.innerText = "Unplayed"
            } 
            else if(item.innerText === "Unplayed"){
                console.log(item.innerText);
                item.innerText = "Played"
            }
            
        })
      })};
    

buttonPlayed();

function pushToLibrary(x){
    myLibrary.push(x)
    myLibrary = myLibrary;
}
let newLibrary = []
console.table(myLibrary)
document.querySelector(".submit").addEventListener("click", function(){
    let title = document.querySelector(".title").value;
    let author = document.querySelector(".creator").value;
    let time = document.querySelector(".time").value;
    let played  = "Played"
    console.log(title, author, time, played)
    let newGame = new Game(title, author, time, played)
    pushToLibrary(newGame)
    newLibrary = myLibrary
    console.table(myLibrary)
    console.table(newLibrary)
    alert(myLibrary)

   /* let newCard = document.createElement("p");
    console.log(newGame)
    newGame.innerText = game;
    document.body.appendChild(newGame);*/
});

/*const para = document.createElement("p");
para.innerText = "This is a paragraph";

document.body.appendChild(para);*/



