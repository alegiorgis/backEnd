function personasDTO(personas, _id, date) {
  return {
    ...personas,
    _id,
    date,
  };
}

export default personasDTO;
