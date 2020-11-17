import React from "react";
import "./CardPage.scss";
import heroLogo from "../../assets/images/hero-association-logo.png";
import narutoAvatar from "../../assets/images/naruto.jpg";

function CardPage() {
  return (
    <div className="card-container">
      <article className="card">
        <div className="card-content">
          <p className="card-content__title">あなたのスーパーヒーローカード</p>
          <article className="card-main">
            <div className="card-main__avatar">
              <div className="card-main__avatar-rank">S</div>
              <div className="card-main__avatar-image-container">
                <img
                  src={narutoAvatar}
                  alt="Naruto"
                  className="card-main__avatar-image"
                />
              </div>
            </div>

            <div className="card-content-text">
              <div className="card-content-text__name">
                <p className="card-content-text__first-name">Nahid</p>
                <p className="card-content-text__last-name">Uzumaki</p>
              </div>
              <div className="card-content-text__other-info">
                <div className="card-content-text__label-column">
                  <p className="card-content-text__label">Age</p>
                  <p className="card-content-text__label">Birthday</p>
                  <p className="card-content-text__label">Blood Type</p>
                  <p className="card-content-text__label">Favorite Food</p>
                  <p className="card-content-text__label">Super Power</p>
                </div>
                <div className="card-content-text__value-column">
                  <p className="card-content-text__value">19</p>
                  <p className="card-content-text__value">12/12/2020</p>
                  <p className="card-content-text__value">A+</p>
                  <p className="card-content-text__value">Ichirako Ramen</p>
                  <p className="card-content-text__value">Eating</p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <span className="card__hero-logo">
          <img
            src={heroLogo}
            alt="heroLogo"
            className="card__hero-logo-image"
          />
        </span>
      </article>
      <div className="card-buttons">
        <button className="card-buttons__download">Download Card</button>
        <button className="card-buttons__get-short-url">Get Short Url</button>
      </div>
    </div>
  );
}

export default CardPage;
