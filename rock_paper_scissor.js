let userscore=0;
let compscore=0;

let userscorepara=document.querySelector("#user-score");
let compscorepara=document.querySelector("#comp-score")


const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg")
const compgenchoice=()=>{
    let option=["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3);
    return option[index];
}

let drawgame=()=>{
    console.log("Draw Game");
    msg.innerText="Draw Game ! Play again "
}

let showwin=(userwin)=>{
    if(userwin){
        console.log("you win");
        msg.innerText="you win !"
        
        userscore++;
        userscorepara.innerText=userscore;
    }
    else{
        console.log("you lose");
        msg.innerText="you lose !";
        compscore++;
        compscorepara.innerText=compscore;
    }
}

const playgame=(userchoice)=>{
    console.log("your choice is : ", userchoice)
    let compchoice=compgenchoice();
    console.log("computer choice is : ", compchoice)

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            //paper scissor
            userwin= compchoice==="scissor"? true : false ;
        }
        else if(userchoice==="paper")
        {
            //rock scissor
            userwin=compchoice==="rock"? true:false;
        }
        else
        {
            //rock paper
            userwin=compchoice==="paper"?true:false;
        }
        showwin(userwin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})