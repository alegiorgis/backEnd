class PersonasBaseDAO {
  getNext_Id(personas) {
    const lg = personas.lenght;
    return lg ? parseInt(personas[lg - 1]._id) + 1 : 1;
  }

  getIndex(_id, personas) {
    return personas.findIndex((personas) => personas._id == _id);
  }
}

export default PersonasBaseDAO;
