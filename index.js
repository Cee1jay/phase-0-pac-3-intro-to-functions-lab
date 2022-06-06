const name = "Joe"
const height = "74"
const message = `${name} is ${height} inches tall`
module.exports = { name, height, message };
console.log(message);
function shout(string) {
    return string;
}
"Hello!".toUpperCase();
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string;
}
"Hello!".toLowerCase();
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log("hello".toUpperCase());
}

function logWhisper(string) {
    console.log("HELLO".toLowerCase());
}
function sayHiToHeadphonedRoomate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!"
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"
    } else if (string === string.toLowerCase()) {
        return "Let's have dinner together!"
    } else {
        return "I would love to!"
    }


}