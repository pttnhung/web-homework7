// Product data and request handlers live outside the route definitions.
const products = [
  { id: 1, name: 'Laptop-vnuk', price: 1500 },
  { id: 2, name: 'Điện thoại', price: 800 },
  { id: 3, name: 'Tai nghe', price: 100 }
];

exports.getProducts = (req, res) => {
  res.render('products', { products });
};

exports.getProductById = (req, res) => {
  const product = products.find((item) => item.id === Number(req.params.id));

  if (!product) {
    return res.status(404).send('<h1>Không tìm thấy sản phẩm</h1>');
  }

  res.send(`<h1>${product.name}</h1><p>Giá: $${product.price}</p>`);
};
