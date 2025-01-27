import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import logoBlack from "../assets/logo-black.svg";
import image from "../assets/catalogue/prestige/P1.png";

export default function Catalog() {
    const {query}=useParams();
  return (
    <div className="catalog-container">
      <header className='catalogue-header'>
        <Link to="/">
          <img className='catalogue-header-logo' src={logoBlack} alt="logo" />
        </Link>
        <div className='catalogue-header-caption'>
          <h1>{`Explore ${query}`}</h1>
          <p>Unleash the Extraordinary (From Rs 2,500)</p>
        </div>
        <input className='catalogue-header-search-bar' type="text" placeholder='Search' />
      </header>

      <main className='catalogue-content-container'>
        <article className='catalogue-product-container'>
          <img className='catalogue-product-image' src={image} alt="product" />
          <div className='catalogue-product-desc-div'>
            <h2>SMART WATCH</h2>
            <p>
              Choose from our curated selection of smartwatches, offering a range
              of brands to suit your budget and preferences. Explore the
              affordable options under Rs 2500 or dive into the enhanced features
              of brands under Rs 5000. Stay connected, track your fitness goals,
              and embrace the convenience of wearable technology. Upgrade your
              wristwear today and experience the power of smartwatches!
            </p>
          </div>
        </article>
        <article className='catalogue-product-container'>
          <img className='catalogue-product-image' src={image} alt="product" />
          <div className='catalogue-product-desc-div'>
            <h2>SMART WATCH</h2>
            <p>
              Choose from our curated selection of smartwatches, offering a range
              of brands to suit your budget and preferences. Explore the
              affordable options under Rs 2500 or dive into the enhanced features
              of brands under Rs 5000. Stay connected, track your fitness goals,
              and embrace the convenience of wearable technology. Upgrade your
              wristwear today and experience the power of smartwatches!
              
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
