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
    const prepareProducts = (sortProducts) => {
      //делим на страницы, опред кол страниц и текущую страницу
      const from = page * onPage;
      const to = from + onPage;
      const list = sortProducts.slice(from, to);
      const countPages = Math.floor(sortProducts.length / onPage);
      return { list, pages: countPages };
    };
    //сoртируем по текущим фильтрам
    sortBy(products, curentFilters)
      .then((sortProducts) => prepareProducts(sortProducts))
      .then((rezult) => res.json(rezult));
  };

  const sortBy = async (products, curentFilters) => {
    curentFilters = JSON.parse(curentFilters);
    if (!curentFilters || Object.keys(curentFilters).length == 0) return products;
    if (curentFilters.category) {
      products = products.filter((item) => item.category == curentFilters.category);
    }

    const _filterProducts = (fList, curentFilters) => {
      let filteredProducts;
      //находим фильтр в базе фильтров и получаем id
      //ищем продукты у которогых в парам есть значение фильтра
      for (const key in curentFilters) {
        const filter = fList.find((filter) => filter.name === key);
        filteredProducts = products.filter((product) => {
          const param = product.params.find((param) => param.filterId === filter.id);
          if (param && param.caption.toString() === curentFilters[key].toString()) return true;
        });
      }
      return filteredProducts;
    };

    try {
      const fList = await _handlerDbQuery('filters');
      const filteredProducts = await _filterProducts(fList, curentFilters);
      return filteredProducts;
    } catch (error) {
      console.log(`sortBy produce error ${error}`);
    }
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
