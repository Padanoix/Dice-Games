//btn rules = montre les règles du jeu //
document.querySelector('.btn-rules').addEventListener('click', rules);

function rules(){
    swal({
        title: "Rules!",
        text: "2 joueurs s\'affrontent\nChaque joueur a un score temporaire et un score global\nA chaque tour le joueur a son score initialisé à 0 et peut lancer un dé autant de fois qu\'il le souhaite\nLe résultat de chaque jet est ajouté au score temporaire\nCe sera au tour de l\'autre si le joueur obtient un 1\nPendant son tour le joueur peut décider à tout moment de Cliquez sur l option Hold qui permet de sauvegarder ces points\nLe premier joueur à atteindre 100 points au global remporte la partie\n",
        icon: "info",
    });
}


//btn new = re-initialise la partie  => reset score à zero//
document.querySelector('.btn-new').addEventListener('click',party);

function party(){
    console.log("party")
}

//btn roll = fait rouler le dé//
document.querySelector('.btn-roll').addEventListener('click',roll);

function roll(){
    console.log("roll")
}

//btn hold = sauvegarde le score//
document.querySelector('.btn-hold').addEventListener('click',hold);

function hold(){
    console.log("hold")
}

