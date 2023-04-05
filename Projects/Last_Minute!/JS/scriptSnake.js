function snakePopUp() { //Automatischer Aufruf 
    document.getElementById("snakeModalDialog").style.visibility = 'visible';
    //Soll Fenster öffnen wenn das Buch gezogen wird 
    setup();
    draw();
}

function closeSnakePopUp() { //In js genutzt
    document.getElementById("snakeModalDialog").style.visibility = 'hidden';
    //Soll das Fenster schließen wenn das Spiel gewonnen ist
}

function pause() { //In html genutzt
    noLoop(); //Wenn Pause ist soll nichts passieren auf dem Spielfeld, einfrieren
}

function resume() { //In html genutzt
    loop(); //Wenn Pause weg, soll wieder normal weiterlaufen
}

var snake;
var scl = 20; //Breite
var food;

function setup() {
    var meinCanvas = createCanvas(600, 280); //größe des canvas
    meinCanvas.parent("game"); //damit es in der richtigen div gezeigt wird
    snake = new Snake();
    frameRate(10); //wie schnell die schlange läuft
    pickLocation();
}

function pickLocation() {
    var cols = floor(width / scl); //Damit es genau auf der Laufbahn des Spielers ist
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows))); //p5 Funktion damit es zufällig irgendwo gezeichnet wird
    food.mult(scl);
}


function draw() {
    background((211, 211, 211)); //Hintergrundfarbe
    snake.death();
    snake.update();
    snake.show();
    snake.won();

    if (snake.eat(food)) {
        pickLocation();
    }
    //"food"
    fill(105, 105, 105); //Weiß
    rect(food.x, food.y, scl, scl); //Quadrat
}

function Snake() {
    this.x = 280; //x, y sind Startpunkte
    this.y = 120;
    this.xspeed = 0; //Null damit es nicht losläuft ohne eine Taste gedrückt zu haben
    this.yspeed = 0;
    this.total = 0;
    this.tail = []; //Snake wird als Array gespeichert

    this.direction = function (x, y) { //Richtung
        this.xspeed = x;
        this.yspeed = y;
    }

    this.eat = function (pos) {
        var distance = dist(this.x, this.y, pos.x, pos.y);
        if (distance < 1) {
            this.total++; //Länge der Schlange größer
            return true;
        } else {
            return false;
        }
    }

    this.death = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var distance = dist(this.x, this.y, pos.x, pos.y);
            if (distance < 1) { //Stirbt wenn gegen sich selber, oder gegen Wand läuft
                document.getElementById("gameOverModalDialog").style.visibility = 'visible'; //Game Over
                document.getElementById("snakeModalDialog").style.visibility = 'hidden'; //Fenster Weg
            }
        }
    }

    this.won = function () {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var distance = dist(this.x, this.y, pos.x, pos.y);
            if (this.tail.length == 10) { //Wenn Snake länge = 10, hat Spieler gewonnen
                document.getElementById("text").innerHTML = "Der Bücherwurm hat genug Essen gefangen und ist satt! Jetzt kann ich endlich meine Tasche für den Tag weiter packen!";
                setTimeout(closeSnakePopUp, 6000); //Timeout um Text lesen zu können, danach schließen
                noLoop(); //Darf nicht mehr weiterlaufen
            }
        }
    }

    this.update = function () {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.total - 1] = createVector(this.x, this.y); //Mach einen Vektoren mit x und y

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        //Verhindern dass es außerhalb des Canvas raus geht, constrain = beschränken
        this.x = constrain(this.x, 0, width - scl); // (element, minimum, maximum)
        this.y = constrain(this.y, 0, height - scl);
    }

    this.show = function () {
        fill(255, 255, 255); //Farbe
        for (var i = 0; i < this.total; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl); //größe
    }
}

function handleKeyboardEvent(event) { //zum steuern der Schlange

    var keyCode = event.keyCode;

    switch (keyCode) {
        case 65: //A
        case 37: //Pfeiltaste Links
            snake.direction(-1, 0); //Neues Feld = Aktuelles feld x-1, y 
            break;
        case 87: //W
        case 38: //Oben
            snake.direction(0, -1); //Neues Feld = Aktuelles Feld x, y-1
            break;
        case 68: //D
        case 39: //rechts
            snake.direction(1, 0); //Neues Feld = Aktuelles Feld x+1, y 
            break;
        case 83: //S
        case 40: //unten
            snake.direction(0, 1); //Neues Feld = Aktuelles Feld x, y+1
            break;
    }
}
document.addEventListener("keydown", handleKeyboardEvent);
