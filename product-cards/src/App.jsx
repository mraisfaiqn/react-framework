import React from 'react';
import ProductSection from './components/ProductDisplay';
import PRODUCT_DATA from './data/products';
import './App.css'

function App() {

  return (
    <div className="app-container">
      <ProductSection 
        heading={<>The <span className="highlight-text">latest.</span> Truly awe-inspired gifts.</>} products={PRODUCT_DATA}
      />
    </div>
  )
}

export default App;
