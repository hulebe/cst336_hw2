$(document).ready(function() {
    
    // variables
    var winnings = 0;
    var total = 0;
    var bet = 0;
    var slotArray = ["cherry", "seven", "bar"];
    
    $("button").on("click", spin); 
    
    function spin() {
        bet = $("#betField").val();
        let slots = 3;
        
        if (bet < 1 || bet > 100){
            $("#warning").text("Invalid bet");
        }
        
        let s1 = Math.floor(Math.random() * slots) + 1;
        let s2 = Math.floor(Math.random() * slots) + 1;
        let s3 = Math.floor(Math.random() * slots) + 1;
        
        $("#p1").attr("src", `img/img${s1}.jpeg`);
        $("#p2").attr("src", `img/img${s2}.jpeg`);
        $("#p3").attr("src", `img/img${s3}.jpeg`);  
        
        if (s1 == s2 && s1 == s3) {
            bet = bet * 10;
            total += bet;
            $("#winnings").html("Congrats, you trippled your bet: " + bet);
            $("#total").html("Total winnings: " + total);
        } else if (s1 == s2 || s2 == s3 || s3 == s1) {
            bet = bet * 5;
            total += bet;
            $("#winnings").html("Congrats, you doubled your bet: " + bet);
            $("#total").html("Total winnings: " + total);
        } else {
            $("#winnings").html("Don't give up");
        }
        
    }
    
})