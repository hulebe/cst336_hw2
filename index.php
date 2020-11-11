<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Slot Machine</title>
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>     
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js" ></script> 
        <script SRC="js/functions.js"></script>
    </head>
    <body class="text-center">
        <h1 class="jumbotron">Slot Machine</h1>
        
        <div class = "machine">
        
        
        <img src="img/img1.jpeg" class="icons" id="p1">
        <img src="img/img2.jpeg" class="icons" id="p2">
        <img src="img/img3.jpeg" class="icons" id="p3">
        
        <br><br>
        
        <div>
            <label for="betField">Enter bet amount (1-100): </label>
            <input type="number" id="betField" class="betField">
            <br>
            <div id="warning"></div>
            <br>
            <button class="btn btn-outline-success" id="Spin">Spin</button>
            <div id="winnings"></div>
            <div id="total"></div>
        </div>
        
        
        <br><br>
        <div class="rules">
            <p>Rules:</p>
            <ul>
                <li>2 of the same icon, win 2x bet amount</li>
                <li>3 of the same icon, win 5x bet amount</li>
                <li>3 7's, win 10x bet amount</li>
            </ul>
        </div>
        
        </div>
    </body>
</html>