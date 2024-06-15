// components/ProductList.js
import React from 'react';
import SingleProductCard from '@/components/molecules/cards/SingleProductCard';

const products = [
  {
    name: 'میلاد یوسفی',
    image: '/images/product.jpg',
    profile: '/images/profile.jpg',
    title: 'گرامافون',
    price: '560،000',
    club: 'دولوپرز',
    saleNumber: '24',
  },
  {
    name: 'میلاد یوسفی',
    profile: '/images/profile.jpg',
    image: '/images/product.jpg',
    title: 'گرامافون',
    club: 'دولوپرز',
    saleNumber: '35',
    price: '760،000',
  },
  {
    name: 'میلاد یوسفی',
    profile: '/images/profile.jpg',
    image: '/images/product.jpg',
    title: 'گرامافون',
    club: 'دولوپرز',
    saleNumber: '16',
    price: '655،000',
  },
];

const ProductsCards = () => {
  return (
    <div dir='rtl' className="container mx-auto px-4 py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <SingleProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCards;
