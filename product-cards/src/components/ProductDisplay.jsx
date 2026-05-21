import React, { useRef } from 'react';

function ProductCard({title, tagline, image, bgColor, textColor}) {
    return (
        <div className="product-card" style={{backgroundColor: bgColor, color: textColor}}>
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
                <p className="card-tagline">{tagline}</p>
            </div>
            <div className="card-image-wrapper">
                <img src={image} alt={title} className="card-image" />
            </div>
        </div>
    );
}

function ProductSection({heading, products}) {
    const scrollContainerRef = useRef(null);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({left: 350, behavior: 'smooth'});
        }
    };

    return (
        <section className="product-section">
            <h2 className="section-heading">{heading}</h2>

            <div className="carousel-wrapper">
                <div className="scroll-container" ref={scrollContainerRef}>
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))} 
                </div>

                <button className="scroll-button" onClick={scrollRight} aria-label="Next items">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default ProductSection;