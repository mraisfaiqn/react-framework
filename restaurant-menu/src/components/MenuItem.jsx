import { useRef, useState } from 'react'

// ─── MenuItem ─────────────────────────────────────────────────────────────────
// Displays a single menu card: image, name (+ dietary emojis), description,
// price, and an "Order Now" button that fires the onOrder callback.

function MenuItem({
    name = "Menu Item",
    description = "",
    price = 0,
    category = "general",
    isVegetarian = false,
    isSpicy = false,
    image = "/default-food.jpg",
    onOrder = null
}) {
    const handleOrder = () => {
        if (onOrder) onOrder(name, price)
    }

    return (
        <div className="product-card">

            {/* Food photo — fills the top portion of the card */}
            <div className="card-image-wrapper">
                <img src={image} alt={name} className="card-image" />
            </div>

            {/* Text info */}
            <div className="card-body">
                <div className="card-header">
                    <h3 className="card-title">
                        {name}
                        {isVegetarian && <span className="diet-tag" title="Vegetarian"> 🥬</span>}
                        {isSpicy     && <span className="diet-tag" title="Spicy"> 🌶️</span>}
                    </h3>

                    {/* Conditionally render description only when provided */}
                    {description && (
                        <p className="card-tagline">{description}</p>
                    )}
                </div>

                {/* Price + CTA */}
                <div className="card-footer">
                    <span className="card-price">RM {price.toFixed(2)}</span>
                    <button className="order-button" onClick={handleOrder}>
                        Order Now
                    </button>
                </div>
            </div>

        </div>
    )
}

// ─── Filter options ────────────────────────────────────────────────────────────
const FILTER_OPTIONS = [
    { value: 'all',        label: 'All Items'    },
    { value: 'burgers',    label: '🍔 Burgers'   },
    { value: 'sides',      label: '🍟 Sides'     },
    { value: 'drinks',     label: '🥤 Drinks'    },
    { value: 'vegetarian', label: '🥬 Vegetarian' },
    { value: 'spicy',      label: '🌶️ Spicy'     },
]

// ─── MenuCatalogue ─────────────────────────────────────────────────────────────
// Renders the filter dropdown and a horizontally-scrollable carousel of cards.
// Products are sorted ascending by id before rendering.

function MenuCatalogue({ products = [], onItemOrder = null }) {
    const scrollContainerRef = useRef(null)
    const [filter, setFilter] = useState('all')

    // Sort ascending by id, then apply the selected filter
    const filtered = [...products]
        .sort((a, b) => a.id - b.id)
        .filter(p => {
            if (filter === 'all')        return true
            if (filter === 'vegetarian') return p.isVegetarian
            if (filter === 'spicy')      return p.isSpicy
            return p.category === filter
        })

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 344, behavior: 'smooth' })
        }
    }

    return (
        <div className="menu-section">
            <div className="menu-controls">
                <h2 className="menu-heading">Mo's Made-up Menu</h2>

                <div className="filter-wrapper">
                    <label htmlFor="cat-filter" className="filter-label">Filter</label>
                    <select
                        id="cat-filter"
                        className="filter-select"
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        {FILTER_OPTIONS.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Empty state */}
            {filtered.length === 0 ? (
                <p className="empty-state">No items available in this category.</p>
            ) : (
                <div className="carousel-wrapper">
                    <div className="scroll-container" ref={scrollContainerRef}>
                        {filtered.map(product => (
                            <MenuItem
                                key={product.id}
                                {...product}
                                onOrder={onItemOrder}
                            />
                        ))}
                    </div>

                    {/* Scroll-right arrow */}
                    <button className="scroll-button" onClick={scrollRight} aria-label="Scroll right">
                        ›
                    </button>
                </div>
            )}
        </div>
    )
}

export default MenuCatalogue
