// Desafio 9
function encode(message) {
    message = message.replace(/a/gi, '1');
    message = message.replace(/e/gi, '2');
    message = message.replace(/i/gi, '3');
    message = message.replace(/o/gi, '4');
    message = message.replace(/u/gi, '5');
  
    return message;
  }
  
  function decode(message) {
    message = message.replace(/[1]/g, 'a');
    message = message.replace(/[2]/g, 'e');
    message = message.replace(/[3]/g, 'i');
    message = message.replace(/[4]/g, 'o');
    message = message.replace(/[5]/g, 'u');
  
    return message;
  }

  module.exports = {encode, decode};