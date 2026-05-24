// ─── RestaurantHeader ──────────────────────────────────────────────────────────
// Displays the restaurant name (<h1>), tagline (<p>), star rating, and cuisine.

function RestaurantHeader({
    restaurantName = "Our Restaurant",
    tagline = "Delicious food for everyone",
    rating = 0,
    cuisine = "International"
}) {

    // Returns an emoji star string based on the numeric rating (1–5)
    const renderStars = (stars) => {
        switch (stars) {
            case 1: return '★☆☆☆☆'
            case 2: return '★★☆☆☆'
            case 3: return '★★★☆☆'
            case 4: return '★★★★☆'
            case 5: return '★★★★★'
            default: return null
        }
    }

    return (
        <div className="header-section">
            <div className="header-container">
                {/* Restaurant name — accepts a plain string or JSX (e.g. with highlight spans) */}
                <h1 className="restaurant-name">{restaurantName}</h1>

                {/* Tagline */}
                <p className="restaurant-tagline">{tagline}</p>

                {/* Stars — wrapped in <p> so the string actually renders */}
                {renderStars(rating) && (
                    <p className="star-rating">{renderStars(rating)}</p>
                )}

                {/* Cuisine type */}
                <p className="cuisine-type">{cuisine}</p>
            </div>
        </div>
    )
}

export default RestaurantHeader
