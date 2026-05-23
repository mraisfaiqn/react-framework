function Home({ onShopNow }) {
  return (
    <div className="home-page">
      <nav className="nav">
        <span className="nav-logo">✒ Faiq's Stationery</span>
      </nav>

      <div className="home-hero">
        <p className="home-eyebrow">Premium Stationery · Est. 2025</p>
        <h1 className="home-title">
          Write <em>beautifully.</em>
        </h1>
        <p className="home-sub">
          Curated pens, pencils &amp; tools for those who take their craft seriously.
        </p>
        <button className="btn-primary" onClick={onShopNow}>
          Shop Now →
        </button>
      </div>

      <p className="home-footer-tag">10 products · Free shipping above RM50</p>
    </div>
  )
}

export default Home