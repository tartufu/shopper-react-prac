import React from 'react';
import './Nav.css'

const Nav = ({ activeTab, onTabChange, cart }) => {


    return(
        <nav className="App-nav">
          <div>
          <ul>
            <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}>
              <a onClick={() => onTabChange(0)}>Items</a>
            </li>

            <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}>
              <a onClick={() => onTabChange(1)}>Cart</a>
            </li>
          </ul>
          </div>
          <div className="Mini-cart" onClick={() => onTabChange(1)}>
            <p>
              <i class="fas fa-shopping-cart"></i>
              {cart.cart.length} items (${cart.price})
            </p>
          </div>
        </nav>
    )
}

export default Nav;