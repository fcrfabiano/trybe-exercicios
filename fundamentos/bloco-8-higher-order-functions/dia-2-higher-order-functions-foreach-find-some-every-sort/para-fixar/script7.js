const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
 const sortByAge = (arr) => arr.sort((a, b) => b.age - a.age);
  
  console.log(sortByAge(people));