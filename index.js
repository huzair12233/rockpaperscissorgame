
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > h2");
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
let userscore=0;
let compscore=0;


function lettertoword(letter){
if(letter === "r"){
    return "Rock";
}
if(letter === "p"){
    return "Paper";
}
else{
    return "Scissor"
}
}

function getComputerchoice(){
const choice = ["r","p","s"];
const randomNumber = Math.floor(Math.random() * 3);
return choice[randomNumber];
}


function win(Userchoice , computerChoice){
    userscore ++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = lettertoword(Userchoice)  + " Beats " + lettertoword(computerChoice)  + " You Win ! ";

}

function lose(Userchoice , computerChoice){
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = lettertoword(Userchoice)  + " loses to " + lettertoword(computerChoice)  +" You lose ! ";
}

function draw(Userchoice , computerChoice){
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_div.innerHTML = lettertoword(Userchoice)  + " equal to " + lettertoword(computerChoice)  +" Its  a draw ! ";
}

function game(Userchoice){
    const computerChoice = getComputerchoice();
    switch(Userchoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(Userchoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(Userchoice , computerChoice);
            break;

        case "ss":
        case "rr":
        case "pp":
            draw(Userchoice , computerChoice);
            break;
        

    }
}

function main(){

    rock.addEventListener("click",function(){
        game("r");
    });
    
    paper.addEventListener("click",function(){
        game("p");
    });
    
    scissor.addEventListener("click",function(){
        game("s");
    });
}
main();