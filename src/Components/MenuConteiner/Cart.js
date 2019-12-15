import React from "react";
import "../../style/cart.css"
import pizza from "../../images/pizza.jpg";
import pasta from "../../images/pasta.jpg";

const menuData = [
  {
    id: 1,
    name: "Pizza",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pizza
  },
  {
    id: 2,
    price: 100,
    name: "pasta",
    ratting: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pasta
  },
  {
    id: 1,
    name: "Pizza",
    price: 55,
    ratting: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pizza
  },
  {
    id: 2,
    price: 100,
    name: "pasta",
    ratting: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore, quas voluptatem suscipit",
    imageUrl: pasta
  }
];

function Cart() {
  return (
    <div className="menu-wrapper" >
      {menuData.map(data => (
        <div className="menu">
          <img className="food-img" src={data.imageUrl} alt={data.name} />
          <div className="menu-description">
            <div className="name-price-ratting">
              <div>
                <span className="bold">{data.name}</span>
                <div className="bold">&#x20b9; {data.price}</div>
              </div>
              <div className="star">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
            <p className="item-dics">{data.description} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
