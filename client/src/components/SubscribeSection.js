import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe-container">
      <h3>Get notified when new products arrive</h3>
      <div className="subscribe-input">
        <input type="email" placeholder="example@gmail.com" />
        <a href="#" className="subscribe-btn">
          Subscribe
        </a>
      </div>
    </section>
  );
};

export default Subscribe;
