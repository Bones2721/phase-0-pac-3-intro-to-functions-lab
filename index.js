const expect = require("expect/lib");

function shout(string) {
    return string.toUpperCase();
}
"Hello!".toUpperCase(); // 'HELLO!'

function whisper(string) {
  return string.toLowerCase();  
}
'HELLO!'.toLowerCase(); // 'hello'

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    var cantUnswer = "I can\'t hear you!"
    if (string.toLowerCase(string) === string)
    return cantUnswer 
    var yesUnswer = "YES INDEED!"
    if (string.toUpperCase(string) === string)
    return yesUnswer
    var lovUnswer = "I would love to!"
    if ("Let's have dinner together!" === string)
    return lovUnswer
}

