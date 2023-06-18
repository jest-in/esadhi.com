import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Index() {
  let anchorRef = React.createRef();
  return (
    <div className="index-container">
      <header>
        {/* Place logo here */}
        <nav>
          <ul>
            <li>
              <Link to="/">E-Sadhi</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#catalog">
                Catalog
              </Link>
            </li>
            <li>
              <Link to="#about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <aside>
          <p>
            Discover a world of poddibilities where every desire finds its match
          </p>
        </aside>

        <section id="catalog">
          <h2>Catalog</h2>
          <article>
            <h3>Essence</h3>
            <p>Under $2500</p>
          </article>
          <article>
            <h3>Elevate</h3>
            <p>Under $5000</p>
          </article>
          <article>
            <h3>Radiance</h3>
            <p>Under $15000</p>
          </article>
          <article>
            <h3>Prestige</h3>
            <p>Under $50000</p>
          </article>
        </section>

        <section id="about-us">
          <h2>About Us</h2>
          <p>
            Discover a world of convenience and style at Esadhi.com. We are your
            premier online shopping destination, offering a wide range of
            products across categories such as fashion, electronics, home decor,
            and more. With a commitment to quality and customer satisfaction, we
            strive to provide you with a seamless shopping experience. Our
            curated collection features trusted brands and exquisite designs,
            ensuring that you find exactly what you're looking for. At
            Esadhi.com, we prioritize your needs and offer dedicated customer
            support to assist you at every step. Join us today and embark on a
            journey of unparalleled convenience and endless possibilities.
          </p>
          <p>
            Thank you for choosing Esadhi.com as your preferred destination for
            all your shopping desires. Shop with us and let us redefine your
            online shopping experience.
          </p>
        </section>

        <section id="contact-us">
          <h2>Contact Us</h2>
          <section>
            <h3>Unleash Your Voice</h3>
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="number" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Place" />
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
        </section>
        {/* lorem*5000 */}
      </main>
      <footer>
        {/* section for logo */}
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="#catalog" innerRef={anchorRef}>
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink to="#about-us" innerRef={anchorRef}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="#contact-us" innerRef={anchorRef}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
