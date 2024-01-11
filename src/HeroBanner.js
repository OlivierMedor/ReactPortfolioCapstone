import "./HeroBanner.css"

function HeroBanner () {
    return (
    <>
        <section className="hero-banner">
            <article className="promo">
                <section className="promo-section">
                <p>
                <h3 className="promo-heading">Little Lemon</h3>
                <b>New York</b>
                <br />
                    <div className="restaurant-statement">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</div>
                    <br />
                    <button className="reserve-a-table">Reserve A Table</button>
                </p>
                </section>
                <img className="featured-promo-image" alt="burgers and fries" src={require('./assets/burgersandfries.png')} />
            </article>
        </section>
    </>
    )
}

export default HeroBanner;