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

function App() {
  return (
    <main>
      <header>
        <picture>
          <img src={logo} alt="" />
        </picture>

        <nav>
          <ul>
            <li>
              <a href="">How we work</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">View plans</a>
            </li>
          </ul>
        </nav>
      </header>
      <section title="hero" className="hero-section">
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button>View plans</button>
        <picture>
          <img src={heroMobile} alt="" className="mobile" />
          <img src={heroDesktop} alt="" className="desktop" />{" "}
        </picture>
      </section>
      <section title="description" className="description-section">
        <h2>We’re different</h2>
        <div className="card-section">
          <picture>
            <img src={card1} alt="" />
          </picture>
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="card-section">
          <picture>
            <img src={card2} alt="" />
          </picture>
          <h3>Affordable Prices</h3>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="card-section">
          <picture>
            <img src={card3} alt="" />
          </picture>
          <h3>People First</h3>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
        <div className="find-out-more">
          <h2>Find out more about how we work</h2>
          <button>How we work</button>
        </div>
      </section>
      <footer>
        <div>
          <picture>
            <img src={logo} alt="" />
          </picture>
          <div className="social-links">
            <a href="">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-grid">
          <ul>
            <li>Our company</li>
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
          <ul>
            <li>Help me</li>
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
          <ul>
            <li>Contact</li>
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
          <ul>
            <li>Others</li>
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
        </div>
      </footer>
    </main>
  );
}

export default App;
