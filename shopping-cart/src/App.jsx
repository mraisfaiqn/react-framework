import { useState } from 'react'
import Home from './pages/Home'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

function App() {
  const [page, setPage] = useState('home')
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  return page === 'home'
    ? <Home onShopNow={() => setPage('shop')} />
    : <ShoppingCart
        cart={cart}
        onAddToCart={addToCart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onGoHome={() => setPage('home')}
      />
}

export default App