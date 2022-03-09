// Desafio 10
function techList(techNames, name) {
    let list = [];
    if (techNames.length === 0) {
      return 'Vazio!';
    }
  
    techNames = techNames.sort();
  
    for (const tech of techNames) {
      list.push({ tech, name });
    }
  
    return list;
  }

  module.exports = techList;