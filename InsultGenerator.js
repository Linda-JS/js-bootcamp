

var randomBodyParts = ['ass', 'pussy', 'dick', 'boobs'] ;
var randomAdjectives = ['muscular', 'fluby', 'strong', 'smelly'];
var randomWords = ['small', 'expensive', 'cheap', 'hayatim', 'big'];


var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 3)];

console.log ('Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + ' !!!' );
