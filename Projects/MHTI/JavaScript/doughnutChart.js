// Doughnut Chart 

// Marked data -> none
var mainDoughnutChart = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                637, 682, 456, 263, 217
            ],
            backgroundColor: [
                '#656565',
                '#656565',
                '#656565',
                '#656565',
                '#656565'
            ],
            hoverBackgroundColor: [
                '#5523AA',
                '#5523AA',
                '#5523AA',
                '#5523AA',
                '#5523AA'
            ],
            borderColor: '#232323',
            borderWidth: 5,
            label: 'Dataset 1'
        }],
        labels: [
            ['2014 <br> affected: ', '<br> not affected: 623', '<br> total of interviewees: 1260'],
            ['2016 <br> affected: ', '<br> not affected: 1111', '<br> total of interviewees: 1433'],
            ['2017 <br> affected: ', '<br> not affected: 300', '<br> total of interviewees: 756'],
            ['2018 <br> affected: ', '<br> not affected: 154', '<br> total of interviewees: 417'], 
            ['2019 <br> affected: ', '<br> not affecteed: 135', '<br> total of interviewees: 352']
        ]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        legend: {
            display: false,
            position: 'top',
        },
        tooltips: {
            enabled: false,

            // Custom Tooltip Template: https://www.chartjs.org/docs/latest/configuration/tooltip.html

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
        },
        animation: {
            animateScale: false,
            animateRotate: false
        }
    }
};


// Marked data -> 2014
var doughnutChart2014 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                637, 623
            ],
            backgroundColor: [
                '#5523AA',
                '#656565'
            ],
            hoverBackgroundColor: [
                '#5523AA',
                '#5523AA'
            ],
            borderColor: '#232323',
            borderWidth: 5,
            label: 'Dataset 1'
        }],
        labels: [
            '2014 <br> affected: ',
            '2014 <br> not affected: '
        ]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        legend: {
            display: false,
            position: 'top',
        },
        tooltips: {
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
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};


// Marked data -> 2016
var doughnutChart2016 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                1111, 682
            ],
            backgroundColor: [
                '#656565',
                '#5523AA'
            ],
            hoverBackgroundColor: [
                '#5523AA',
                '#5523AA'
            ],
            borderColor: '#232323',
            borderWidth: 5,
            label: 'Dataset 1'
        }],
        labels: [
            '2016 <br> not affected: ',
            '2016 <br> affected: '
        ]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        legend: {
            display: false,
            position: 'top',
        },
        tooltips: {
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
        },
        animation: {
            animateScale: false,
            animateRotate: false
        }
    }
};


// Marked data -> 2017
var doughnutChart2017 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                456, 300
            ],
            backgroundColor: [
                '#5523AA',
                '#656565'
            ],
            hoverBackgroundColor: [
                '#5523AA',
                '#5523AA'
            ],
            borderColor: '#232323',
            borderWidth: 5,
            label: 'Dataset 1'
        }],
        labels: [
            '2017 <br> affected: ',
            '2017 <br> not affected: '
        ]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        legend: {
            display: false,
            position: 'top',
        },
        tooltips: {
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
        },
        animation: {
            animateScale: false,
            animateRotate: false
        }
    }
};


// Marked data -> 2018
var doughnutChart2018 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                154, 263
            ],
            backgroundColor: [
                '#656565',
                '#5523AA'
            ],
            hoverBackgroundColor: [
                '#5523AA',
                '#5523AA'
            ],
            borderColor: '#232323',
            borderWidth: 5,
            label: 'Dataset 1'
        }],
        labels: [
            '2018 <br> not affected: ',
            '2018 <br> affected: '
        ]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        legend: {
            display: false,
            position: 'top',
        },
        tooltips: {
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
        },
        animation: {
            animateScale: false,
            animateRotate: false
        }
    }
};


// Marked data -> 2019
var doughnutChart2019 = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                217, 135
            ],
            backgroundColor: [
                '#5523AA',
                '#656565'
            ],
            hoverBackgroundColor: [
                '#5523AA',
                '#5523AA'
            ],
            borderColor: '#232323',
            borderWidth: 5,
            label: 'Dataset 1'
        }],
        labels: [
            '2019 <br> affected: ',
            '2019 <br> not affected: ',
        ]
    },
    options: {
        cutoutPercentage: 85,
        responsive: true,
        legend: {
            display: false,
            position: 'top',
        },
        tooltips: {
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
        },
        animation: {
            animateScale: false,
            animateRotate: false
        }
    }
};