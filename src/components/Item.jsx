import React, {useState} from 'react';
import PropTypes from "prop-types";
import '../css/Item.css';

const Item = ({
  prodId,
  itemName,
  name,
  onClick,
  image,
  discount,
  price,
  priceWas,
  stock
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="itemWrapper" id={prodId}>
      <div className="itemCheckbox" onClick={() => {setIsSelected(!isSelected)}}>
        <button className={`${
          isSelected
          ? "itemCheckboxButtonSelected"
          : "itemCheckboxButton"
        }`}
        id={prodId}
        value={itemName}
        name={name}
        onClick={onClick}
        >
          {isSelected ? "✓" : null}
        </button>
      </div>
      <div className="itemImage">
        <img src={image} alt=""/>
      </div>
      {discount ? <div className="itemDiscount">
        {discount}
      </div> : null}
      <div className="itemDescription">
        <div className="itemName">{itemName}</div>
        <div> 
          <span className="price">{price}</span>    
          <span className="priceWas">{priceWas}</span>
        </div>
        <div className="stockWrapper">
          {stock > 2 ? (
            <span className="stock">{stock} in stock</span>
          ) : !stock > 0 ? (
            <span className="outOfStock">Out of stock</span>
          ) : stock === 1 ? (
            <>
              <div><span className="stock">{stock} in stock</span></div>
              <span className="lowOnStock">Low on stock</span>
            </>
          ): null}
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  prodId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.string,
  price: PropTypes.number.isRequired,
  priceWas: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired
};

export default Item;