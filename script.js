//déclaration des variables utiles//
var score1 = 0;
var score2 = 0;
var roundscore1 = 0;
var roundscore2 = 0;
const player1 = 0;
const player2 = 1;
var activeplayer = 0;

//btn rules = montre les règles du jeu //
document.querySelector('.btn-rules').addEventListener('click', rules);

function rules(){
    swal({
        title: "Règles!",
        text: "2 joueurs s\'affrontent\nChaque joueur a un score temporaire et un score global\nA chaque tour le joueur a son score initialisé à 0 et peut lancer un dé autant de fois qu\'il le souhaite\nLe résultat de chaque jet est ajouté au score temporaire\nCe sera au tour de l\'autre si le joueur obtient un 1\nPendant son tour le joueur peut décider à tout moment de Cliquez sur l option Hold qui permet de sauvegarder ces points\nLe premier joueur à atteindre 100 points au global remporte la partie\n",
        icon: "info",
    });
}

//btn new = re-initialise la partie  => reset score à zero//
document.querySelector('.btn-new').addEventListener('click',party);

function party(){
    location.reload();
}

//btn roll = fait rouler le dé//
document.querySelector('.btn-roll').addEventListener('click',roll);

function roll(){
    //roll//
    var dice = Math.floor(Math.random()*6) + 1;
    console.log(dice)

    //score//
    var diceface = document.querySelector('.dice');
    diceface.style.display = 'block';
    diceface.src = 'image/dice-' + dice + '.png';

    //add current score//
    if (dice !== 1) {
        if(activeplayer === 1){
            roundscore2 += dice;
            document.getElementById('PCS2').textContent = roundscore2;}
        if(activeplayer === 0){
            roundscore1 += dice;
            document.getElementById('PCS1').textContent = roundscore1;}
    }
    else {
        nextplayer();
    }  
}

//btn hold = sauvegarde le score//
document.querySelector('.btn-hold').addEventListener('click',hold);

function hold(){
    if(activeplayer === 0){
       score1 += roundscore1;
       document.getElementById('PS1').textContent = score1;     
    }
    if(activeplayer === 1){
        score2 += roundscore2;
        document.getElementById('PS2').textContent = score2;
    }
        if(score1 >= 100){
            document.getElementById('Pn1').textContent = 'Winner!';
            document.getElementById('Pn2').textContent = 'Looser!';
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('Pn1').classList.add('winner');
            document.getElementById('Pn1').classList.add('active');    
        }
        if(score2 >= 100){
            document.getElementById('Pn2').textContent = 'Winner!';
            document.getElementById('Pn1').textContent = 'Looser!';
            document.querySelector('.dice').style.display = 'none';
            document.getElementById('Pn2').classList.add('winner');
            document.getElementById('Pn2').classList.remove('active');
        }
        else{
        nextplayer();
        }
}

//nextplayer => change le player//
function nextplayer(){
    document.getElementById('PCS1').textContent = '0';
    document.getElementById('PCS2').textContent = '0';
    document.querySelector('.dice').style.display = 'none';

    if(activeplayer === 0){
        document.querySelector('.P2-board').classList.toggle('active');
        document.querySelector('.P1-board').classList.remove('active');
        activeplayer = player2
        roundscore1 = 0
    }
    else {
        document.querySelector('.P1-board').classList.toggle('active');
        document.querySelector('.P2-board').classList.remove('active');
        activeplayer = player1
        roundscore2 = 0
    }
}