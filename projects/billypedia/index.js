/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('div').css('color', 'blue');
        $('.heading').css('color', 'white').css('font-style', 'italic');
        $('#image-billy').attr('src', 'images/billy/billy-1.jpg');
        $('#sections').css('background-color', 'grey').css('border-radius', '4px');
        $('image').css('background-color', 'black').css('border-radius', '4px');
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            console.log(recording);
        });
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


