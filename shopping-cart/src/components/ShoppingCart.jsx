import { useState, useRef } from 'react'
import PRODUCT_DATA from '../data/products'

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 900)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-tagline">{product.tagline}</p>
        <div className="product-footer">
          <span className="product-price">RM{product.price.toFixed(2)}</span>
          <button
            className={`btn-add ${added ? 'btn-add--added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓' : '+ Add'}
          </button>
        </div>
      </div>
    </div>
  )
}

function ProductList({ onAddToCart }) {
  const carouselRef = useRef(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -380, behavior: 'smooth' })
    }
  }
  
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 380, behavior: 'smooth' })
    }
  }

  return (
    <section className="shop-section">
      <div className="section-header">
        <h2 className="section-title">Products</h2>
        <div className="scroll-buttons">
            <button className="scroll-btn" onClick={scrollLeft} aria-label="Scroll carousel left">
            scroll ←
            </button>
            <button className="scroll-btn" onClick={scrollRight} aria-label="Scroll carousel right">
            scroll →
            </button>
        </div>
      </div>
      <div className="carousel" ref={carouselRef}>
        {PRODUCT_DATA.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-img" />
      <div className="cart-item-info">
        <p className="cart-item-title">{item.title}</p>
        <p className="cart-item-price">RM{(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="cart-item-qty">
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, -1)}>−</button>
        <span className="qty-val">{item.quantity}</span>
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
      </div>
      <button className="btn-delete" onClick={() => onRemove(item.id)}>✕</button>
    </div>
  )
}

function CartSection({ cart, onUpdateQuantity, onRemove }) {
  const totalItems = cart.reduce((s, i) => s + i.quantity, 0)
  return (
    <section className="shop-section">
      <div className="section-header">
        <h2 className="section-title">Cart</h2>
        <span className="cart-count">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
      </div>
      {cart.length === 0 ? (
        <p className="cart-empty">Nothing here yet — add something above.</p>
      ) : (
        <div className="cart-list">
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </section>
  )
}

function PaymentCharges({ cart, onGoHome }) {
  const [checkedOut, setCheckedOut] = useState(false)
  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0)
  const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 5.90
  const total = subtotal + shipping

  const handleCheckout = () => {
    if (!cart.length) return
    setCheckedOut(true)
    setTimeout(() => setCheckedOut(false), 2500)
  }

  return (
    <section className="shop-section payment-section">
      <h2 className="section-title">Payment</h2>
      <div className="payment-rows">
        <div className="payment-row">
          <span>Subtotal</span>
          <span>RM{subtotal.toFixed(2)}</span>
        </div>
        <div className="payment-row">
          <span>Shipping</span>
          <span>{shipping === 0 && subtotal > 0 ? 'FREE' : `RM${shipping.toFixed(2)}`}</span>
        </div>
        {subtotal > 0 && subtotal < 50 && (
          <p className="ship-nudge">Add RM{(50 - subtotal).toFixed(2)} more for free shipping.</p>
        )}
        <hr className="payment-divider" />
        <div className="payment-row payment-total">
          <span>Total</span>
          <span>RM{total.toFixed(2)}</span>
        </div>
      </div>
      <div className="payment-actions">
        <button className="btn-secondary" onClick={onGoHome}>← Home</button>
        <button
          className={`btn-primary ${checkedOut ? 'btn-primary--done' : ''}`}
          onClick={handleCheckout}
          disabled={!cart.length}
        >
          {checkedOut ? '✓ Order Placed!' : 'Checkout'}
        </button>
      </div>
    </section>
  )
}

function ShoppingCart({ cart, onAddToCart, onUpdateQuantity, onRemove, onGoHome }) {
  return (
    <div className="shop-page">
      <nav className="nav">
        <span className="nav-logo">✒ Faiq's Stationery</span>
        <button className="btn-ghost" onClick={onGoHome}>← Home</button>
      </nav>
      <div className="shop-content">
        <ProductList onAddToCart={onAddToCart} />
        <CartSection cart={cart} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />
        <PaymentCharges cart={cart} onGoHome={onGoHome} />
      </div>
    </div>
  )
}

export default ShoppingCart