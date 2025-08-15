function bestTeam(player1, player2){
    if(typeof player1 !== "object" || typeof player2!== "object" || player1 === null || player2 ===null){
        return "Invalid";
    }

    if(!("name" in player1 && "foul" in player1 && "cardY" in player1 && "cardR" in player1 && "name" in player2 && "foul" in player2 && "cardY" in player2 && "cardR" in player2)){
        return "Invalid";
    }

    let score1 = player1.foul + player1.cardY + player1.cardR;
    let score2 = player2.foul + player2.cardY + player2.cardR;

    if(score1 < score2){
        return player1.name;
    }
    else if (score2 < score1){
        return player2.name;
    }
    else{
        return "Tie";
    }
    
}


let a = bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 })

console.log(a);