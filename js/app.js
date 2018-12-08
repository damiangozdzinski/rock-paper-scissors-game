// Author: Damian Goździński for Hedgehog Developers. Copyrights 2018

const kamien = document.getElementById("kamien");
const papier = document.getElementById("papier");
const nozyce = document.getElementById("nozyce");
const userScore_out = document.getElementById('userscore');
const compScore_out = document.getElementById('compscore');
const outline = document.getElementById('outline');
const newGame = document.getElementById('newGame');
const color = document.querySelector('.info');
var userScore = 0;
var compScore = 0;

function compChoice(){
    var randomChoice = ['kamien', 'papier', 'nozyce'];
    var randomIndex = Math.floor(Math.random()*3);
    return randomChoice[randomIndex];
}

function wygrana() {
    if(userScore === 5)
    {
        outline.innerHTML = "Wygrałeś grę!";
        color.style.backgroundColor = "#066919";
        userScore = 0;
        compScore = 0;
        userScore_out.innerHTML = userScore;
        compScore_out.innerHTML = compScore;
    }
    else {
        userScore++;
        color.style.backgroundColor = "#066919";
        userScore_out.innerHTML = userScore;        
        outline.innerHTML = "Zdobywasz punkt";
    }
}

function przegrana() {
    if(compScore === 5)
        {
            outline.innerHTML = "Przegrałeś grę!";
            color.style.backgroundColor = "#ac000d";
            userScore = 0;
            compScore = 0;
            userScore_out.innerHTML = userScore;
            compScore_out.innerHTML = compScore;
        }
    else 
        {
            compScore++;
            color.style.backgroundColor = "#ac000d";
            compScore_out.innerHTML = compScore;
            outline.innerHTML = "Tracisz punkt";  
        }
}

function remis() {
    if(userScore === 5)
        {
            color.style.backgroundColor = "#066919";
            outline.innerHTML = "Wygrałeś grę";
            userScore = 0;
            compScore = 0;
            userScore_out.innerHTML = userScore;
            compScore_out.innerHTML = compScore;
        }
    else if (compScore === 5)
        {
            color.style.backgroundColor = "#ac000d";
            outline.innerHTML = "Przegrałeś grę!";
            userScore = 0;
            compScore = 0;
            userScore_out.innerHTML = userScore;
            compScore_out.innerHTML = compScore;
        }
    else
    {
        color.style.backgroundColor = "#000000";
        outline.innerHTML = "Remis";            
    }
        
}

function gra(wybor){
    const compTarget = compChoice();

    switch (wybor+compTarget) {
        case "kamiennozyce":
        case "nozycepapier":
        case "papierkamien":
            wygrana();
            break;
        case "nozycekamien":
        case "papiernozyce":
        case "kamienpapier":
            przegrana();
            break;
        case "kamienkamien":
        case "papierpapier":
        case "nozycenozyce":
            remis();
            break;
    }
}

function resetScore() {
    
    userScore = 0;
    compScore = 0;
    userScore_out.innerHTML = userScore;
    compScore_out.innerHTML = compScore;
    outline.innerHTML = "Zaczynajmy nową grę!";
    color.style.backgroundColor = "#752aed"
}



function main() {
    
    kamien.addEventListener('click', function() {
        gra('kamien');
    });

    papier.addEventListener('click', function() {
        gra('papier');
    });

    nozyce.addEventListener('click', function() {
        gra('nozyce');
    });
    
    newGame.addEventListener('click' , function() {
        resetScore();
    });
    
}
main();

