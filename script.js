var tempWordList = [];
var currentWord = '';
var currentChar = 0;

// var wordList = [
//   //Alliteration
//   [['cat', 'car', 'cop'],
//   ['bat', 'bar', 'bug',	'bun', 'bit',	'best'],
//   ['hat',	'hug', 'hop',	'hit'],
//   ['mat',	'mug', 'mop'],
// 	['far',	'fun', 'fit'],
//   ['rat',	'rug', 'run', 'rest'],
//   ['pat',	'pop', 'pit']
// 	['tar',	'tug', 'top',	'test']],
//   //Rhyming
//   [['cat',	'bat', 'hat',	'mat', 'rat',	'pat'],
//   ['car', 'bar', 'far',	'tar'],
// 	['bug',	'hug', 'mug',	'rug', 'tug'],
// 	['bun',	'fun', 'run'],
//   ['cop',	'hop', 'mop', 'pop', 'top'],
// 	['bit',	'hit', 'fit',	'pit'],
// 	['best','rest','test']]
// ];
tempWordList = ['cat', 'car',
'bat', 'bar', 'bug',	'bun', 'bit',
'hat',	'hug', 'hop',	'hit',
'mat',	'mug', 'mop',
'far',	'fun', 'fit',
'rat',	'rug', 'run',
'pat',	'pop', 'pit',
'tug', 'top'
];

currentWord = tempWordList[Math.floor(
  Math.random()*tempWordList.length)];


document.getElementById('word').innerHTML = currentWord;
document.getElementById('image').src = 'images/' + currentWord + '.jpg';
function keyPressed(event){
  var code = event.charCode || event.keyCode;
  var letter = String.fromCharCode(code);
  if(letter === currentWord[currentChar]){
    document.getElementById('spelling').innerHTML += letter;
    currentChar++;
  }
  else if (currentChar > currentWord.length-1){
    currentChar = 0;
    currentWord = tempWordList[Math.floor(
      Math.random()*tempWordList.length)];

      document.getElementById('word').innerHTML = currentWord;
      document.getElementById('image').src = 'images/'+currentWord+'.jpg';
      document.getElementById('spelling').innerHTML = '';

  }
}
