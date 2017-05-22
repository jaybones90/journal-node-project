function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.checkLetters();
  this.numWords();
}

Entry.prototype.numWords = function() {
  var bodyArray =  this.body.split(' ');
  this.numWords = bodyArray.length;
};

Entry.prototype.checkLetters = function() {
  var bodyArray =  this.body.split('');
  var vowelCount = [];
  var consonantCount = [];
  bodyArray.forEach(function(letter) {
    if (/[a,e,i,o,u]/.test(letter)) {
      vowelCount.push(letter);
    } else {
      consonantCount.push(letter);
    }
  });
  this.vowels = vowelCount.length;
  this.consonants = consonantCount.length;
};

Entry.prototype.getTeaser = function() {
  var firstSentence = this.body.split('.')[0];
  var teaserArr = firstSentence.split(' ');
  while (teaserArr.length > 8) {
    teaserArr.pop();
  }
  var teaserSentence = teaserArr.join(' ');
  return `${teaserSentence}`;
};


exports.entryModule = Entry;
