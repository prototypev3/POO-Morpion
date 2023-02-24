class Game{
    constructor(cards){
        this.cards = cards
        this.emojis = []
        this.ths = document.querySelectorAll('th');
        this.modal = document.querySelector('.modal-content');
    }

    verification(img1, img2){
        if(img1.getAttribute('data-icon') === img2.getAttribute('data-icon')){ 
            this.caseCard(img1, img2)
            this.showModal()

        }else {
            setTimeout(() => {
                
                this.resetCard(img1,img2)
            }, 500);
        }
        this.emojis = []
        
    }

    initGame(){
        this.initEventListener();
        this.cards =  this.cards.sort(() => Math.random() - 0.5)
        
        for (let i = 0; i <  this.cards.length; i++) {
            this.ths[i].setAttribute('data-icon', this.cards[i])
            
        }
        
    }
    initEventListener(){
        
        this.ths.forEach((th)=>{
            th.addEventListener('click',function(event){
                if(event.target.getAttribute('id')=== 'img'){
                        game.play(event.target)
                }
                
            })
        })
        
        
    }

    play(th){
       
        this.emojis.push(th)
        th.innerHTML = th.getAttribute('data-icon') 
        th.style.pointerEvents = 'none'
        
        if( this.emojis.length === 2){
            if( this.emojis[0] &&  this.emojis[1]){
                game.verification( this.emojis[0], this.emojis[1]);
            }
        }
    }

    caseCard(th1, th2){
        th1.id='select'
        th2.id='select'

    }

    resetCard(th1, th2){
        th1.innerHTML = '?'
        th2.innerHTML = '?'
        th1.style.pointerEvents = 'auto'
        th2.style.pointerEvents = 'auto'
    }

    restartGame(){
        this.ths.forEach(th => {
            th.id = 'img'
            th.innerHTML = '?'
        });
    }
    
    showModal(){
        this.selected = document.querySelectorAll('#select')
     if( this.selected.length === this.cards.length){
        this.modal.style.display="block" 
     }    
 }
  

    }
 

var cardsEmogisEasy = [
    '&#128525;','&#128525;',
	'&#128561;','&#128561;',
	'&#128564;','&#128564;',
	'&#128520;','&#128520;',
	'&#128545;','&#128545;',
	'&#129313;','&#129313;',   
];

var cardsEmogisMedium = [
    '&#128525;','&#128525;',
	'&#128561;','&#128561;',
	'&#128564;','&#128564;',
	'&#128520;','&#128520;',
	'&#128545;','&#128545;',
	'&#129313;','&#129313;',
    '&#128519', '&#128519',
    '&#128523', '&#128523',
    '&#128526', '&#128526',
    '&#128531', '&#128531',
    '&#128587', '&#128587',
    '&#128540', '&#128540',   
];

var cardsEmogisHard = [
    '&#128525;','&#128525;','&#128561;','&#128561;','&#128564;','&#128564;',
	'&#128520;','&#128520;','&#128545;','&#128545;','&#129313;','&#129313;', 
	'&#128519', '&#128519', '&#128523', '&#128523','&#128526', '&#128526',
	'&#128531', '&#128531', '&#128548', '&#128548', '&#128570', '&#128570',
	'&#128585', '&#128585', '&#128587', '&#128587','&#128540', '&#128540',     
];

var cardsBuilding = [
    '🏢' , '🏢', '🏚️', '🏚️', '🏠', '🏠', '🏣', '🏣', '🏤', '🏤','🏥', '🏥', '🏦', '🏦', 
    '🏨', '🏨', '🏪', '🏪', '🏫', '🏫', '🏬', '🏬', '🏭', '🏭', '🏯', '🏯', '🏰', '🏰',
    '⛪', '⛪', '🏘️', '🏘️', '🏛️', '🏛️', '🏗️', '🏗️'   
]

var cardsAnimal = [
    '😺', '😺', '🐵', '🐵', '🐒', '🐒', '🦍', '🦍', '🐕', '🐕', '🐩', '🐩', '🐺', '🐺',
    '🦊', '🦊', '🦝', '🦝', '🦁', '🦁', '🐴', '🐴', '🦄', '🦄'
]

var cardsTransport = [
  '🚂', '🚂', '🚃', '🚃', '🚄', '🚄', '🚉', '🚉', '🚆', '🚆', '🚍', '🚍', '🚎', '🚎',
  '🚒', '🚒', '🚓', '🚓',  '🚕', '🚕', '🚗', '🚗', '🚙', '🚙', '🚚', '🚚','🚛', '🚛', '🚇', '🚇' 
]

var cardsZodiac = [
    '♈', '♈', '♉', '♉', '♊', '♊', '♋', '♋', '♌', '♌', '♍', '♍', '♎', '♎',
    '♏', '♏', '♐', '♐', '♑' , '♑', '♒', '♒', '♓', '♓'
]

var cardsTechnology = [
    '📱', '📱', '☎️', '☎️', '📞', '📞', '📠', '📠', '💻', '💻', '📺', '📺',  
    '⌨️', '⌨️', '🖲️', '🖲️', '💽', '💽', '💾', '💾', '💿', '💿', '🖥️', '🖥️'
]

var cardsFruits = [
    '🥝', '🥝', '🍇', '🍇', '🍈', '🍈', '🍉', '🍉', '🍍', '🍍', '🍎', '🍎',
    '🍏', '🍏', '🍐', '🍐', '🍒', '🍒', '🍓', '🍓', '🥥', '🥥', '🥑', '🥑'
]

var cardsPlaces = [
    '🏖️', '🏖️','🌁', '🌁', '⛰️', '⛰️', '🗻', '🗻', '🏔️', '🏔️', '🌄', '🌄'    
]
/* mes variables */
const time = document.querySelector(".temp");
let game;
let minutes = 0;
let seconds = 0; 
let temps;

const jeux = document.querySelector('.jeux');
const icon = document.querySelector('.emogis');
const over = document.querySelector('.over');
const difficulte = document.querySelector('.difficulte');
const table = document.querySelector('.game');
let start = document.querySelector('.buttonStart');
let emogisHard = document.querySelector('#cardsEmogisHard');
let emogisEasy = document.querySelector('#cardsEmogisEasy');
let emogisMedium = document.querySelector('#cardsEmogisMedium');
let building = document.querySelector ('#cardsBuilding')
let animal = document.querySelector ('#cardsAnimal')
let transport = document.querySelector ('#cardsTransport')
let zodiac = document.querySelector ('#cardsZodiac')
let technology = document.querySelector('#cardsTechnology')
let fruits = document.querySelector('#cardsFruits')
let places = document.querySelector('#cardsPlaces')
let startGames = document.querySelectorAll('#button');
let emogisHardDiv = document.querySelector('.emogisHard');
let emogisEasyDiv = document.querySelector('.emogisEasy');
let emogisMediumDiv = document.querySelector('.emogisMedium');
let buildingDiv = document.querySelector ('.building');
let animalDiv = document.querySelector ('.animal');
let transportDiv = document.querySelector ('.transport');
let zodiacDiv = document.querySelector ('.zodiac');
let technologyDiv = document.querySelector ('.technology')
let fruitsDiv = document.querySelector ('.fruits')
let placesDiv = document.querySelector ('.places')
let modalClose = document.getElementsByClassName("close");
const rules = document.querySelector('.rules');
var emogis = [];
let img1;
let img2;

startGames.forEach((startGame)=>{
    startGame.addEventListener('click',function(event){
        numero = event.target.getAttribute('id')
           difficulteCase(numero) 
           
          
        })
        
    })

function difficulteCase(numero){
    let difficulte; 
        switch(numero){
            case 'cardsEmogisHard':
                difficulte = cardsEmogisHard;
                break; 
        
            case 'cardsEmogisMedium':
                difficulte = cardsEmogisMedium;
                break; 
            
            case 'cardsEmogisEasy':
                difficulte = cardsEmogisEasy;
                break; 
            
            case 'cardsBuilding':
                difficulte = cardsBuilding;
                break; 
            
            case 'cardsAnimal':
                difficulte = cardsAnimal;
                break; 
            
            case 'cardsTransport':
                difficulte = cardsTransport;
                break; 
            
            case 'cardsZodiac':
                difficulte = cardsZodiac;
                break; 
            
            case 'cardsTechnology':
                difficulte = cardsTechnology;
                break; 
            
            case 'cardsFruits':
                difficulte = cardsFruits;
                break;
            
            case 'cardsPlaces':
                difficulte = cardsPlaces;
                break;
        }
        rules.style.display = "block"
        genera_tabla(difficulte)
        depart(difficulte, numero) 
}

function depart(iconos, niveau){
    game = new Game(iconos)
    game.initGame()
    minutes = 0
    secundes = 0
    afficherGame(niveau);
    temp(); 

    if (verificationRestart()){
        game.restartGame()
        cacheOver()  
    }
    
}

function afficherGame(niveau){
    if(getComputedStyle(jeux).display != "block"){
            jeux.style.display ="block"
            icon.style.display = "none"
            emogisHardDiv.style.display="none"
            emogisEasyDiv.style.display="none"
            emogisMediumDiv.style.display="none"
            buildingDiv.style.display="none"
            animalDiv.style.display = "none"
            transportDiv.style.display = "none"
            zodiacDiv.style.display = "none"
            technologyDiv.style.display = "none"
            fruitsDiv.style.display = "none"
            placesDiv.style.display = "none"
            difficulte.style.display = "none"
            start.style.display = 'block'

            switch(niveau){
                case 'cardsEmogisHard':
                    emogisHard.innerHTML='restart the game'
                    break; 
                
                case 'cardsEmogisMedium':
                    emogisMedium.innerHTML='restart the game'
                    break; 
                
                case 'cardsEmogisEasy':
                    emogisEasy.innerHTML='restart the game'
                    break; 
                
                case 'cardsBuilding':
                    building.innerHTML='restart the game'
                    break; 

                case 'cardsAnimal':
                    animal.innerHTML='restart the game'
                    break;

                case 'cardsTransport':
                    transport.innerHTML='restart the game'
                    break; 

                case 'cardsZodiac':
                    zodiac.innerHTML='restart the game'
                    break; 
                
                case 'cardsTechnology':
                    technology.innerHTML='restart the game'
                    break; 

                case 'cardsFruits':
                    fruits.innerHTML='restart the game'
                    break; 
                
                case 'cardsPlaces':
                    places.innerHTML='restart the game'
                    break; 
            }
            
        }
}

function cacheOver(){
     time.style.display = "block"
    over.style.display = "none"
}

function temp(){
	 temps = setInterval(function() {
		seconds++;
			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}
        if (minutes === 2){
            let modal = document.querySelector('.modal-content');
            if(modal.style.display === "none")
            gameover(temps) 
        }
		time.innerHTML = "<div class='tempsActuel'><p> ⏳ Time: " + minutes + " mins " + seconds + " sec </p> </div>" ;
	}, 1000);  
}

function verificationRestart(){
    if(emogisHard.innerText ==='restart the game'){
        return true
        }
            else if(emogisMedium.innerText ==='restart the game'){
                return true

                } else if(emogisEasy.innerText ==='restart the game'){
                    return true

                        }else if(building.innerText ==='restart the game'){
                            return true 

                        }else if(animal.innerText ==='restart the game'){
                            return true 
                            
                            }else if(transport.innerText ==='restart the game'){
                                return true

                                }else if(zodiac.innerText ==='restart the game'){
                                    return true
                                    
                                    }else if(technology.innerText ==='restart the game'){
                                        return true
                                        
                                        }else if(fruits.innerText ==='restart the game'){
                                            return true
                                            
                                            }else if(places.innerText ==='restart the game'){
                                                return true
                                            
                                            }else{
                                            return false
            
        } 
}


function displayButtom(){
    
    if(emogisHard.innerText ==='restart the game'){
    emogisHardDiv.style.display = 'block'
    }
        else if(emogisMedium.innerText ==='restart the game'){
            emogisMediumDiv.style.display ='block'
    }   
            else if(building.innerText ==='restart the game'){
                buildingDiv.style.display ='block'

                }else if(animal.innerText ==='restart the game'){
                    animalDiv.style.display ='block'

                }else if(transport.innerText ==='restart the game'){
                    transportDiv.style.display ='block'
                    
                    }else if(zodiac.innerText ==='restart the game'){
                        zodiacDiv.style.display ='block'
                        
                        }else if(technology.innerText ==='restart the game'){
                            technologyDiv.style.display ='block'
                            
                            }else if(fruits.innerText ==='restart the game'){
                                fruitsDiv.style.display ='block'
                                
                                }else if(places.innerText ==='restart the game'){
                                    placesDiv.style.display ='block'

                                    }else{
                                    emogisEasyDiv.style.display ='block'
                
        
    }
}

function gameover(temps){
    jeux.style.display ="none"
    over.style.display = "block"
    time.style.display = "none"
    rules.style.display = "none"
    displayButtom()
    minutes = 0
    secundes = 0
    clearInterval(temps) 
}

function genera_tabla(numero) {
     
    table.innerHTML= "";
      var file = document.createElement("tr");
        file.classList.add('row', 'center')
      for (var j = 0; j < numero.length; j++) {
        
        var celda = document.createElement("th");
        var textoCelda = document.createTextNode("?");
        celda.classList.add('col','s6','m4', 'l2', 'center-align')
        celda.appendChild(textoCelda);
        file.appendChild(celda);
        celda.setAttribute("id", "img");
      }
      table.appendChild(file);
  }

  


console.log('memorygame')
 