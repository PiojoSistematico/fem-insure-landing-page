import logo from "./assets/images/logo.svg";
import heroMobile from "./assets/images/image-intro-mobile.jpg";
import heroDesktop from "./assets/images/image-intro-desktop.jpg";

import card1 from "./assets/images/icon-snappy-process.svg";
import card2 from "./assets/images/icon-affordable-prices.svg";
import card3 from "./assets/images/icon-people-first.svg";

import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";
import instagram from "./assets/images/icon-instagram.svg";

import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <section title="hero" className="hero-section">
          <picture className="hero-container">
            <img src={heroMobile} alt="" className="mobile hero" />
            <img src={heroDesktop} alt="" className="desktop hero" />
          </picture>
          <div className="hero-text">
            <h1>Humanizing your insurance.</h1>
            <p>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button>View plans</button>
          </div>
        </section>
        <section title="description" className="description-section">
          <h2>We’re different</h2>
          <div className="card-section">
            <div className="card">
              <picture className="img-card-container">
                <img src={card1} alt="" />
              </picture>
              <h3>Snappy Process</h3>
              <p>
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </p>
            </div>
            <div className="card">
              <picture className="img-card-container">
                <img src={card2} alt="" />
              </picture>
              <h3>Affordable Prices</h3>
              <p>
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </p>
            </div>
            <div className="card">
              <picture className="img-card-container">
                <img src={card3} alt="" />
              </picture>
              <h3>People First</h3>
              <p>
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </p>
            </div>
          </div>
        </section>
        <section className="find-out-more-section">
          <div className="find-out-more-div">
            <h1>Find out more about how we work</h1>
            <button>How we work</button>
          </div>
        </section>
      </main>

      <footer>
        <picture>
          <img src={logo} alt="" />
        </picture>

        <div className="social-links">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={pinterest} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>

        <nav className="footer-nav">
          <h3>Our company</h3>
          <ul>
            <li>
              <a href="">How we work</a>
            </li>
            <li>
              <a href="">Why Insure?</a>
            </li>
            <li>
              <a href="">View plans</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
          </ul>
          <h3>Help me</h3>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Terms of use</a>
            </li>
            <li>
              <a href="">Privacy policy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="">Sales</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Live chat</a>
            </li>
          </ul>
          <h3>Others</h3>
          <ul>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
            <li>
              <a href="">Licenses</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
