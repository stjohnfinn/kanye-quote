let lines;

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

        randomizeQuote();
    });
});

function randomizeQuote() {
    let speaker = -1;
    let quote = -1;

    speaker = Math.floor( Math.random() * lines.dudes.length);
    quote = Math.floor( Math.random() * lines.yeQuotes.length);

    console.log(speaker);
    console.log(quote);

    $('#quote-name').text('- ' + lines.dudes[speaker]);
    $('#quote-content').text(lines.yeQuotes[quote]);

    $('#quote-number').text('#' + Math.floor( Math.random() * 300));
}