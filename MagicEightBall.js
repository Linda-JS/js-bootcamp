function magicEightBall (){

var userName = prompt('What is your name?');
if(userName){
    console.log('Hello ' + userName + '!');
} else {
    console.log('Hello!');
}

var userQuestion = prompt('Please ask a question!');
console.log(userName + ' ' + userQuestion);

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

switch (randomNumber){
    case 0:
        eightBall = 'Better not tell you now.';
        break;
    case 1:
        eightBall = 'Concentrate and ask again.';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'My reply is no.';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Ask me something else';
        break;
}

alert(eightBall);
};