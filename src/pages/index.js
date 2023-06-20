import React, { useEffect, useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

import boy1 from "../assets/boy-1.png";
import boy2 from "../assets/boy-2.png";
import boy3 from "../assets/boy-3.png";
import boy4 from "../assets/boy-4.png";
import logoBlack from "../assets/logo-black.svg";
import logoWhite from "../assets/logo-white.svg";
import hamberger from "../assets/hamberger-open.svg";
import hambergerClose from "../assets/hamberger-close.svg";

export default function Index() {
  const [hambergerState, setHambergerState] = useState(window.screen.width<=576?'':'hidden');
  function toggleHambergerState(){
    setHambergerState(hambergerState?'':'hidden');
  }
  useEffect(()=>{
    window.addEventListener('blur',()=>setHambergerState(''));
  });  
  return (
    <div className="index-container">
      <header className="index-header">
        <Link onClick={()=>setHambergerState('')} to="/">
          <img className="index-logo-black" src={logoBlack} alt="logo" />
        </Link>
        <button
          className={`hamberger-open ${hambergerState}`}
          onClick={toggleHambergerState}
        >
          <img src={hamberger} alt="hamberger" />
        </button>
        <nav className={`index-nav-bar ${hambergerState?'':'hidden'}`}>
          <button className="hamberger-close" onClick={toggleHambergerState}>
            <img src={hambergerClose} alt="hamberger-close" />
          </button>
          <ul className="index-nav-links">
            <li>
              <Link onClick={()=>setHambergerState('')} className="index-nav" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={()=>setHambergerState('')} className="index-nav" to="#catalog">
                Catalog
              </Link>
            </li>
            <li>
              <Link onClick={()=>setHambergerState('')} className="index-nav" to="#about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={()=>setHambergerState('')} className="index-nav" to="#contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="hero-sec">
          <aside>
            <p className="index-hero-caption">
              <span>Discover a world of</span>{" "}
              <span className="index-hero-caption-sec1">POSSIBILITIES</span>{" "}
              <span>where every desire finds its</span>{" "}
              <span className="index-hero-caption-sec2">PERFECT MATCH</span>
            </p>
          </aside>

          <img className="index-img-1" src={boy1} alt="boy-1" />
        </div>

        <section id="catalog">
          <img className="index-img-2" src={boy2} alt="boy-2" />
          <div className="index-catalog-container">
            <div className="index-catalog-div1">
              <article className="index-catalog-1">
                <h3>Essence</h3>
                <p>Under ₹2500</p>
              </article>
              <article className="index-catalog-2">
                <h3>Elevate</h3>
                <p>Under $5000</p>
              </article>
            </div>
            <div className="index-catalog-div2">
              <article className="index-catalog-2">
                <h3>Radiance</h3>
                <p>Under $15000</p>
              </article>
              <article className="index-catalog-1">
                <h3>Prestige</h3>
                <p>Under $50000</p>
              </article>
            </div>
          </div>
          <h2 className="section-heading-catalog">CATALOG</h2>
        </section>

        <section id="about-us">
          <div className="about-us-container">
            <h2 className="section-heading-aboutus">ABOUT US</h2>
            <div className="catalog-about-us-content">
              <p>
                Discover a world of convenience and style at Esadhi.com. We are
                your premier online shopping destination, offering a wide range
                of products across categories such as fashion, electronics, home
                decor, and more. With a commitment to quality and customer
                satisfaction, we strive to provide you with a seamless shopping
                experience. Our curated collection features trusted brands and
                exquisite designs, ensuring that you find exactly what you're
                looking for. At esadhi.com, we prioritize your needs and offer
                dedicated customer support to assist you at every step. Join us
                today and embark on a journey of unparalleled convenience and
                endless possibilities.
              </p>
              <p className="about-us-para2">
                Thank you for choosing esadhi.com as your preferred destination
                for all your shopping desires. Shop with us and let us redefine
                your online shopping experience.
              </p>
            </div>
          </div>
          <img className="index-img-3" src={boy3} alt="boy-3" />
        </section>

        <section id="contact-us">
          <img className="index-img-3" src={boy4} alt="boy-4" />
          <div className="index-contact-us-container">
            <section>
              <h3 className="contact-us-form-header">Unleash Your Voice</h3>
              <form>
                <div>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="number" placeholder="Phone" />
                </div>
                <div>
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Place" />
                </div>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <button>Submit</button>
              </form>
            </section>
            <address>
              <dl>
                <dt>Contact</dt>
                <dd>
                  <a href="tel:+919876054321">9876054321</a>
                </dd>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:connect@esadhi.com">connect@esadhi.com</a>
                </dd>
                <dt>Address</dt>
                <dd>Belthangadi,Karnataka</dd>
              </dl>
            </address>
          </div>
          <h2 className="section-heading-contactus">CONTACT US</h2>
        </section>
      </main>

      <footer>
        <img src={logoWhite} alt="logo" />
        <p>&copy; esadhi.com. All rights reserved.</p>
        <p>
          Our website is infused with cookies to create a delightful browsing
          experience on Esadhi.com. By savoring these digital treats, you
          consent to their usage. For more information, please explore our
          Cookie Policy.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#catalog">Catalog</Link>
            </li>
            <li>
              <Link to="#about-us">About Us</Link>
            </li>
            <li>
              <Link to="#contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
