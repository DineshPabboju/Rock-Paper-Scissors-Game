let user_score = 0;
let comp_score = 0;


const gameOutcome = (userWin,userPicked,compPicked) => {
    
    let msgContent = document.querySelector("#msg-content");
    if(userWin === null){
        drawGame();
    }
    if(userWin){
        user_score += 1;
        let u_score = document.querySelector("#user-score");
        u_score.innerText = user_score;
        msgContent.innerText = `Hey! , You've Won. ${userPicked} beats ${compPicked}`;
        msgContent.style.backgroundColor = "#16a34a";
        console.log("You've Won !");
    }
    else{
        comp_score += 1;
        let c_score = document.querySelector("#comp-score");
        c_score.innerText = comp_score;
        msgContent.innerText = `Oh no! , You've Lost. ${compPicked} beats ${userPicked}`;
        msgContent.style.backgroundColor = "#dc2626";
        console.log("You've Lost!");
    }
}

const drawGame = () => {
    let msgContent = document.querySelector("#msg-content");
    msgContent.innerText = "It was a Draw!";
    msgContent.style.backgroundColor = "#2e1065";
    console.log("Game was a Draw!");
}

const getCompChoice = () => {
    const arr = ["rock","paper","scissors"];
    const random = Math.floor(Math.random()*3);
    return arr[random];
}

const playGame=(userPicked) => {
    console.log(`User Picked = ${userPicked}` );
    const compPicked = getCompChoice();
    console.log(`Computer Picked = ${compPicked}`); 
    let userWin = true;
    if(userPicked === compPicked){
        drawGame();
        return;
    }
    else{
        
        if(userPicked === "rock"){
            // paper or scissors
            userWin = compPicked === "scissors" ? true : false;  
        }
        else if(userPicked === "paper"){
            //rock or scissors
            userWin = compPicked === "rock" ? true : false;
        }
        else{
            // rock or paper
            userWin = compPicked === "paper" ? true : false;
        }
    }

    gameOutcome(userWin,userPicked,compPicked);

};

const picks = document.querySelectorAll(".main-item");
picks.forEach((pick)=>{
    pick.addEventListener("click",() => {
        const userPicked = pick.getAttribute("id");
        playGame(userPicked);
    });
});