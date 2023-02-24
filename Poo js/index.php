<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
     
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
<div class="memory center">
<h1 style="text-align:center">Memory game</h1> </br>
<div class="modal-content" style = "display:none;">
    <div class="modal-header">
      <span class="close" onclick="javascript:window.location.reload()">&times;</span>
    </div>
            <div class="modal-body">
                <p class='gagne'>🥳 🎉 🥳</p>
                    <p> You win !!! </p>
            </div>
</div>

    <div class="buttonStart" style = "display:none;">
        <div class="text" id='start' onclick="javascript:window.location.reload()">Start New Game</div></br>
        
    </div>
        <p class='difficulte'style="text-align:center">Hard = 🥵 </br> Medium = 😢 </br> Easy = 😀 </p>
        <p class='rules' style = "display:none;text-align:center"> You have two minutes !!!</p>

    <div class='container'>
        <div class="emogisHard"  id="button" style = "display:block;">
            <div id="cardsEmogisHard"><span class='iconoBar'>🥵</span> Emojis</div>
        </div>

            <div class="emogisMedium" id="button" style = "display:block;">
                <div  id="cardsEmogisMedium"><span class='iconoBar'>😢</span> Emojis</div>
            </div>

                <div class="emogisEasy" id="button" style = "display:block;">
                    <div  id="cardsEmogisEasy"><span class='iconoBar'>😀</span> Emojis</div>
                </div>
                
                    <div class="fruits" id="button" style = "display:block;">
                        <div  id="cardsFruits"><span class='iconoBar'>😢</span> Fruits</div>
                    </div>

                        <div class="animal" id="button" style = "display:block;">
                            <div  id="cardsAnimal"><span class='iconoBar'>😢</span> Animals</div>
                        </div>

    </div>

    <div class='container'>                
        
                <div class="places" id="button" style = "display:block;">
                    <div  id="cardsPlaces"><span class='iconoBar'> 😀 </span>Places</div>
                </div>
                    <div class="zodiac" id="button" style = "display:block;">
                        <div  id="cardsZodiac"><span class='iconoBar'> 😢</span> Zodiac</div>
                    </div>
                    
                        <div class="transport" id="button" style = "display:block;">
                            <div  id="cardsTransport"><span class='iconoBar'> 🥵</span> Transport</div>
                        </div>

                            <div class="technology" id="button" style = "display:block;">
                                <div  id="cardsTechnology"><span class='iconoBar'> 😢</span> Technology</div>
                            </div>
                            
                            <div class="building" id="button" style = "display:block;">
                        <div  id="cardsBuilding"><span class='iconoBar'> 🥵 </span>Building</div>
                    </div>

                                
                                
        </div>

        

<div class ='telf'>
<div class='temp' style = "display:none;text-align:center">
    <p> Time: 0 mins seconds: 0 sec </p>
</div>

<div class='emogis' style = "display:block;">
    
</div>
<div class="jeux" style = "display:none;">
   <table class='game'>
       
   </table>
</div>
<div class='over' style = "display:none;text-align:center">
    <p class='gameOver'> Game over</p>
    <p> Time's up, game over! </p>
</div>
</div>

</div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script src='script.js'></script>
        </body>
    </body>
</html>