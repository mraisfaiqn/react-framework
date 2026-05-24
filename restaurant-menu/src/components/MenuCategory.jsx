import MenuItem from './MenuItem'

// ─── MenuCategory ──────────────────────────────────────────────────────────────
// Renders a titled section for one category of menu items.
// - categoryName  : displayed as <h2>
// - items         : array of product objects
// - onItemOrder   : function(itemName, price) — passed down to each MenuItem

function MenuCategory({ categoryName = "Category", items = [], onItemOrder = null }) {

    // Guard: items must be a non-empty array
    const hasItems = Array.isArray(items) && items.length > 0

    return (
        <div className="menu-category">
            <h2 className="category-heading">{categoryName}</h2>

            {!hasItems ? (
                <p className="empty-state">No items available in this category.</p>
            ) : (
                <div className="category-grid">
                    {items.map(item => (
                        <MenuItem
                            key={item.id}
                            {...item}
                            onOrder={onItemOrder}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default MenuCategory
