import React from "react";
import "../../style/cart.css";
// import pizza from "../../images/pizza.jpg";
// import pasta from "../../images/pasta.jpg";




function Cart(props) {
  return (
    <div className="menu-wrapper">
      {props.menuData.map(data => (
        <div className="menu" key={data.id}>
          <img className="food-img" src={data.imageUrl} alt={data.name} />
          <div className="menu-description">
            <div className="name-price-ratting">
              <div>
                <span className="bold">{data.name}</span>
                <div className="bold">&#x20b9; {data.price}</div>
              </div>
              {/* <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div> */}
            </div>
            <p className="item-dics">{data.description} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
