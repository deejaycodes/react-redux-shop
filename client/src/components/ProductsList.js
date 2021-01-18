import React from "react";
import background from "./poduct_bg.png";
import ProductItem from "./ProductItem";

import { connect } from "react-redux";

const ProductsList = ({ product = [] }) => {
  return (
    <div style={{ background: `url(${background})` }}>
      <section className="product">
        <div className="p-heading">
          <h3>Trendy Arrivals</h3>
        </div>
        <div className="product-container">
          {product.map((product) => {
            return <ProductItem key={product.id} {...product} />;
          })}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.products,
  };
};
//const mapDispatchToProps = { UPDATE_LOCAL_STORAGE };
export default connect(mapStateToProps)(ProductsList);
