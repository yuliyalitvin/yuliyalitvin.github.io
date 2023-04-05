const hamburgerMenue = document.querySelector('.header .navbar .navlist .hamburgerMenue');
const mobileMenue = document.querySelector('.header .navbar .navlist ul');
const header = document.querySelector('.header.container');

const skipTypedText = document.getElementById('skipBtn'); 
const readAgain = document.getElementById('readAgainBtn');

const commonnessButton = document.getElementById('commonnessBtn');
const ageButton = document.getElementById('ageBtn'); 
const genderButton = document.getElementById('genderBtn');
const locationButton = document.getElementById('locationBtn'); 
const jobButton = document.getElementById('jobBtn'); 
const workplaceButton = document.getElementById('workplaceBtn');

var chartWrapperCommonness = document.getElementById('wrapperCommonness'); 
var chartWrapperAge = document.getElementById('wrapperAge'); 
var chartWrapperGender = document.getElementById('wrapperGender');
var chartWrapperLocation = document.getElementById('wrapperLocation');
var chartWrapperJob = document.getElementById('wrapperJob');
// var chartWrapperWorkplace = document.getElementById('wrapperWorkplace');


hamburgerMenue.addEventListener('click', () => {
    mobileMenue.classList.toggle('active');

    if(mobileMenue.style.left = '100%') {
        hamburgerMenue.classList.toggle('active');
        mobileMenue.style.left = '0%';
    }
});

function hideMenue() {
    hamburgerMenue.classList.remove('active'); 
    mobileMenue.style.left = '100%'; 
}

skipTypedText.addEventListener('click', () => {
    charIndex = textArray[13].length; 
});


readAgain.addEventListener('click', () => {
    location.reload(); 
});


// BubbleChart Button -> Commonness

function commonnessOnClick() {
    commonnessButton.style.backgroundColor = '#989898';
    commonnessButton.style.color = '#5523AA';

    ageButton.style.backgroundColor = 'transparent';
    ageButton.style.color = '#989898';

    genderButton.style.backgroundColor = 'transparent';
    genderButton.style.color = '#989898';

    locationButton.style.backgroundColor = 'transparent';
    locationButton.style.color = '#989898';

    jobButton.style.backgroundColor = 'transparent';
    jobButton.style.color = '#989898';

    workplaceButton.style.backgroundColor = 'transparent';
    workplaceButton.style.color = '#989898';

    commonnessButton.classList.toggle('active');
}

function commonnessHover() {
    commonnessButton.style.backgroundColor = '#989898';
    commonnessButton.style.color = '#5523AA';
}

function commonnessNoHover() {
    commonnessButton.style.backgroundColor = 'transparent';
    commonnessButton.style.color = '#989898';
}


// BubbleChart Button -> Age

function ageOnClick() {
    ageButton.style.backgroundColor = '#989898';
    ageButton.style.color = '#5523AA';

    commonnessButton.style.backgroundColor = 'transparent';
    commonnessButton.style.color = '#989898';

    genderButton.style.backgroundColor = 'transparent';
    genderButton.style.color = '#989898';

    locationButton.style.backgroundColor = 'transparent';
    locationButton.style.color = '#989898';

    jobButton.style.backgroundColor = 'transparent';
    jobButton.style.color = '#989898';

    workplaceButton.style.backgroundColor = 'transparent';
    workplaceButton.style.color = '#989898';
}

function ageHover() {
    ageButton.style.backgroundColor = '#989898';
    ageButton.style.color = '#5523AA';
}

function ageNoHover() {
    ageButton.style.backgroundColor = 'transparent';
    ageButton.style.color = '#989898';
}


// BubbleChart Button -> Gender

function genderOnClick() {
    genderButton.style.backgroundColor = '#989898';
    genderButton.style.color = '#5523AA';

    commonnessButton.style.backgroundColor = 'transparent';
    commonnessButton.style.color = '#989898';

    ageButton.style.backgroundColor = 'transparent';
    ageButton.style.color = '#989898';

    locationButton.style.backgroundColor = 'transparent';
    locationButton.style.color = '#989898';

    jobButton.style.backgroundColor = 'transparent';
    jobButton.style.color = '#989898';

    workplaceButton.style.backgroundColor = 'transparent';
    workplaceButton.style.color = '#989898';
}

function genderHover() {
    genderButton.style.backgroundColor = '#989898';
    genderButton.style.color = '#5523AA';
}

function genderNoHover() {
    genderButton.style.backgroundColor = 'transparent';
    genderButton.style.color = '#989898';
}


// BubbleChart Button -> Location 

function locationOnClick() {
    locationButton.style.backgroundColor = '#989898';
    locationButton.style.color = '#5523AA';

    commonnessButton.style.backgroundColor = 'transparent';
    commonnessButton.style.color = '#989898';

    ageButton.style.backgroundColor = 'transparent';
    ageButton.style.color = '#989898';

    genderButton.style.backgroundColor = 'transparent';
    genderButton.style.color = '#989898';

    jobButton.style.backgroundColor = 'transparent';
    jobButton.style.color = '#989898';

    workplaceButton.style.backgroundColor = 'transparent';
    workplaceButton.style.color = '#989898';
}

function locationHover() {
    locationButton.style.backgroundColor = '#989898';
    locationButton.style.color = '#5523AA';
}

function locationNoHover() {
    locationButton.style.backgroundColor = 'transparent';
    locationButton.style.color = '#989898';
}


// BubbleChart Button -> Job

function jobOnClick() {
    jobButton.style.backgroundColor = '#989898';
    jobButton.style.color = '#5523AA';

    commonnessButton.style.backgroundColor = 'transparent';
    commonnessButton.style.color = '#989898';

    ageButton.style.backgroundColor = 'transparent';
    ageButton.style.color = '#989898';

    genderButton.style.backgroundColor = 'transparent';
    genderButton.style.color = '#989898';

    locationButton.style.backgroundColor = 'transparent';
    locationButton.style.color = '#989898';

    workplaceButton.style.backgroundColor = 'transparent';
    workplaceButton.style.color = '#989898';
}

function jobHover() {
    jobButton.style.backgroundColor = '#989898';
    jobButton.style.color = '#5523AA';
}

function jobNoHover() {
    jobButton.style.backgroundColor = 'transparent';
    jobButton.style.color = '#989898';
}


// BubbleChart Button -> Workplace

// function workplaceOnClick() {
//     workplaceButton.style.backgroundColor = '#989898';
//     workplaceButton.style.color = '#5523AA';

//     commonnessButton.style.backgroundColor = 'transparent';
//     commonnessButton.style.color = '#989898';

//     ageButton.style.backgroundColor = 'transparent';
//     ageButton.style.color = '#989898';

//     genderButton.style.backgroundColor = 'transparent';
//     genderButton.style.color = '#989898';

//     locationButton.style.backgroundColor = 'transparent';
//     locationButton.style.color = '#989898';

//     jobButton.style.backgroundColor = 'transparent';
//     jobButton.style.color = '#989898';
// }

// function workplaceHover() {
//     workplaceButton.style.backgroundColor = '#989898';
//     workplaceButton.style.color = '#5523AA';
// }

// function workplaceNoHover() {
//     workplaceButton.style.backgroundColor = 'transparent';
//     workplaceButton.style.color = '#989898';
// }



commonnessButton.addEventListener('click', () => {
    chartWrapperCommonness.style.display = "block"; 
    chartWrapperAge.style.display = "none"; 
    chartWrapperGender.style.display = "none"; 
    chartWrapperLocation.style.display = "none"; 
    chartWrapperJob.style.display = "none"; 
    // chartWrapperWorkplace.style.display = "none"; 
});

ageButton.addEventListener('click', () => {
    chartWrapperCommonness.style.display = "none"; 
    chartWrapperAge.style.display = "block"; 
    chartWrapperGender.style.display = "none"; 
    chartWrapperLocation.style.display = "none"; 
    chartWrapperJob.style.display = "none"; 
    // chartWrapperWorkplace.style.display = "none"; 
});

genderButton.addEventListener('click', () => {
    chartWrapperCommonness.style.display = "none"; 
    chartWrapperAge.style.display = "none"; 
    chartWrapperGender.style.display = "block"; 
    chartWrapperLocation.style.display = "none"; 
    chartWrapperJob.style.display = "none"; 
    // chartWrapperWorkplace.style.display = "none"; 
});

locationButton.addEventListener('click', () => {
    chartWrapperCommonness.style.display = "none"; 
    chartWrapperAge.style.display = "none"; 
    chartWrapperGender.style.display = "none"; 
    chartWrapperLocation.style.display = "block"; 
    chartWrapperJob.style.display = "none"; 
    // chartWrapperWorkplace.style.display = "none"; 
});

jobButton.addEventListener('click', () => {
    chartWrapperCommonness.style.display = "none"; 
    chartWrapperAge.style.display = "none"; 
    chartWrapperGender.style.display = "none"; 
    chartWrapperLocation.style.display = "none"; 
    chartWrapperJob.style.display = "block"; 
    // chartWrapperWorkplace.style.display = "none"; 
});

// workplaceButton.addEventListener('click', () => {
    // chartWrapperCommonness.style.display = "none"; 
    // chartWrapperAge.style.display = "none"; 
    // chartWrapperGender.style.display = "none"; 
    // chartWrapperLocation.style.display = "none"; 
    // chartWrapperJob.style.display = "none"; 
    // chartWrapperWorkplace.style.display = "block"; 
// });