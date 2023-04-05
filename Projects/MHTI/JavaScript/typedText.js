// Dynamic typed text

const headerNavbar = document.querySelector('.header .navbar');

const typedTextSpan = document.querySelector(".typed-text"); 
const cursorSpan = document.querySelector(".cursor"); 

const textArray = [ "Hey you", 
                    "Staring at the screen again?", 
                    "How are you feeling? How is your mental health?", 
                    "Are you perhaps one of them?",
                    "Surrounded by technical devices all the time?",
                    "Whether you are working in the Tech-Industry or not, did you know how present mental health issues are in that working environment?", 
                    "Look at how many of the interviewed people were affected by mental health issues in 2014", 
                    "... and 2016", 
                    "... 2017",
                    "... also in 2018", 
                    "... as well as 2019", 
                    "It is a common matter nowadays, but nobody talks about it.", 
                    "It is time, we do.", 
                    "Let's look inside the bubbles that people create around themselves as their personal safe space..."]; 
var typingDelay = 50; 
var erasingDelay = 10; 
var newTextDelay = 2000; 
let textArrayIndex = 0; 
let charIndex = 0; 

function type() {
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex); 
        charIndex++; 
        setTimeout(type, typingDelay); 
    }
    else {
        cursorSpan.classList.remove("typing"); 

        switch (charIndex) {
            case textArray[0].length:
                var rereadTextButton = document.getElementById('readAgainButton');
                rereadTextButton.style.display = "inline-block"; 
                rereadTextButton.style.opacity = "30%"; 

                var skipTextButton = document.getElementById('skipBtn'); 
                skipTextButton.style.display = "inline-block"; 
                skipTextButton.style.opacity = "30%"; 
                break;
            case textArray[6].length: //2014
                var ctx = document.getElementById('doughnutChart2014').getContext('2d');
                var doughnutChart2k14 = new Chart(ctx, doughnutChart2014);
                break;
            case textArray[7].length: //2016 
                var ctx = document.getElementById('doughnutChart2016').getContext('2d');
                var doughnutChart2k16 = new Chart(ctx, doughnutChart2016);
                break;
            case textArray[8].length: //2017 
                var ctx = document.getElementById('doughnutChart2017').getContext('2d');
                var doughnutChart2k17 = new Chart(ctx, doughnutChart2017);
                break;
            case textArray[9].length: //2018 
                var ctx = document.getElementById('doughnutChart2018').getContext('2d');
                var doughnutChart2k18 = new Chart(ctx, doughnutChart2018);
                break;
            case textArray[10].length: //2019 
                var ctx = document.getElementById('doughnutChart2019').getContext('2d');
                var doughnutChart2k19 = new Chart(ctx, doughnutChart2019);
                break;
            case textArray[11].length: //main  
                var ctx = document.getElementById('doughnutChart').getContext('2d');
                var doughnutChartMain = new Chart(ctx, mainDoughnutChart);
                break;
            case textArray[13].length: //main 
                var textAtTheEnd = document.getElementById('textAtEnd'); 
                textAtTheEnd.style.opacity = 1; 

                var canvasHolderVisibility = document.getElementById('canvasHolder'); 
                canvasHolderVisibility.style.opacity = 0; 

                var typedTextVisibility = document.getElementById('dynamicText'); 
                typedTextVisibility.style.opacity = 0; 

                var ctx = document.getElementById('doughnutChart').getContext('2d');
                var doughnutChartMain = new Chart(ctx, mainDoughnutChart);

                const skipButton = document.getElementById('skipBtn'); 
                skipButton.style.display = "none"; 
                const toBubbleChartbutton = document.getElementById('toBubbleChartButton'); 
                toBubbleChartbutton.style.opacity = 1;
                
                headerNavbar.style.opacity = 1;   

                enableScroll();

                break;
        }

        if(textArrayIndex < textArray.length-1) {
            setTimeout(erase, newTextDelay);
        }
    }
}

function erase() {
    if(charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--; 
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++; 
        if(textArrayIndex >= textArray.length) { 
            textArrayIndex = 0; 
        } 
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) {
        disableScroll();
        headerNavbar.style.opacity = 0;  
        commonnessButton.style.backgroundColor = '#989898';
        commonnessButton.style.color = '#5523AA';
        setTimeout(type, newTextDelay + 250);
    }
}); 



// Disable scrolling temporarily: https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

function preventDefault(e) {
  e.preventDefault();
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
}