import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

function CartPage({ items, onAddOne, onRemoveOne, totalPrice }) {

    let cartPrice;

    if (totalPrice === 0) {
        cartPrice =
         <div className="Cart-empty">
           <h1> Your Cart is Empty! </h1>
           <h2> Why not add some products to it? </h2>
         </div>

    } else {
        cartPrice = <div className="Cart-price"> <h1> Total: ${totalPrice} </h1> </div>
    }

    return(
        <div>
        <ul className="CartPage-items">
          {items.map( item =>
            <li key={item.id} className="CartPage-item">
              <Item item={item} >
                <div className="CartItem-controls">
                  <button className="CartItem-removeOne" onClick={() => onRemoveOne(item)}>
                    &ndash;
                  </button>
                  <span className="CartItem-count"> {item.count} </span>
                  <button className="CartItem-addOne" onClick={() => onAddOne(item)}>
                    +
                  </button>
                </div>
              </Item>
            </li>
          )}
        </ul>
            {cartPrice}
        </div>
    )
};

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
}

export default CartPage;