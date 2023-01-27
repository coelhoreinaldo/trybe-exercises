const product = {
  id: 1,
  name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct); // {id: 1, name: 'Camiseta', price: '23'}

const productPrice = {
price: 23
}

// espalha o objeto `product` e espalha o objeto `productPrice`
const newProduct2 = { ...product, ...productPrice };

console.log(newProduct2); // {id: 1, name: 'Camiseta', price: 23}