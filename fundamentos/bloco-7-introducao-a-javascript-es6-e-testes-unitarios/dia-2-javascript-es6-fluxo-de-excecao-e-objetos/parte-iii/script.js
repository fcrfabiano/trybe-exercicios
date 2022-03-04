const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const newElement = (obj, key, value) => obj[key] = value;
  const listObjKey = obj => Object.keys(obj);
  const listObjValues = obj => Object.values(obj);
  const objSize = obj => Object.keys(obj).length;

  newElement(lesson2, 'turno', 'noite');

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  function studentsCount(obj) {
      const objKeys = Object.keys(obj);

      let total = 0;

      for (let item in objKeys) {
          total += obj[objKeys[item]].numeroEstudantes;
      }

      return total;
  }

  const getObjValue = (obj,number) => Object.values(obj)[number];

  const testPairValue = (obj, key, value) => {
    const items = Object.entries(obj);
    let isEqual = false;
    for (let item in items) {
      if (items[item][0] === key && items[item][1] === value) isEqual = true;
    }
    return isEqual;
  };

  const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      if(obj[array[index]].materia === 'Matemática'){
      total += obj[array[index]].numeroEstudantes;
      }
    }
    return total;
  }

  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
