import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private products = [
    {
      name: 'Smartphone',
      description: 'Latest model with powerful features lorem ipsum dolor sit amet lorem ipsum dolor sit amet loremfsfsdfsdfdsfdsfdsfsddsfsdfdfsdfsdfsdfsdfsfdsdfdsfsfsdfsfsdfsfsfdfdff',
      price: 699,
      image: 'https://assets.getmobil.com/uploads/53958/getmobil-apple-iphone14promax-deeppurple-00png.png',
      category: 'Electronics',
    },
    {
      name: 'Laptop',
      description: 'High performance laptop for work and play',
      price: 1299,
      image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_145825406/fee_786_587_png',
      category: 'Electronics',
    },
    {
      name: 'Novel',
      description: 'Bestselling book of the year',
      price: 29,
      image: 'https://www.bookxcess.com/cdn/shop/products/what-is-a-novel-9781406290028-28454831095986.jpg?v=1648788444',
      category: 'Books',
    },
    {
      name: 'T-Shirt',
      description: 'Comfortable cotton t-shirt',
      price: 19,
      image: 'https://organickid.com.tr/media/13782/catalog/40030-002%20(2).jpg',
      category: 'Clothing',
    },
    {
      name: 'Television',
      description: 'ultra HD television',
      price: 1223,
      image: 'https://www.sencor.com/Sencor/media/content/Products/SLE32S700TCS-2.jpg',
      category: 'Electronics',
    },
    {
      name: 'dyson',
      description: 'dyson süpürge',
      price: 1223,
      image: 'https://www.incehesap.com/resim/icerik/5cf252f4d614c.webp',
      category: 'Electronics',
    },
    {
      name: 'mixer',
      description: 'mixer',
      price: 1223,
      image: 'https://productimages.hepsiburada.net/s/8/375-375/8975615623218.jpg',
      category: 'Electronics',
    },
    {
      name: 'masaj aleti',
      description: 'masaj aleti',
      price: 1223,
      image: 'https://www.e-finspor.com/slazenger-kablosuz-masaj-aleti-masaj-cihazi-slazenger-14197-24-B.jpg',
      category: 'Electronics',
    },
    {
      name: 'pantolon',
      description: 'Comfortable cotton t-shirt',
      price: 19,
      image: 'https://floimages.mncdn.com/media/catalog/product/24-09/09/200648096-1-1725881699.jpg',
      category: 'Clothing',
    },
    {
      name: 'kazak',
      description: 'Comfortable cotton t-shirt',
      price: 19,
      image: 'https://004406.cdn.akinoncloud.com/products/2023/10/17/534914/30047af4-071d-4d3e-ad3f-47d950989c26_size350x525_quality90_cropCenter.jpg',
      category: 'Clothing',
    },
  ];

  getProducts() {
    return this.products;
  }

}
