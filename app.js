var userInput;
var userName;
userInput = 5;
userInput = 'Ula';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('an error', 50);
