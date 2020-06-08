import React from "react";
import "./cart.css";

function MenuContainer(props) {
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
              <div className="retting"><i className="fas fa-star rettingStar"></i>{data.ratting}</div>
            </div>
            <p className="item-dics">{data.description} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuContainer;
