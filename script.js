let pick = ["rock", "paper", "scissors"]

let cpuPick;

let playerPick;

$(".btn").click(function(){
    cpuPick = pick[Math.floor(Math.random()*3)]

    playerPick =  $(this).attr("id");

    result(playerPick, cpuPick);
});

function check(playerPick, cpuPick){
    if ((playerPick === "rock" && cpuPick === "scissors") || (playerPick === "paper" && cpuPick === "rock") || (playerPick === "scissors" && cpuPick === "paper")) {
        player1Won();
    }
    if ((playerPick === "rock" && cpuPick === "paper") || (playerPick === "paper" && cpuPick === "scissors") || (playerPick === "scissors" && cpuPick === "rock")) {
        player2Won();
    }
    if(playerPick === cpuPick){
        draw();
    }
}



// result function
function result(playerPick, cpuPick){
    $("#player1").html(
        "<h2 class='player-name'>Player 1</h2>" +
    
        "<div class='picked'>" +
            "<img src='./images/p1-" + playerPick + ".png' alt='" + playerPick + "' class='picked-img'>" +
        "</div>"
        );
    
    $("#player2").html(
        "<h2 class='player-name'>Player 2</h2>" +
        
        "<div class='picked'>" +
            "<img src='./images/p2-" + cpuPick + ".png' alt='" + cpuPick + "' class='picked-img'>" +
        "</div>"
    );
    
    $(".main-container").append("<div class='again-button'><button type='button'>Again</button></div>");
    
    check(playerPick, cpuPick);
    
    $(".again-button button").click(function(){
        reset();
    });
}

function player1Won() {
    $("#player1").addClass("won");
    $("#player1 > .player-name").addClass("won-text").text("Win");
    $("#player2 > .player-name").text("Lose");
}

function player2Won() {
    $("#player2").addClass("won");
    $("#player2 > .player-name").addClass("won-text").text("Win");
    $("#player1 > .player-name").text("Lose");
}

function draw(){
    $("#player2 > .player-name").text("Draw");
    $("#player1 > .player-name").text("Draw");
}

function reset(playerPick, cpuPick){
    playerPick;
    cpuPick;

    console.log(playerPick, cpuPick);

    $("#player1").removeClass("won");
    $("#player1 > .player-name").removeClass("won-text")

    $("#player2").removeClass("won");
    $("#player2 > .player-name").removeClass("won-text")

    $("#player1").html(
        "<h2 class='player-name'>Player 1</h2>" +
        "<div class='button-container'>" +
            "<div type='button' id='rock' class='btn'>" +
                "<img src='./images/p1-rock.png' alt='rock' class='btn-img'>" +
            "</div>" +
            "<div type='button' id='paper' class='btn'>" +
                "<img src='./images/p1-paper.png' alt='paper' class='btn-img'>" +
            "</div>" +
            "<div type='button' id='scissors' class='btn'>" +
                "<img src='./images/p1-scissors.png' alt='scissors' class='btn-img'>" +
            "</div>" +
        "</div>"
    );
    
    $("#player2").html(
        "<h2 class='player-name'>Player 2</h2>"
    );

    $(".again-button").remove();

    $(".btn").click(function(){
        cpuPick = pick[Math.floor(Math.random()*3)]
    
        playerPick =  $(this).attr("id");
    
        result(playerPick, cpuPick);
    });
}