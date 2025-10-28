import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Notebook Gamer ASUS ROG Strix G15',
    price: 1299990,
    image: 'https://via.placeholder.com/300x200/1a1a2e/ffffff?text=ASUS+ROG',
    category: 'Notebooks',
    description: 'Intel Core i7-12700H, 16GB RAM, RTX 4060 8GB, 512GB SSD NVMe',
    stock: 5
  },
  {
    id: 2,
    name: 'Monitor LG UltraWide 34" 144Hz',
    price: 499990,
    image: 'https://via.placeholder.com/300x200/16213e/ffffff?text=LG+34',
    category: 'Monitores',
    description: '34 pulgadas, 144Hz, Resolución 3440x1440, IPS, HDR10',
    stock: 8
  },
  {
    id: 3,
    name: 'Teclado Mecánico Logitech G Pro X',
    price: 89990,
    image: 'https://via.placeholder.com/300x200/0f3460/ffffff?text=Logitech',
    category: 'Periféricos',
    description: 'Switch GX Blue, RGB Lightsync, TKL, Cable desmontable',
    stock: 15
  },
  {
    id: 4,
    name: 'Mouse Razer DeathAdder V3 Pro',
    price: 69990,
    image: 'https://via.placeholder.com/300x200/533483/ffffff?text=Razer',
    category: 'Periféricos',
    description: '30000 DPI Focus Pro, Wireless, Ergonómico, 90h batería',
    stock: 20
  },
  {
    id: 5,
    name: 'SSD Samsung 980 PRO 1TB NVMe',
    price: 149990,
    image: 'https://via.placeholder.com/300x200/7c3aed/ffffff?text=Samsung',
    category: 'Componentes',
    description: 'M.2 NVMe Gen 4, 7000 MB/s lectura, 5000 MB/s escritura',
    stock: 12
  },
  {
    id: 6,
    name: 'Tarjeta Gráfica RTX 4070 12GB',
    price: 899990,
    image: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=RTX+4070',
    category: 'Componentes',
    description: '12GB GDDR6X, Ray Tracing, DLSS 3, 3 ventiladores',
    stock: 3
  }
];
