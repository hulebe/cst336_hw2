$(document).ready(function() {
    /*global $*/
    
    // variables
    var winnings = 0;
    var total = 0;
    var bet = 0;
    var count = 0;
    var tripled = 0
    var doubled=0;
    var slots = ["cherry", "seven", "bar"];
    
    $("button").on("click", spin); 
    
    function spin() {
        bet = $("#betField").val();
        
        if (bet < 1 || bet > 100){
            return;
        }

        let s1 = Math.floor(Math.random() * slots.length) + 1;
        let s2 = Math.floor(Math.random() * slots.length) + 1;
        let s3 = Math.floor(Math.random() * slots.length) + 1;
        
        $("#p1").attr("src", `img/img${s1}.jpeg`);
        $("#p2").attr("src", `img/img${s2}.jpeg`);
        $("#p3").attr("src", `img/img${s3}.jpeg`);  
        
        if (s1 == s2 && s1 == s3) {
            bet = bet * 10;
            total += bet;
            tripled++;
            winnings++;
            winner();
        } else if (s1 == s2 || s2 == s3 || s3 == s1) {
            bet = bet * 5;
            total += bet;
            doubled++;
            winnings++;
            smallWin();
 
        } else {
            loser();
        }
        count++;
        
        $("#win1").html("You've doubled your money " + tripled + " time(s).");
        $("#win2").html("You've doubled your money " + doubled + " time(s).");
        $("#games").html("You've gotten lucky " + winnings + "/" + count + " time(s).");
    }
    
    function winner() {
        $("#winnings").html("Congrats, you tripled your bet: $" + bet);
        $("#total").html("Total winnings: " + total);
    } 

    function smallWin() {
        $("#winnings").html("Congrats, you doubled your bet: $" + bet);
        $("#total").html("Total winnings: " + total);
    }
    
    function loser() {
        $("#winnings").html("Don't give up, keep spending your money!");
    }
    
    
})