var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {

  $('form').submit(function(e) {
    e.preventDefault();

    var title = $('#title-input').val();
    var body = $('#body-input').val();
    newEntry = new Entry(title, body);

    $('#display-title').text(title);
    $('#display-body').text(body);
    $('#display-info').html(
      `<p>Number of words: ${newEntry.numWords}</p>
      <p>Number of vowels: ${newEntry.vowels}</p>
      <p>Number of consonants: ${newEntry.consonants}</p>
      <p>Teaser: ${newEntry.getTeaser()}...</p>`
    );

  });

});
