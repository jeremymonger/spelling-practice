var tempWordList = [];
var currentWord = '';
var currentChar = 0;
var sound;
var started = 0;
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



function keyPressed(event){

  // Ensure user has "interacted" with webpage, otherwise
  // many browsers will refuse to play sound
  if (started === 0){
    started = 1;

    currentWord = tempWordList[Math.floor(
      Math.random()*tempWordList.length)];


    document.getElementById('word').innerHTML = currentWord;
    sound = new Audio('sound/' + currentWord + Math.floor(Math.random()*2) + '.mp3');
    sound.play();
    document.getElementById('image').src = 'images/' + currentWord + '.jpg';
  }
  else{
    //Get pressed key and convert to a character
    var code = event.charCode || event.keyCode;
    var letter = String.fromCharCode(code);

    //If correct character, update page
    if(letter === currentWord[currentChar]){
      document.getElementById('spelling').innerHTML += letter;
      currentChar++;
    }
    //If word is completed and another key pressed, chose new word
    else if (currentChar > currentWord.length-1){
      currentChar = 0;
      currentWord = tempWordList[Math.floor(
        Math.random()*tempWordList.length)];

        document.getElementById('word').innerHTML = currentWord;
        sound = new Audio('sound/'+ currentWord + Math.floor(Math.random()*2) + '.mp3');
        sound.play();
        document.getElementById('image').src = 'images/'+currentWord+'.jpg';
        document.getElementById('spelling').innerHTML = '';
      }

  }
}
