export const productsSort = (list, ask) => {
  const newList = list.concat();
  if (newList.length > 0) {
    return newList.sort((a, b) => (ask ? a.reiting - b.reiting : b.reiting - a.reiting));
  } else {
    return newList;
  }
};

export const productsSlice = (list, start, count) => {
  if (list === undefined || start === undefined || count === undefined) {
    return console.log('Не все передано для фильтрации (arr, start, count)');
  }
  return list.slice(start, count);
};

export const goToPage = ({urlPath, history }) => {
  history.push('/' + urlPath); //
};



