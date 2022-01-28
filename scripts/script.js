let lines;
let censor = true;

let requestURL = './scripts/lines.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    lines = request.response;
    console.log('shit worked???');
    console.log(lines);
}

$(document).ready( function() {
    console.log('succesfully loaded page.');

    $('#generateBtn').click( () => {
        $('#wisdom').css('opacity', '1');
        $('#wisdom').css('height', '100%');

        randomizeQuote();
    });

    $('#clean-toggle-switch').click( () => {
        if ($('#toggle-slider').css('left') === '0px') {
            $('#toggle-slider').css('left', '70%');
            $('#toggle-slider').css('background-color', 'rgb(150, 71, 71)');
            $('#clean-toggle-switch').css('background-color', 'rgb(218, 76, 76)');
            $('#toggle-label').text('Mode: Explicit');
            censor = false;
        } else {
            $('#toggle-slider').css('left', '0px');
            $('#toggle-slider').css('background-color', 'rgb(50, 140, 90)');
            $('#clean-toggle-switch').css('background-color', 'rgb(50, 205, 105)');
            $('#toggle-label').text('Mode: Clean');
            censor = true;
        }
    });

    $('#aboutBtn').click( () => {
        if ($('#about').css('visibility') === 'hidden') {
            $('#about').css('visibility', 'visible');
            $('#about').css('height', '100%');
            $('#about').css('opacity', '1');
        } else {
            $('#about').css('opacity', '0');
            $('#about').css('height', '0%');
            $('#about').css('visibility', 'hidden');
        }
    })

});

function randomizeQuote() {
    let speaker = -1;
    let quote = -1;
    let songLink = '';

    speaker = Math.floor( Math.random() * lines.dudes.length);
    
    if (censor) {
        quote = Math.floor( Math.random() * lines.cleanYeQuotes.length);
    } else {
        quote = Math.floor( Math.random() * lines.yeQuotes.length);
    }

    songLink = lines.links[quote];

    console.log(speaker);
    console.log(quote);

    $('#quote-name').text('- ' + lines.dudes[speaker]);
    if (censor) {
        $('#quote-content').text(lines.cleanYeQuotes[quote]);
    } else {
        $('#quote-content').text(lines.yeQuotes[quote]);
    }
    $('#quote-number').text('#' + Math.floor( Math.random() * 300));
    $('#song-link').attr('href', songLink);
}