export const getIsFavorite = (favorites, id) => favorites.some(item => item.id === id);

export const onInputChange = action => {
  return event => {
    const query = event.target.value;
    if (query && query.length > 2) {
      action(query);
    }
  }
};

export const toggleAction = (action1, action2, condition, boundValue) => {
  return condition ? action1.bind(null, boundValue) : action2.bind(null, boundValue);
};
