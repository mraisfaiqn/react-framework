// ─── MenuApp.jsx ───────────────────────────────────────────────────────────────
// Standalone demo that wires together RestaurantHeader + MenuCategory components
// using locally-defined data (no external products.js dependency).
// This file serves as a self-contained usage example / presenter notes demo.

import RestaurantHeader from './components/RestaurantHeader'
import MenuCategory from './components/MenuCategory'

// ── Restaurant info object ────────────────────────────────────────────────────
const restaurantInfo = {
    restaurantName: "Bella Vista",
    tagline: "Authentic Italian Cuisine",
    rating: 4,
    cuisine: "Italian"
}

// ── Menu data object — 3 categories ──────────────────────────────────────────
const menuData = {
    appetizers: [
        {
            id: 101,
            name: "Bruschetta",
            description: "Grilled sourdough topped with fresh tomatoes, garlic, and basil drizzled in extra-virgin olive oil.",
            price: 8.99,
            category: "appetizer",
            isVegetarian: true,
            isSpicy: false,
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&auto=format&fit=crop"
        },
        {
            id: 102,
            name: "Arancini",
            description: "Crispy fried risotto balls stuffed with mozzarella and sun-dried tomatoes, served with marinara.",
            price: 10.99,
            category: "appetizer",
            isVegetarian: true,
            isSpicy: false,
            image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&auto=format&fit=crop"
        }
    ],
    mains: [
        {
            id: 201,
            name: "Spaghetti Carbonara",
            description: "Classic Roman pasta with guanciale, egg yolk, Pecorino Romano, and black pepper.",
            price: 18.50,
            category: "mains",
            isVegetarian: false,
            isSpicy: false,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop"
        },
        {
            id: 202,
            name: "Diavola Pizza",
            description: "Fiery Neapolitan pizza with tomato sauce, fior di latte, spicy salami, and fresh chilli.",
            price: 21.00,
            category: "mains",
            isVegetarian: false,
            isSpicy: true,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop"
        },
        {
            id: 203,
            name: "Risotto ai Funghi",
            description: "Creamy Arborio rice slow-cooked with porcini mushrooms, white wine, and Parmigiano Reggiano.",
            price: 19.50,
            category: "mains",
            isVegetarian: true,
            isSpicy: false,
            image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop"
        }
    ],
    desserts: [
        {
            id: 301,
            name: "Tiramisu",
            description: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with bitter cocoa.",
            price: 9.50,
            category: "desserts",
            isVegetarian: true,
            isSpicy: false,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop"
        }
    ]
}

// ── Order handler ─────────────────────────────────────────────────────────────
// Accepts itemName and price, fires an alert, and logs to the console.
const handleItemOrder = (itemName, price) => {
    alert(`Order placed!\n\n🍽️ ${itemName}\n💰 €${price.toFixed(2)}\n\nGrazie! Your order is on its way.`)
    console.log(`Order received — ${itemName}: €${price.toFixed(2)}`)
}

// ── Component ─────────────────────────────────────────────────────────────────
function MenuApp() {
    return (
        <>
            <RestaurantHeader
                restaurantName={restaurantInfo.restaurantName}
                tagline={restaurantInfo.tagline}
                rating={restaurantInfo.rating}
                cuisine={restaurantInfo.cuisine}
            />

            <div className="menu-app-sections">
                <MenuCategory
                    categoryName="Appetizers"
                    items={menuData.appetizers}
                    onItemOrder={handleItemOrder}
                />
                <MenuCategory
                    categoryName="Main Courses"
                    items={menuData.mains}
                    onItemOrder={handleItemOrder}
                />
                <MenuCategory
                    categoryName="Desserts"
                    items={menuData.desserts}
                    onItemOrder={handleItemOrder}
                />
            </div>
        </>
    )
}

export default MenuApp
