import RestaurantHeader from './components/RestaurantHeader'
import MenuCatalogue from './components/MenuItem'
import PRODUCT_DATA from './data/products'
import './App.css'

function App() {

  const handleItemOrder = (itemName, price) => {
    alert(`Order placed!\n\n🍔 ${itemName}\n💰 RM ${price.toFixed(2)}\n\nThank you for your order!`)
    console.log(`Order: ${itemName} — RM ${price.toFixed(2)}`)
  }

  return (
    <>
      <RestaurantHeader
        restaurantName={<><span className="highlight-text">Mo's</span> Burger</>}
        tagline="Where patties meet, for a juicy outing!"
        rating={5}
        cuisine="Gourmet Burgers"
      />
      <MenuCatalogue products={PRODUCT_DATA} onItemOrder={handleItemOrder} />
    </>
  )
}

export default App
