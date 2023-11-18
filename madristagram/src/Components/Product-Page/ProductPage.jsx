import React, {useState} from 'react';
import "./productpage.css"

const ProductPage = () => {
  const [imgId, setImgId] = useState(1);

  const imgBtns = [1, 2, 3, 4];

  const slideImage = (id) => {
    setImgId(id);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        {/* card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              {imgBtns.map((id) => (
                <img
                  key={id}
                  src={`jersey_images/jersey_${id}.jpg`}
                  alt={`jersey image ${id}`}
                  style={{ display: imgId === id ? 'block' : 'none' }}
                />
              ))}
            </div>
          </div>
          <div className="img-select">
            {imgBtns.map((id) => (
              <div className="img-item" key={id}>
                <a href="#" onClick={() => slideImage(id)}>
                  <img src={`jerseys_images/jersey_${id}.jpg`} alt={`jersey image ${id}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">Home Jersey '23-24</h2>
          <a href="#" className="product-link">Real Madrid</a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>
          <div className="product-price">
            <p className="last-price">Old Price: <span>Rs 257.00</span></p>
            <p className="new-price">New Price: <span>Rs 249.00 (5%)</span></p>
          </div>
          <div className="product-detail">
            <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Version: <span>Home</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Jerseys</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>
          <div className="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
          <div className="social-links">
            <p>Share At: </p>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
