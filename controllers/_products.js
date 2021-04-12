import { db } from '../firebase/index.js';

const _handlerDbQuery = (keyWord = '') => {
  return db
    .ref(keyWord)
    .once('value')
    .then((val) => val.val())
    .catch((error) => console.log(`_handlerDbQuery produce error ${error}`));
};

export const getPopular = (req, res) => {
  const { qount } = req.query;

  _handlerDbQuery('products')
    .then((products) => filter(products))
    .catch((error) => console.log(`getPopular produce error ${error}`));

  const filter = (products) => {
    products.sort((a, b) => b.reiting - a.reiting);
    res.json(products.slice(0, qount));
  };
};

export const getProducts = (req, res) => {
  const { page = 0, onPage, curentFilters } = req.query;

  _handlerDbQuery('products')
    .then((products) => filter(products))
    .catch((error) => console.log(`getProducts produce error ${error}`));

  const filter = (products) => {
    //сoртируем по текущим фильтрам
    const sortProducts = sortBy(products, curentFilters);

    //делим на страницы, опред кол страниц и текущую страницу
    const from = page * onPage;
    const to = from + onPage;
    const list = sortProducts.slice(from, to);
    const countPages = Math.floor(sortProducts.length / onPage);

    res.json({ list, pages: countPages });
  };

  const sortBy =  (products, curentFilters) => {
    curentFilters = JSON.parse(curentFilters);
    if (!curentFilters || Object.keys(curentFilters).length == 0) return products;
    if (curentFilters.category) {
      products = products.filter((item) => item.category == curentFilters.category);
    }    

    _handlerDbQuery('filters')
      .then((fList) => _filterProducts(fList, curentFilters))
      .then((filterId) => filterId)      
      .catch((error) => console.log(`sortBy produce error ${error}`));

    const _filterProducts = (fList, curentFilters) => {
      //находим фильтр в базе фильтров и получаем id
      for (const key in curentFilters) {
        const filter = fList.find((filter) => filter.name === key);
        return filter.id;
      }
    };
    
    return products;
  };
};

export const getProduct = (req, res) => {
  const { src } = req.query;

  _handlerDbQuery('products')
    .then((products) => filter(products))
    .catch((error) => console.log(`getProduct produce error ${error}`));

  const filter = (products) => {
    const product = products.find((item) => item.src === src);
    res.json({ product });
  };
};
