

import { ProductList } from './components/ProductList/ProductList';

const products = [
  { id: 1, name: 'Notebook Dell Inspiron', price: 4500 },
  { id: 2, name: 'Monitor LG 24"', price: 1200 },
  { id: 3, name: 'Teclado Mecânico Redragon', price: 300 },
  { id: 4, name: 'Mouse Logitech MX Master 3', price: 450 },
  { id: 5, name: 'Headset HyperX Cloud II', price: 600 },
  { id: 6, name: 'Cadeira Gamer ThunderX3', price: 1100 },
  { id: 7, name: 'HD Externo Seagate 2TB', price: 420 },
  { id: 8, name: 'Placa de Vídeo RTX 3060', price: 2900 },
  { id: 9, name: 'Webcam Logitech C920', price: 350 },
  { id: 10, name: 'Fonte Corsair 650W', price: 550 },
];


function App() {
  return <ProductList products={products} />
}


export default App
