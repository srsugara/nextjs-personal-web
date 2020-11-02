import Navbar from '../components/navbar';

function Portfolio() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              There is no one who loves pain itself, who seeks after it and
              wants to have it, simply because it is pain
            </p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/sentinel.png" className="portfolio-image"></img>
                <h4 className="portfolio-name">Sentinel Dashboard</h4>
                <div className="portfolio-category">Web App</div>
              </div>
              <div className="portfolio-item">
                <img src="/elisian.jpeg" className="portfolio-image"></img>
                <h4 className="portfolio-name">Elisian Dashboard</h4>
                <div className="portfolio-category">Web App</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
