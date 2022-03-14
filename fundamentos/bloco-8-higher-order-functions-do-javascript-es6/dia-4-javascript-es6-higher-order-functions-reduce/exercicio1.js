const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arr) {
    return arr.reduce((acc, cur) => {
        cur.forEach(item => acc.push(item));

        return acc;
    }, []);
  }

  console.log(flatten(arrays));