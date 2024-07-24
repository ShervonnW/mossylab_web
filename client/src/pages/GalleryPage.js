import React, { useEffect } from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../gallerypage_components/GalleryPage.css';

const products = [
  { id: 1, name: 'Frog\'s Island Retreat', price: '$29.95', img: '/image/work1.jpg', soldOut: true},
  { id: 2, name: 'Mystic Thorn', price: '$39.95', img: '/image/work2.jpg', soldOut: true},
  { id: 3, name: 'Blossom Reverie', price: '$49.99', img: '/image/work3.jpg', soldOut: true },
  { id: 4, name: 'Magic Forest', price: '$49.99', img: '/image/work4.jpg', soldOut: true},
  { id: 5, name: 'Mushroom House', price: '$49.99', img: '/image/work5.jpg', soldOut: true },
  { id: 6, name: 'Tiny Me', price: '$20.00', img: '/image/work6.jpg', soldOut: true},
];

const GalleryPage = () => {
  // Add useEffect to scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <main className="gallery-page">
        <h1 className='gallery-h1'>Products</h1>
        <div className="product-filters">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" name="sort">
            <option value="az">Alphabetically, A-Z</option>
            <option value="za">Alphabetically, Z-A</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
        </div>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              {product.soldOut && <span className="sold-out">Sold Out</span>}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button>&laquo;</button>
          <span>Page 1 of 1</span>
          <button>&raquo;</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
