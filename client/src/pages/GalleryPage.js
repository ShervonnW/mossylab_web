import React, { useState, useEffect } from 'react';
import Header from '../homepage_components/Header';
import Footer from '../homepage_components/Footer';
import '../gallerypage_components/GalleryPage.css';

const productsData = [
  { id: 1, name: 'Frog\'s Island Retreat', price: '$29.95', img: '/image/work1.jpg', soldOut: true },
  { id: 2, name: 'Mystic Thorn', price: '$39.95', img: '/image/work2.jpg', soldOut: true },
  { id: 3, name: 'Blossom Reverie', price: '$49.99', img: '/image/work3.jpg', soldOut: true },
  { id: 4, name: 'Magic Forest', price: '$49.99', img: '/image/work4.jpg', soldOut: true },
  { id: 5, name: 'Mushroom House', price: '$49.99', img: '/image/work5.jpg', soldOut: true },
  { id: 6, name: 'Tiny Me', price: '$20.00', img: '/image/work6.jpg', soldOut: true },
];

const GalleryPage = () => {
  const [products] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [sortType, setSortType] = useState('az');
  const [searchTerm, setSearchTerm] = useState('');

  // Add useEffect to scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'az') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'za') {
      return b.name.localeCompare(a.name);
    } else if (sortType === 'price-asc') {
      return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    } else if (sortType === 'price-desc') {
      return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleClickNext = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <Header />
      <main className="gallery-page">
        <h1 className='gallery-h1'>Products</h1>
        <div className="product-filters">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" name="sort" value={sortType} onChange={handleSortChange}>
            <option value="az">Alphabetically, A-Z</option>
            <option value="za">Alphabetically, Z-A</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="product-container">
          <div className="product-grid">
            {currentProducts.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.img} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                {product.soldOut && <span className="sold-out">Sold Out</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <button onClick={handleClickPrev} disabled={currentPage === 1}>&laquo;</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleClickNext} disabled={currentPage === totalPages}>&raquo;</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
