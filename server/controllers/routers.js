import { db } from '../firebase/index.js';

export const getPopular = (req, res) => {
  const { qount } = req.query;
  const products = db.ref('products');
  products.once('value', (products) => {
    filter(products.val());
  });
  const filter = (products) => {
    products.sort((a, b) => b.reiting - a.reiting);
    res.json(products.slice(0, qount));
  };
};

export const getProducts = (req, res) => {
  const { page = 0, onPage, curentFilters } = req.query;
  const products = db.ref('products');
  products.once('value', (products) => {
    filter(products.val());
  });
  const filter = (products) => {
    //сoртируем по catId
    const sortProducts = sortBy(products, curentFilters);
    
    //делем на страницы, опред скол страниц и текущую страницу
    const from = page * onPage;
    const to = from + onPage;
    const list = sortProducts.slice(from, to);
    const countPages = Math.floor(sortProducts.length / onPage);
    res.json({ list, pages: countPages });
  };

  const sortBy = (products, curentFilters) => {
    const filters = JSON.parse(curentFilters)   
    if (!filters.category) return products
    return products.filter((item) => +item.category == +filters.category);
  };
};

export const getProduct = (req, res) => {
  const { src } = req.query;
  const products = db.ref('products');
  products.once('value', (products) => {
    filter(products.val());
  });
  const filter = (products) => {
    const product = products.find((item) => item.src === src);
    res.json({ product });
  };
};

export const getFilters = (req, res) => {
  const filters = db.ref('filters');
  filters.once('value', (filters) => {
    res.json(filters.val());
  });
};

export const getCategorys = (req, res) => {
  const categorys = db.ref('categorys');
  categorys.once('value', (categorys) => {
    res.json(categorys.val());
  });
};
