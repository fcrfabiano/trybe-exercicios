  // Pesquisa
  function searchEmployee(id, detail) {
    const professional = professionalBoard.find(item => item.id === id);
    
    if (professional === undefined) {
      throw new Error("ID não identificada");
    }
    
    // if (!professional[detail]) {
    
    // }
    
    return professional[detail];
  };

  console.log(searchEmployee('4628-2', 'firstName'));