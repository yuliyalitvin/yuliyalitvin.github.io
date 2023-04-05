// Data for Custom Tooltips
var commonnessData = [null, 1, 55, 59, 537, 631, 179, 14, 77, 75, 38, 78, 1, 1, 1, 95, 17, 2, 2, 4]; 
var ageData = [null, 29, 44, 31, 31, 37, 39, 32, 39, 33, 27, 31, 45, 25, 26, 36, 30, 35, 23, 49]; 
var genderData = [null, 'male', 'male', 'male', 'male', 'male', 'female', 'male', 'female', 'male-to-female', 'female', 'male', 'male', 'male', 'transfeminine', 'male', 'female', 'male', 'male', 'female']; 
// --> now disease 
var locationData = [null, 'United States of America - Michigan', 'Canada', 'Switzerland', 'Germany', 'United Kingdom', 'United States of America - District of Columbia', 'United States of America - Washington', 'France', 'United States of America - Florida', 'United Kingdom', 'Denmark', 'United States of America - Georgia', 'Netherlands', 'Netherlands', 'United States of America - Georgia', 'United States of America - Washington', 'United Kingdom', 'United States of America - Oklahoma', 'United States of America - Maryland']; 
var jobData = [null, 'Front-end Developer', 'DevOps/ SysAdmin', 'Supervisor/ Team Lead', 'Back-end Developer', 'Front-end Developer', 'Back-end Developer', 'Front-end Developer', 'Front-end Developer', 'Designer', 'Back-end Developer', 'Executive Leadership', 'Back-end Developer', 'Support', 'Executive Leadership', 'One-person shop', 'Sales', 'Supervisor/ Team Lead', 'DevOps/ SysAdmin', 'Support'];
var additionalJobsData = [null, '', 'Back-end Developer and Front-end Developer', 'DevOps/ SysAdmin, Back-end Developer and Front-end Developer', 'Front-end Developer and other', '', '', '', '', 'Executive Leadership, Supervisor/ Team Lead, HR, Support, Sales, One-person shop and other', '', 'Supervisor/ Team Lead', '', 'Back-end Developer and One-person shop', 'DevOps/ SysAdmin, Back-end Developer and Support', '', 'DevOps/ SysAdmin, Support, Front-end Developer, Designer and One-person shop', 'Front-end Developer', 'Support and Back-end Developer', 'Back-end Developer, Front-end Developer and One-person shop'];  
var additionalDiseasesData = [null, 'Anxiety Disorder', 'Addictive Disorder', 'Personality Disorder', 'Mood Disorder', 'Personality Disorder, Obsessive-Compulsive Disorder, Substance Use Disorder', 'Mood Disorder', 'Anxiety Disorder, Mood Disorder, Eating Disorder, Attention Deficit Hyperactivity Disorder, Obsessive-Compulsive Disorder, Post-traumatic Stress Disorder, Stress Response Syndromes', 'Anxiety Disorder, Mood Disorder, Obsessive-Compulsive Disorder', 'Anxiety Disorder, Mood Disorder, Post-traumatic Stress Disorder, Stress Response Syndromes', 'Mood Disorder', 'Attention Deficit Hyperactivity Disorder, Obsessive-Compulsive Disorder', 'Obsessive-Compulsive Disorder', '', '', 'Anxiety Disorder, Mood Disorder, Personality Disorder, Substance Use Disorder, Addictive Disorder', 'Anxiety Disorder, Mood Disorder, Personality Disorder, Post-traumatic Stress Disorder, Substance Use Disorder, Addictive Disorder', 'Mood Disorder, Psychotic Disorder, Attention Deficit Hyperactivity Disorder, Personality Disorder, Post-traumatic Stress Disorder, Dissociative Disorder', '', 'Anxiety Disorder, Mood Disorder, Dissociative Disorder']; 


// Commonness BubbleChart
var ctx = document.getElementById('bubbleChartCommonness').getContext('2d');

var bubbleChartCommonness = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            [' '], 
            ['Tinnitus'],
            ['Substance Use Disorder'], 
            ['Addictive Disorder'], 
            ['Anxiety Disorder (Generalized, Social, Phobia, etc)'], 
            ['Mood Disorder (Depression, Bipolar Disorder, etc)'], 
            ['Attention Deficit Hyperactivity Disorder'], 
            ['Psychotic Disorder (Schizophrenia, Schizoaffective, etc)'],
            ['Personality Disorder (Borderline, Antisocial, Paranoid, etc)'],
            ['Obsessive-Compulsive Disorder'],
            ['Eating Disorder (Anorexia, Bulimia, etc)'], 
            ['Stress Response Syndromes'], 
            ['Suicidal Ideation'], 
            ['Burnout'],
            ['Gender Identity Disorder'],
            ['Post-traumatic Stress Disorder'],
            ['Dissociative Disorder'], 
            ['Depersonalisation'],
            ['Asperger Syndrome'], 
            ['Autism'],
            [' ']
        ],
        datasets: [{
            label: 'interviewees from 2016',
            data: [
                {x: ' ', y: null},
                {x: 'Tinnitus', y: 1},
                {x: 'Substance Use Disorder', y: 55}, 
                {x: 'Addictive Disorder', y: 59},
                {x: 'Anxiety Disorder (Generalized, Social, Phobia, etc)', y: 537},
                {x: 'Mood Disorder (Depression, Bipolar Disorder, etc)', y: 631},
                {x: 'Attention Deficit Hyperactivity Disorder', y: 179},
                {x: 'Psychotic Disorder (Schizophrenia, Schizoaffective, etc)', y: 14},
                {x: 'Personality Disorder (Borderline, Antisocial, Paranoid, etc)', y: 77},
                {x: 'Obsessive-Compulsive Disorder', y: 75},
                {x: 'Eating Disorder (Anorexia, Bulimia, etc)', y: 38},
                {x: 'Stress Response Syndromes', y: 78},
                {x: 'Suicidal Ideation', y: 1},
                {x: 'Burnout', y: 1},
                {x: 'Gender Identity Disorder', y: 1},
                {x: 'Post-traumatic Stress Disorder', y: 95},
                {x: 'Dissociative Disorder', y: 17},
                {x: 'Depersonalisation', y: 2},
                {x: 'Asperger Syndrome', y: 2},
                {x: 'Autism', y: 4}
            ],
            fill: false,
            showLine: false,
            backgroundColor: '#656565',
            hoverBackgroundColor: '#5523AA',
            borderColor: '',
            hoverBorderColor: '',
            borderWidth: 1, 
            pointRadius: [ , 5, 10, 12, 23, 25, 20, 8, 15, 14, 9, 16, 5, 5, 5, 18, 8, 6, 6, 7],
            pointHoverRadius: [ , 10, 15, 17, 28, 30, 25, 13, 20, 19, 14, 21, 10, 10, 10, 23, 13, 11, 11, 12]
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontFamily: "Phenomena",
                fontSize: 16,
                usePointStyle: true,
                boxWidth: 7
            }
        },
        scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMin: 0, 
                suggestedMax: 100, 
                fontFamily: "Phenomena", 
                fontSize: 16,
                lineHeight: 1.2, 
                padding: 10
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true, 
                suggestedMin: 0,
                fontFamily: "Phenomena", 
                fontSize: 16, 
                lineHeight: 1.5
            },
            gridLines: {
                display: false
            }
        }]
        },
        tooltips: {
            callbacks: {
                label: function(item, everything) {
                    let commonness; 

                    let label;

                    switch (item.index) {
                        case item.index = 1: 
                            commonness = commonnessData[1]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 2: 
                            commonness = commonnessData[2]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 3: 
                            commonness = commonnessData[3]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 4: 
                            commonness = commonnessData[4]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 5: 
                            commonness = commonnessData[5]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 6: 
                            commonness = commonnessData[6]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 7: 
                            commonness = commonnessData[7]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 8: 
                            commonness = commonnessData[8]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 9: 
                            commonness = commonnessData[9]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 10: 
                            commonness = commonnessData[10]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 11: 
                            commonness = commonnessData[11]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 12: 
                            commonness = commonnessData[12]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 13: 
                            commonness = commonnessData[13]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 14: 
                            commonness = commonnessData[14]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 15: 
                            commonness = commonnessData[15]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 16: 
                            commonness = commonnessData[16]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 17: 
                            commonness = commonnessData[17]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 18: 
                            commonness = commonnessData[18]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                        case item.index = 19: 
                            commonness = commonnessData[19]; 
                            label = "<br> affected: " + commonness;
                            return label; 
                            break;
                    }
                }
            },
            enabled: false,

            custom: function(tooltipModel) {
            // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = "90%";
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = "Phenomena"; 
                tooltipEl.style.fontSize = '16px';  
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.fontWeight = 100; 
                tooltipEl.style.color = 'white'; 
                tooltipEl.style.padding = '10px'; 
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.backgroundColor = 'black'; 
                tooltipEl.style.borderRadius = '10px';
                tooltipEl.style.maxWidth = '350px'; 
                tooltipEl.style.zIndex = 6; 
                tooltipEl.style.letterSpacing = '0.08em'; 
            }
        }
    }
});


// Age BubbleChart
var ctx = document.getElementById('bubbleChartAge').getContext('2d');

var bubbleChartAge = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            [' '], 
            ['Tinnitus'],
            ['Substance Use Disorder'], 
            ['Addictive Disorder'], 
            ['Anxiety Disorder (Generalized, Social, Phobia, etc)'], 
            ['Mood Disorder (Depression, Bipolar Disorder, etc)'], 
            ['Attention Deficit Hyperactivity Disorder'], 
            ['Psychotic Disorder (Schizophrenia, Schizoaffective, etc)'],
            ['Personality Disorder (Borderline, Antisocial, Paranoid, etc)'],
            ['Obsessive-Compulsive Disorder'],
            ['Eating Disorder (Anorexia, Bulimia, etc)'], 
            ['Stress Response Syndromes'], 
            ['Suicidal Ideation'], 
            ['Burnout'],
            ['Gender Identity Disorder'],
            ['Post-traumatic Stress Disorder'],
            ['Dissociative Disorder'], 
            ['Depersonalisation'],
            ['Asperger Syndrome'], 
            ['Autism'],
            [' ']
        ],
        datasets: [{
            label: 'some interviewees from 2016',
            data: [
                {x: ' ', y: null},
                {x: 'Tinnitus', y: 29},
                {x: 'Substance Use Disorder', y: 44}, 
                {x: 'Addictive Disorder', y: 31},
                {x: 'Anxiety Disorder (Generalized, Social, Phobia, etc)', y: 31},
                {x: 'Mood Disorder (Depression, Bipolar Disorder, etc)', y: 37},
                {x: 'Attention Deficit Hyperactivity Disorder', y: 39},
                {x: 'Psychotic Disorder (Schizophrenia, Schizoaffective, etc)', y: 32},
                {x: 'Personality Disorder (Borderline, Antisocial, Paranoid, etc)', y: 39},
                {x: 'Obsessive-Compulsive Disorder', y: 33},
                {x: 'Eating Disorder (Anorexia, Bulimia, etc)', y: 27},
                {x: 'Stress Response Syndromes', y: 31},
                {x: 'Suicidal Ideation', y: 45},
                {x: 'Burnout', y: 25},
                {x: 'Gender Identity Disorder', y: 26},
                {x: 'Post-traumatic Stress Disorder', y: 36},
                {x: 'Dissociative Disorder', y: 30},
                {x: 'Depersonalisation', y: 35},
                {x: 'Asperger Syndrome', y: 23},
                {x: 'Autism', y: 49}
            ],
            fill: false,
            showLine: false,
            backgroundColor: '#656565',
            hoverBackgroundColor: '#5523AA',
            borderColor: '',
            hoverBorderColor: '',
            borderWidth: 1, 
            pointRadius: [ , 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            pointHoverRadius: [ , 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontFamily: "Phenomena",
                fontSize: 16,
                usePointStyle: true,
                boxWidth: 7
            }
        },
        scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMin: 0, 
                suggestedMax: 100, 
                fontFamily: "Phenomena", 
                fontSize: 16,
                lineHeight: 1.2
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                fontFamily: "Phenomena", 
                fontSize: 16, 
                lineHeight: 1.5
            },
            gridLines: {
                display: false
            }
        }]
        },
        tooltips: {
            callbacks: {
                title: function(item, everything) {
                    return; 
                }, 
                label: function(item, everything) {
                    let age;  
                    let gender; 
                    let disease = item.xLabel;
                    let location; 
                    let job; 
                    let additionalJobs;
                    let additionalDiseases; 

                    let label;

                    switch (item.index) {
                        case item.index = 1: 
                            age = ageData[1];
                            gender = genderData[1]; 
                            location = locationData[1]; 
                            job = jobData[1]; 
                            additionalDiseases = additionalDiseasesData[1]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 2: 
                            age = ageData[2];
                            gender = genderData[2]; 
                            location = locationData[2]; 
                            job = jobData[2]; 
                            additionalJobs = additionalJobsData[2]; 
                            additionalDiseases = additionalDiseasesData[2]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 3: 
                            age = ageData[3];
                            gender = genderData[3]; 
                            location = locationData[3]; 
                            job = jobData[3]; 
                            additionalJobs = additionalJobsData[3]; 
                            additionalDiseases = additionalDiseasesData[3]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 4: 
                            age = ageData[4];
                            gender = genderData[4]; 
                            location = locationData[4]; 
                            job = jobData[4]; 
                            additionalJobs = additionalJobsData[4]; 
                            additionalDiseases = additionalDiseasesData[4]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 5: 
                            age = ageData[5];
                            gender = genderData[5]; 
                            location = locationData[5]; 
                            job = jobData[5]; 
                            additionalDiseases = additionalDiseasesData[5]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 6: 
                            age = ageData[6];
                            gender = genderData[6]; 
                            location = locationData[6]; 
                            job = jobData[6]; 
                            additionalDiseases = additionalDiseasesData[6]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 7: 
                            age = ageData[7];
                            gender = genderData[7]; 
                            location = locationData[7]; 
                            job = jobData[7]; 
                            additionalDiseases = additionalDiseasesData[7]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 8: 
                            age = ageData[8];
                            gender = genderData[8]; 
                            location = locationData[8]; 
                            job = jobData[8]; 
                            additionalDiseases = additionalDiseasesData[8]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 9: 
                            age = ageData[9];
                            gender = genderData[9]; 
                            location = locationData[9]; 
                            job = jobData[9]; 
                            additionalJobs = additionalJobsData[9]; 
                            additionalDiseases = additionalDiseasesData[9]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 10: 
                            age = ageData[10];
                            gender = genderData[10]; 
                            location = locationData[10]; 
                            job = jobData[10]; 
                            additionalDiseases = additionalDiseasesData[10]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 11: 
                            age = ageData[11];
                            gender = genderData[11]; 
                            location = locationData[11]; 
                            job = jobData[11]; 
                            additionalJobs = additionalJobsData[11]; 
                            additionalDiseases = additionalDiseasesData[11]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 12: 
                            age = ageData[12];
                            gender = genderData[12]; 
                            location = locationData[12]; 
                            job = jobData[12]; 
                            additionalDiseases = additionalDiseasesData[12]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 13: 
                            age = ageData[13];
                            gender = genderData[13]; 
                            location = locationData[13]; 
                            job = jobData[13]; 
                            additionalJobs = additionalJobsData[13]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 14: 
                            age = ageData[14];
                            gender = genderData[14]; 
                            location = locationData[14]; 
                            job = jobData[14]; 
                            additionalJobs = additionalJobsData[14]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 15: 
                            age = ageData[15];
                            gender = genderData[15]; 
                            location = locationData[15]; 
                            job = jobData[15]; 
                            additionalDiseases = additionalDiseasesData[15]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 16: 
                            age = ageData[16];
                            gender = genderData[16]; 
                            location = locationData[16]; 
                            job = jobData[16]; 
                            additionalJobs = additionalJobsData[16]; 
                            additionalDiseases = additionalDiseasesData[16]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 17: 
                            age = ageData[17];
                            gender = genderData[17]; 
                            location = locationData[17]; 
                            job = jobData[17]; 
                            additionalJobs = additionalJobsData[17]; 
                            additionalDiseases = additionalDiseasesData[17]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 18: 
                            age = ageData[18];
                            gender = genderData[18]; 
                            location = locationData[18]; 
                            job = jobData[18]; 
                            additionalJobs = additionalJobsData[18]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 19: 
                            age = ageData[19];
                            gender = genderData[19]; 
                            location = locationData[19]; 
                            job = jobData[19]; 
                            additionalJobs = additionalJobsData[19]; 
                            additionalDiseases = additionalDiseasesData[19]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                    }
                }
            },
            enabled: false,

            custom: function(tooltipModel) {
            // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = "90%";
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = "Phenomena"; 
                tooltipEl.style.fontSize = '16px';  
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.fontWeight = 100; 
                tooltipEl.style.color = 'white'; 
                tooltipEl.style.padding = '10px'; 
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.backgroundColor = 'black'; 
                tooltipEl.style.borderRadius = '10px';
                tooltipEl.style.maxWidth = '350px'; 
                tooltipEl.style.zIndex = 6; 
            }
        }
    }
});


// Gender BubbleChart
var ctx = document.getElementById('bubbleChartGender').getContext('2d');
var yLabelsGender = {
    0 : 'female', 
    1 : 'male', 
    2 : 'male-to-female', 
    3 : 'female-to-male', 
    4 : 'transfeminine', 
    5 : 'transmale'
}

var bubbleChartGender = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            [' '], 
            ['Tinnitus'],
            ['Substance Use Disorder'], 
            ['Addictive Disorder'], 
            ['Anxiety Disorder (Generalized, Social, Phobia, etc)'], 
            ['Mood Disorder (Depression, Bipolar Disorder, etc)'], 
            ['Attention Deficit Hyperactivity Disorder'], 
            ['Psychotic Disorder (Schizophrenia, Schizoaffective, etc)'],
            ['Personality Disorder (Borderline, Antisocial, Paranoid, etc)'],
            ['Obsessive-Compulsive Disorder'],
            ['Eating Disorder (Anorexia, Bulimia, etc)'], 
            ['Stress Response Syndromes'], 
            ['Suicidal Ideation'], 
            ['Burnout'],
            ['Gender Identity Disorder'],
            ['Post-traumatic Stress Disorder'],
            ['Dissociative Disorder'], 
            ['Depersonalisation'],
            ['Asperger Syndrome'], 
            ['Autism'],
            [' ']
        ],
        datasets: [{
            label: 'some interviewees from 2016',
            data: [
                {x: ' ', y: null},
                {x: 'Tinnitus', y: 1},
                {x: 'Substance Use Disorder', y: 1}, 
                {x: 'Addictive Disorder', y: 1},
                {x: 'Anxiety Disorder (Generalized, Social, Phobia, etc)', y: 1},
                {x: 'Mood Disorder (Depression, Bipolar Disorder, etc)', y: 1},
                {x: 'Attention Deficit Hyperactivity Disorder', y: 0},
                {x: 'Psychotic Disorder (Schizophrenia, Schizoaffective, etc)', y: 1},
                {x: 'Personality Disorder (Borderline, Antisocial, Paranoid, etc)', y: 1},
                {x: 'Obsessive-Compulsive Disorder', y: 2},
                {x: 'Eating Disorder (Anorexia, Bulimia, etc)', y: 0},
                {x: 'Stress Response Syndromes', y: 1},
                {x: 'Suicidal Ideation', y: 1},
                {x: 'Burnout', y: 1},
                {x: 'Gender Identity Disorder', y: 4},
                {x: 'Post-traumatic Stress Disorder', y: 1},
                {x: 'Dissociative Disorder', y: 0},
                {x: 'Depersonalisation', y: 1},
                {x: 'Asperger Syndrome', y: 1},
                {x: 'Autism', y: 0}
            ],
            fill: false,
            showLine: false,
            backgroundColor: '#656565',
            hoverBackgroundColor: '#5523AA',
            borderColor: '',
            hoverBorderColor: '',
            borderWidth: 1, 
            pointRadius: [ , 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            pointHoverRadius: [ , 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontFamily: "Phenomena",
                fontSize: 16,
                usePointStyle: true,
                boxWidth: 7
            }
        },
        scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                fontFamily: "Phenomena", 
                fontSize: 16,
                lineHeight: 1.2, 
                padding: 15
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return yLabelsGender[value]; 
                },
                beginAtZero: true, 
                fontFamily: "Phenomena", 
                fontSize: 16, 
                lineHeight: 1.5
            },
            gridLines: {
                display: false
            }
        }]
        },
        tooltips: {
            callbacks: {
                title: function(item, everything) {
                    return; 
                }, 
                label: function(item, everything) {
                    let age;  
                    let gender; 
                    let disease = item.xLabel;
                    let location; 
                    let job; 
                    let additionalJobs;
                    let additionalDiseases; 

                    let label;

                    switch (item.index) {
                        case item.index = 1: 
                            age = ageData[1];
                            gender = genderData[1]; 
                            location = locationData[1]; 
                            job = jobData[1]; 
                            additionalDiseases = additionalDiseasesData[1]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 2: 
                            age = ageData[2];
                            gender = genderData[2]; 
                            location = locationData[2]; 
                            job = jobData[2]; 
                            additionalJobs = additionalJobsData[2]; 
                            additionalDiseases = additionalDiseasesData[2]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 3: 
                            age = ageData[3];
                            gender = genderData[3]; 
                            location = locationData[3]; 
                            job = jobData[3]; 
                            additionalJobs = additionalJobsData[3]; 
                            additionalDiseases = additionalDiseasesData[3]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 4: 
                            age = ageData[4];
                            gender = genderData[4]; 
                            location = locationData[4]; 
                            job = jobData[4]; 
                            additionalJobs = additionalJobsData[4]; 
                            additionalDiseases = additionalDiseasesData[4]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 5: 
                            age = ageData[5];
                            gender = genderData[5]; 
                            location = locationData[5]; 
                            job = jobData[5]; 
                            additionalDiseases = additionalDiseasesData[5]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 6: 
                            age = ageData[6];
                            gender = genderData[6]; 
                            location = locationData[6]; 
                            job = jobData[6]; 
                            additionalDiseases = additionalDiseasesData[6]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 7: 
                            age = ageData[7];
                            gender = genderData[7]; 
                            location = locationData[7]; 
                            job = jobData[7]; 
                            additionalDiseases = additionalDiseasesData[7]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 8: 
                            age = ageData[8];
                            gender = genderData[8]; 
                            location = locationData[8]; 
                            job = jobData[8]; 
                            additionalDiseases = additionalDiseasesData[8]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 9: 
                            age = ageData[9];
                            gender = genderData[9]; 
                            location = locationData[9]; 
                            job = jobData[9]; 
                            additionalJobs = additionalJobsData[9]; 
                            additionalDiseases = additionalDiseasesData[9]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 10: 
                            age = ageData[10];
                            gender = genderData[10]; 
                            location = locationData[10]; 
                            job = jobData[10]; 
                            additionalDiseases = additionalDiseasesData[10]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 11: 
                            age = ageData[11];
                            gender = genderData[11]; 
                            location = locationData[11]; 
                            job = jobData[11]; 
                            additionalJobs = additionalJobsData[11]; 
                            additionalDiseases = additionalDiseasesData[11]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 12: 
                            age = ageData[12];
                            gender = genderData[12]; 
                            location = locationData[12]; 
                            job = jobData[12]; 
                            additionalDiseases = additionalDiseasesData[12]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 13: 
                            age = ageData[13];
                            gender = genderData[13]; 
                            location = locationData[13]; 
                            job = jobData[13]; 
                            additionalJobs = additionalJobsData[13]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 14: 
                            age = ageData[14];
                            gender = genderData[14]; 
                            location = locationData[14]; 
                            job = jobData[14]; 
                            additionalJobs = additionalJobsData[14]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 15: 
                            age = ageData[15];
                            gender = genderData[15]; 
                            location = locationData[15]; 
                            job = jobData[15]; 
                            additionalDiseases = additionalDiseasesData[15]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 16: 
                            age = ageData[16];
                            gender = genderData[16]; 
                            location = locationData[16]; 
                            job = jobData[16]; 
                            additionalJobs = additionalJobsData[16]; 
                            additionalDiseases = additionalDiseasesData[16]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 17: 
                            age = ageData[17];
                            gender = genderData[17]; 
                            location = locationData[17]; 
                            job = jobData[17]; 
                            additionalJobs = additionalJobsData[17]; 
                            additionalDiseases = additionalDiseasesData[17]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 18: 
                            age = ageData[18];
                            gender = genderData[18]; 
                            location = locationData[18]; 
                            job = jobData[18]; 
                            additionalJobs = additionalJobsData[18]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 19: 
                            age = ageData[19];
                            gender = genderData[19]; 
                            location = locationData[19]; 
                            job = jobData[19]; 
                            additionalJobs = additionalJobsData[19]; 
                            additionalDiseases = additionalDiseasesData[19]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                    }
                }
            },
            enabled: false,

            custom: function(tooltipModel) {
            // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = "90%";
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = "Phenomena"; 
                tooltipEl.style.fontSize = '16px';  
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.fontWeight = 100; 
                tooltipEl.style.color = 'white'; 
                tooltipEl.style.padding = '10px'; 
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.backgroundColor = 'black'; 
                tooltipEl.style.borderRadius = '10px';
                tooltipEl.style.maxWidth = '350px'; 
                tooltipEl.style.zIndex = 6; 
            }
        }
    }
});


// Location BubbleChart
var ctx = document.getElementById('bubbleChartLocation').getContext('2d');
var yLabelsLocation = {
    0 : 'United States of America', 
    1 : 'Canada', 
    2 : 'Switzerland', 
    3 : 'Germany', 
    4 : 'United Kingdom', 
    5 : 'France', 
    6 : 'Denmark', 
    7 : 'Netherlands'
}

var bubbleChartLocation = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            [' '], 
            ['Tinnitus'],
            ['Substance Use Disorder'], 
            ['Addictive Disorder'], 
            ['Anxiety Disorder (Generalized, Social, Phobia, etc)'], 
            ['Mood Disorder (Depression, Bipolar Disorder, etc)'], 
            ['Attention Deficit Hyperactivity Disorder'], 
            ['Psychotic Disorder (Schizophrenia, Schizoaffective, etc)'],
            ['Personality Disorder (Borderline, Antisocial, Paranoid, etc)'],
            ['Obsessive-Compulsive Disorder'],
            ['Eating Disorder (Anorexia, Bulimia, etc)'], 
            ['Stress Response Syndromes'], 
            ['Suicidal Ideation'], 
            ['Burnout'],
            ['Gender Identity Disorder'],
            ['Post-traumatic Stress Disorder'],
            ['Dissociative Disorder'], 
            ['Depersonalisation'],
            ['Asperger Syndrome'], 
            ['Autism'],
            [' ']
        ],
        datasets: [{
            label: 'some interviewees from 2016',
            data: [
                {x: ' ', y: null},
                {x: 'Tinnitus', y: 0},
                {x: 'Substance Use Disorder', y: 1}, 
                {x: 'Addictive Disorder', y: 2},
                {x: 'Anxiety Disorder (Generalized, Social, Phobia, etc)', y: 3},
                {x: 'Mood Disorder (Depression, Bipolar Disorder, etc)', y: 4},
                {x: 'Attention Deficit Hyperactivity Disorder', y: 0},
                {x: 'Psychotic Disorder (Schizophrenia, Schizoaffective, etc)', y: 0},
                {x: 'Personality Disorder (Borderline, Antisocial, Paranoid, etc)', y: 5},
                {x: 'Obsessive-Compulsive Disorder', y: 0},
                {x: 'Eating Disorder (Anorexia, Bulimia, etc)', y: 4},
                {x: 'Stress Response Syndromes', y: 6},
                {x: 'Suicidal Ideation', y: 0},
                {x: 'Burnout', y: 7},
                {x: 'Gender Identity Disorder', y: 7},
                {x: 'Post-traumatic Stress Disorder', y: 0},
                {x: 'Dissociative Disorder', y: 0},
                {x: 'Depersonalisation', y: 4},
                {x: 'Asperger Syndrome', y: 0},
                {x: 'Autism', y: 0}
            ],
            fill: false,
            showLine: false,
            backgroundColor: '#656565',
            hoverBackgroundColor: '#5523AA',
            borderColor: '',
            hoverBorderColor: '',
            borderWidth: 1, 
            pointRadius: [ , 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            pointHoverRadius: [ , 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontFamily: "Phenomena",
                fontSize: 16,
                usePointStyle: true,
                boxWidth: 7
            }
        },
        scales: {
        xAxes: [{
            ticks: {
                fontFamily: "Phenomena", 
                fontSize: 16,
                lineHeight: 1.2,
                padding: 15
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return yLabelsLocation[value]; 
                },
                beginAtZero: true, 
                suggestedMin: 0,
                fontFamily: "Phenomena", 
                fontSize: 16, 
                lineHeight: 1.5
            },
            gridLines: {
                display: false
            }
        }]
        },
        tooltips: {
            callbacks: {
                title: function(item, everything) {
                    return; 
                }, 
                label: function(item, everything) {
                    let age;  
                    let gender; 
                    let disease = item.xLabel;
                    let location; 
                    let job; 
                    let additionalJobs;
                    let additionalDiseases; 

                    let label;

                    switch (item.index) {
                        case item.index = 1: 
                            age = ageData[1];
                            gender = genderData[1]; 
                            location = locationData[1]; 
                            job = jobData[1]; 
                            additionalDiseases = additionalDiseasesData[1]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 2: 
                            age = ageData[2];
                            gender = genderData[2]; 
                            location = locationData[2]; 
                            job = jobData[2]; 
                            additionalJobs = additionalJobsData[2]; 
                            additionalDiseases = additionalDiseasesData[2]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 3: 
                            age = ageData[3];
                            gender = genderData[3]; 
                            location = locationData[3]; 
                            job = jobData[3]; 
                            additionalJobs = additionalJobsData[3]; 
                            additionalDiseases = additionalDiseasesData[3]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 4: 
                            age = ageData[4];
                            gender = genderData[4]; 
                            location = locationData[4]; 
                            job = jobData[4]; 
                            additionalJobs = additionalJobsData[4]; 
                            additionalDiseases = additionalDiseasesData[4]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 5: 
                            age = ageData[5];
                            gender = genderData[5]; 
                            location = locationData[5]; 
                            job = jobData[5]; 
                            additionalDiseases = additionalDiseasesData[5]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 6: 
                            age = ageData[6];
                            gender = genderData[6]; 
                            location = locationData[6]; 
                            job = jobData[6]; 
                            additionalDiseases = additionalDiseasesData[6]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 7: 
                            age = ageData[7];
                            gender = genderData[7]; 
                            location = locationData[7]; 
                            job = jobData[7]; 
                            additionalDiseases = additionalDiseasesData[7]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 8: 
                            age = ageData[8];
                            gender = genderData[8]; 
                            location = locationData[8]; 
                            job = jobData[8]; 
                            additionalDiseases = additionalDiseasesData[8]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 9: 
                            age = ageData[9];
                            gender = genderData[9]; 
                            location = locationData[9]; 
                            job = jobData[9]; 
                            additionalJobs = additionalJobsData[9]; 
                            additionalDiseases = additionalDiseasesData[9]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 10: 
                            age = ageData[10];
                            gender = genderData[10]; 
                            location = locationData[10]; 
                            job = jobData[10]; 
                            additionalDiseases = additionalDiseasesData[10]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 11: 
                            age = ageData[11];
                            gender = genderData[11]; 
                            location = locationData[11]; 
                            job = jobData[11]; 
                            additionalJobs = additionalJobsData[11]; 
                            additionalDiseases = additionalDiseasesData[11]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 12: 
                            age = ageData[12];
                            gender = genderData[12]; 
                            location = locationData[12]; 
                            job = jobData[12]; 
                            additionalDiseases = additionalDiseasesData[12]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 13: 
                            age = ageData[13];
                            gender = genderData[13]; 
                            location = locationData[13]; 
                            job = jobData[13]; 
                            additionalJobs = additionalJobsData[13]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 14: 
                            age = ageData[14];
                            gender = genderData[14]; 
                            location = locationData[14]; 
                            job = jobData[14]; 
                            additionalJobs = additionalJobsData[14]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 15: 
                            age = ageData[15];
                            gender = genderData[15]; 
                            location = locationData[15]; 
                            job = jobData[15]; 
                            additionalDiseases = additionalDiseasesData[15]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 16: 
                            age = ageData[16];
                            gender = genderData[16]; 
                            location = locationData[16]; 
                            job = jobData[16]; 
                            additionalJobs = additionalJobsData[16]; 
                            additionalDiseases = additionalDiseasesData[16]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 17: 
                            age = ageData[17];
                            gender = genderData[17]; 
                            location = locationData[17]; 
                            job = jobData[17]; 
                            additionalJobs = additionalJobsData[17]; 
                            additionalDiseases = additionalDiseasesData[17]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 18: 
                            age = ageData[18];
                            gender = genderData[18]; 
                            location = locationData[18]; 
                            job = jobData[18]; 
                            additionalJobs = additionalJobsData[18]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 19: 
                            age = ageData[19];
                            gender = genderData[19]; 
                            location = locationData[19]; 
                            job = jobData[19]; 
                            additionalJobs = additionalJobsData[19]; 
                            additionalDiseases = additionalDiseasesData[19]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                    }
                }
            },
            enabled: false,

            custom: function(tooltipModel) {
            // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = "90%";
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = "Phenomena"; 
                tooltipEl.style.fontSize = '16px';  
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.fontWeight = 100; 
                tooltipEl.style.color = 'white';
                tooltipEl.style.padding = '10px'; 
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.backgroundColor = 'black'; 
                tooltipEl.style.borderRadius = '10px';
                tooltipEl.style.maxWidth = '350px'; 
                tooltipEl.style.zIndex = 6; 
            }
        }
    }
});


// Job BubbleChart
var ctx = document.getElementById('bubbleChartJob').getContext('2d');
var yLabelsJob = {
    0 : 'Front-end Developer', 
    1 : 'Back-end Developer', 
    2 : 'Supervisor/ Team Lead', 
    3 : 'Designer', 
    4 : 'DevOps/ SysAdmin', 
    5 : 'Executive Leadership', 
    6 : 'Support',
    7 : 'One-person shop', 
    8 : 'Sales'
}

var bubbleChartJob = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            [' '], 
            ['Tinnitus'],
            ['Substance Use Disorder'], 
            ['Addictive Disorder'], 
            ['Anxiety Disorder (Generalized, Social, Phobia, etc)'], 
            ['Mood Disorder (Depression, Bipolar Disorder, etc)'], 
            ['Attention Deficit Hyperactivity Disorder'], 
            ['Psychotic Disorder (Schizophrenia, Schizoaffective, etc)'],
            ['Personality Disorder (Borderline, Antisocial, Paranoid, etc)'],
            ['Obsessive-Compulsive Disorder'],
            ['Eating Disorder (Anorexia, Bulimia, etc)'], 
            ['Stress Response Syndromes'], 
            ['Suicidal Ideation'], 
            ['Burnout'],
            ['Gender Identity Disorder'],
            ['Post-traumatic Stress Disorder'],
            ['Dissociative Disorder'], 
            ['Depersonalisation'],
            ['Asperger Syndrome'], 
            ['Autism'],
            [' ']
        ],
        datasets: [{
            label: 'some interviewees from 2016',
            data: [
                {x: ' ', y: null},
                {x: 'Tinnitus', y: 0},
                {x: 'Substance Use Disorder', y: 4}, 
                {x: 'Addictive Disorder', y: 2},
                {x: 'Anxiety Disorder (Generalized, Social, Phobia, etc)', y: 1},
                {x: 'Mood Disorder (Depression, Bipolar Disorder, etc)', y: 0},
                {x: 'Attention Deficit Hyperactivity Disorder', y: 1},
                {x: 'Psychotic Disorder (Schizophrenia, Schizoaffective, etc)', y: 0},
                {x: 'Personality Disorder (Borderline, Antisocial, Paranoid, etc)', y: 0},
                {x: 'Obsessive-Compulsive Disorder', y: 3},
                {x: 'Eating Disorder (Anorexia, Bulimia, etc)', y: 1},
                {x: 'Stress Response Syndromes', y: 5},
                {x: 'Suicidal Ideation', y: 1},
                {x: 'Burnout', y: 6},
                {x: 'Gender Identity Disorder', y: 5},
                {x: 'Post-traumatic Stress Disorder', y: 7},
                {x: 'Dissociative Disorder', y: 8},
                {x: 'Depersonalisation', y: 2},
                {x: 'Asperger Syndrome', y: 4},
                {x: 'Autism', y: 6}
            ],
            fill: false,
            showLine: false,
            backgroundColor: '#656565',
            hoverBackgroundColor: '#5523AA',
            borderColor: '',
            hoverBorderColor: '',
            borderWidth: 1, 
            pointRadius: [ , 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            pointHoverRadius: [ , 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontFamily: "Phenomena",
                fontSize: 16,
                usePointStyle: true,
                boxWidth: 7
            }
        },
        scales: {
        xAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMin: 0, 
                suggestedMax: 100, 
                fontFamily: "Phenomena", 
                fontSize: 16,
                lineHeight: 1.2,
                padding: 15,
            },
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return yLabelsJob[value]; 
                },
                beginAtZero: true, 
                suggestedMin: 0,
                fontFamily: "Phenomena", 
                fontSize: 16, 
                lineHeight: 1.5
            },
            gridLines: {
                display: false
            }
        }]
        },
        tooltips: {
            callbacks: {
                title: function(item, everything) {
                    return; 
                }, 
                label: function(item, everything) {
                    let age;  
                    let gender; 
                    let disease = item.xLabel;
                    let location; 
                    let job; 
                    let additionalJobs;
                    let additionalDiseases; 

                    let label;

                    switch (item.index) {
                        case item.index = 1: 
                            age = ageData[1];
                            gender = genderData[1]; 
                            location = locationData[1]; 
                            job = jobData[1]; 
                            additionalDiseases = additionalDiseasesData[1]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 2: 
                            age = ageData[2];
                            gender = genderData[2]; 
                            location = locationData[2]; 
                            job = jobData[2]; 
                            additionalJobs = additionalJobsData[2]; 
                            additionalDiseases = additionalDiseasesData[2]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 3: 
                            age = ageData[3];
                            gender = genderData[3]; 
                            location = locationData[3]; 
                            job = jobData[3]; 
                            additionalJobs = additionalJobsData[3]; 
                            additionalDiseases = additionalDiseasesData[3]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 4: 
                            age = ageData[4];
                            gender = genderData[4]; 
                            location = locationData[4]; 
                            job = jobData[4]; 
                            additionalJobs = additionalJobsData[4]; 
                            additionalDiseases = additionalDiseasesData[4]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 5: 
                            age = ageData[5];
                            gender = genderData[5]; 
                            location = locationData[5]; 
                            job = jobData[5]; 
                            additionalDiseases = additionalDiseasesData[5]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 6: 
                            age = ageData[6];
                            gender = genderData[6]; 
                            location = locationData[6]; 
                            job = jobData[6]; 
                            additionalDiseases = additionalDiseasesData[6]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 7: 
                            age = ageData[7];
                            gender = genderData[7]; 
                            location = locationData[7]; 
                            job = jobData[7];
                            additionalDiseases = additionalDiseasesData[7]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 8: 
                            age = ageData[8];
                            gender = genderData[8]; 
                            location = locationData[8]; 
                            job = jobData[8]; 
                            additionalDiseases = additionalDiseasesData[8]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 9: 
                            age = ageData[9];
                            gender = genderData[9]; 
                            location = locationData[9]; 
                            job = jobData[9]; 
                            additionalJobs = additionalJobsData[9]; 
                            additionalDiseases = additionalDiseasesData[9]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 10: 
                            age = ageData[10];
                            gender = genderData[10]; 
                            location = locationData[10]; 
                            job = jobData[10]; 
                            additionalDiseases = additionalDiseasesData[10]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 11: 
                            age = ageData[11];
                            gender = genderData[11]; 
                            location = locationData[11]; 
                            job = jobData[11]; 
                            additionalJobs = additionalJobsData[11]; 
                            additionalDiseases = additionalDiseasesData[11]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 12: 
                            age = ageData[12];
                            gender = genderData[12]; 
                            location = locationData[12]; 
                            job = jobData[12]; 
                            additionalDiseases = additionalDiseasesData[12]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 13: 
                            age = ageData[13];
                            gender = genderData[13]; 
                            location = locationData[13]; 
                            job = jobData[13]; 
                            additionalJobs = additionalJobsData[13]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 14: 
                            age = ageData[14];
                            gender = genderData[14]; 
                            location = locationData[14]; 
                            job = jobData[14]; 
                            additionalJobs = additionalJobsData[14]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 15: 
                            age = ageData[15];
                            gender = genderData[15]; 
                            location = locationData[15]; 
                            job = jobData[15]; 
                            additionalDiseases = additionalDiseasesData[15]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 16: 
                            age = ageData[16];
                            gender = genderData[16]; 
                            location = locationData[16]; 
                            job = jobData[16]; 
                            additionalJobs = additionalJobsData[16]; 
                            additionalDiseases = additionalDiseasesData[16]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 17: 
                            age = ageData[17];
                            gender = genderData[17]; 
                            location = locationData[17]; 
                            job = jobData[17]; 
                            additionalJobs = additionalJobsData[17]; 
                            additionalDiseases = additionalDiseasesData[17]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                        case item.index = 18: 
                            age = ageData[18];
                            gender = genderData[18]; 
                            location = locationData[18]; 
                            job = jobData[18]; 
                            additionalJobs = additionalJobsData[18];  
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs;
                            return label; 
                            break;
                        case item.index = 19: 
                            age = ageData[19];
                            gender = genderData[19]; 
                            location = locationData[19]; 
                            job = jobData[19]; 
                            additionalJobs = additionalJobsData[19]; 
                            additionalDiseases = additionalDiseasesData[19]; 
                            label = "I ...<br>... am " + age + "<br>... am " + gender + "<br>... have " + disease + "<br>... live in " + location + "<br>... work as " + job + "<br>... also work as " + additionalJobs + "<br>... also have " + additionalDiseases;
                            return label; 
                            break;
                    }
                }
            },
            enabled: false,

            custom: function(tooltipModel) {
            // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<table></table>';
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + span + body + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = "90%";
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = "Phenomena"; 
                tooltipEl.style.fontSize = '16px';  
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.fontWeight = 100; 
                tooltipEl.style.color = 'white'; 
                tooltipEl.style.padding = '10px'; 
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.backgroundColor = 'black'; 
                tooltipEl.style.borderRadius = '10px';
                tooltipEl.style.maxWidth = '350px'; 
                tooltipEl.style.zIndex = 6; 
            }
        }
    }
});


// Workplace BubbleChart
// var ctx = document.getElementById('bubbleChartWorkplace').getContext('2d');

// var bubbleChartWorkplace = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: [
//             [' '], 
//             ['Tinnitus'],
//             ['Substance Use Disorder'], 
//             ['Addictive Disorder'], 
//             ['Anxiety Disorder (Generalized, Social, Phobia, etc)'], 
//             ['Mood Disorder (Depression, Bipolar Disorder, etc)'], 
//             ['Attention Deficit Hyperactivity Disorder'], 
//             ['Psychotic Disorder (Schizophrenia, Schizoaffective, etc)'],
//             ['Personality Disorder (Borderline, Antisocial, Paranoid, etc)'],
//             ['Obsessive-Compulsive Disorder'],
//             ['Eating Disorder (Anorexia, Bulimia, etc)'], 
//             ['Stress Response Syndromes'], 
//             ['Suicidal Ideation'], 
//             ['Burnout'],
//             ['Gender Identity Disorder'],
//             ['Post-traumatic Stress Disorder'],
//             ['Dissociative Disorder'], 
//             ['Depersonalisation'],
//             ['Asperger Syndrome'], 
//             ['Autism'],
//             [' ']
//         ],
//         datasets: [{
//             label: 'some interviewees from 2016',
//             // data: [ , 1, 55, 59, 537, 631, 179, 14, 77, 75, 38, 78, 1, 1, 1, 95, 17, 2, 2, 4],
//             data: [
//                 {x: ' ', y: null},
//                 {x: 'Tinnitus', y: 1},
//                 {x: 'Substance Use Disorder', y: 250}, 
//                 {x: 'Addictive Disorder', y: 59},
//                 {x: 'Anxiety Disorder (Generalized, Social, Phobia, etc)', y: 10},
//                 {x: 'Mood Disorder (Depression, Bipolar Disorder, etc)', y: 5},
//                 {x: 'Attention Deficit Hyperactivity Disorder', y: 179},
//                 {x: 'Psychotic Disorder (Schizophrenia, Schizoaffective, etc)', y: 350},
//                 {x: 'Personality Disorder (Borderline, Antisocial, Paranoid, etc)', y: 77},
//                 {x: 'Obsessive-Compulsive Disorder', y: 90},
//                 {x: 'Eating Disorder (Anorexia, Bulimia, etc)', y: 400},
//                 {x: 'Stress Response Syndromes', y: 10},
//                 {x: 'Suicidal Ideation', y: 70},
//                 {x: 'Burnout', y: 1},
//                 {x: 'Gender Identity Disorder', y: 35},
//                 {x: 'Post-traumatic Stress Disorder', y: 30},
//                 {x: 'Dissociative Disorder', y: 17},
//                 {x: 'Depersonalisation', y: 2},
//                 {x: 'Asperger Syndrome', y: 2},
//                 {x: 'Autism', y: 4}
//             ],
//             fill: false,
//             showLine: false,
//             backgroundColor: '#656565',
//             hoverBackgroundColor: '#5523AA',
//             borderColor: '',
//             hoverBorderColor: '',
//             borderWidth: 1, 
//             pointRadius: [ , 5, 10, 12, 23, 25, 20, 8, 15, 14, 9, 16, 5, 5, 5, 18, 8, 6, 6, 7],
//             pointHoverRadius: [ , 10, 15, 17, 28, 30, 25, 13, 20, 19, 14, 21, 10, 10, 10, 23, 13, 11, 11, 12]
//         }]
//     },
//     options: {
//         legend: {
//             display: true,
//             labels: {
//                 fontFamily: "Phenomena",
//                 fontSize: 16,
//                 usePointStyle: true,
//                 boxWidth: 7
//             }
//         },
//         scales: {
//         xAxes: [{
//             ticks: {
//                 beginAtZero: true,
//                 suggestedMin: 0, 
//                 suggestedMax: 100, 
//                 // stepSize: 10
//                 fontFamily: "Phenomena", 
//                 fontSize: 16,
//                 lineHeight: 1.2
//             },
//             gridLines: {
//                 display: false
//             }
//         }],
//         yAxes: [{
//             ticks: {
//                 beginAtZero: true, 
//                 suggestedMin: 0,
//                 // suggestedMax: 100, 
//                 // stepSize: 10
//                 fontFamily: "Phenomena", 
//                 fontSize: 16, 
//                 lineHeight: 1.5
//             },
//             gridLines: {
//                 display: false
//             }
//         }]
//         },
//         tooltips: {
//             // callbacks: {
//             //     labelColor: function(tooltipItem, chart) {
//             //         return {
//             //             borderColor: 'rgb(255, 0, 0)',
//             //             backgroundColor: 'rgb(255, 0, 0)'
//             //         };
//             //     },
//             //     labelTextColor: function(tooltipItem, chart) {
//             //         return '#543453';
//             //     }
//             // }
//             enabled: true,

//             custom: function(tooltipModel) {
//             // Tooltip Element
//                 var tooltipEl = document.getElementById('chartjs-tooltip');

//                 // Create element on first render
//                 if (!tooltipEl) {
//                     tooltipEl = document.createElement('div');
//                     tooltipEl.id = 'chartjs-tooltip';
//                     tooltipEl.innerHTML = '<table></table>';
//                     document.body.appendChild(tooltipEl);
//                 }

//                 // Hide if no tooltip
//                 if (tooltipModel.opacity === 0) {
//                     tooltipEl.style.opacity = 0;
//                     return;
//                 }

//                 // Set caret Position
//                 tooltipEl.classList.remove('above', 'below', 'no-transform');
//                 if (tooltipModel.yAlign) {
//                     tooltipEl.classList.add(tooltipModel.yAlign);
//                 } else {
//                     tooltipEl.classList.add('no-transform');
//                 }

//                 function getBody(bodyItem) {
//                     return bodyItem.lines;
//                 }

//                 // Set Text
//                 if (tooltipModel.body) {
//                     var titleLines = tooltipModel.title || [];
//                     var bodyLines = tooltipModel.body.map(getBody);

//                     var innerHtml = '<thead>';

//                     titleLines.forEach(function(title) {
//                         innerHtml += '<tr><th>' + title + '</th></tr>';
//                     });
//                     innerHtml += '</thead><tbody>';

//                     bodyLines.forEach(function(body, i) {
//                         var colors = tooltipModel.labelColors[i];
//                         var style = 'background:' + colors.backgroundColor;
//                         style += '; border-color:' + colors.borderColor;
//                         style += '; border-width: 2px';
//                         var span = '<span style="' + style + '"></span>';
//                         innerHtml += '<tr><td>' + span + body + '</td></tr>';
//                     });
//                     innerHtml += '</tbody>';

//                     var tableRoot = tooltipEl.querySelector('table');
//                     tableRoot.innerHTML = innerHtml;
//                 }

//                 // `this` will be the overall tooltip
//                 var position = this._chart.canvas.getBoundingClientRect();

//                 // Display, position, and set styles for font
//                 tooltipEl.style.opacity = "70%";
//                 tooltipEl.style.position = 'absolute';
//                 tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
//                 tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
//                 tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
//                 tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
//                 tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
//                 tooltipEl.style.color = 'white'; 
//                 tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
//                 tooltipEl.style.pointerEvents = 'none';
//                 tooltipEl.style.backgroundColor = 'black'; 
//                 tooltipEl.style.borderRadius = '10px';
//             }
//         },
//     }
// });