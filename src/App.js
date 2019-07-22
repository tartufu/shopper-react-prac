import React from 'react';
import Nav from './Nav';
import ItemPage from  './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';
import './App.css';



class App extends React.Component {

    state = {
        activeTab: 0,
        cart: [],
        price: 0
    };

    handleTabChange = (index) => {
        this.setState({
            activeTab: index
        })
    }

    handleAddToCart = (item) => {

        var cartPrice = this.state.price;
        console.log(item);

        this.setState({
            cart: [...this.state.cart, item.id],
            price: cartPrice + item.price
        })
    }

    handleRemoveOne = (item) => {
        let index = this.state.cart.indexOf(item.id);
        let cartPrice = this.state.price
        this.setState({
            cart: [
              ...this.state.cart.slice(0, index),
              ...this.state.cart.slice(index + 1)
            ],
            price: cartPrice - item.price
        })
    }

    renderContent() {
        switch(this.state.activeTab) {
            default:
            case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>
            case 1: return this.renderCart();
        }
    }

    renderCart() {
        let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
            itemCounts[itemId] = itemCounts[itemId] || 0;
            itemCounts[itemId] ++;
            return itemCounts;
        }, {})

        let cartItems = Object.keys(itemCounts).map( itemId => {
            var item = items.find(item => item.id === parseInt(itemId, 10));

            return {
                ...item,
                count: itemCounts[itemId]
            }

        })
            return(
                <CartPage items={cartItems}
                onAddOne={this.handleAddToCart}
                onRemoveOne={this.handleRemoveOne}
                totalPrice={this.state.price} />
            )
    }

    render() {

        let {activeTab} = this.state;
        return(
            <div className="App">
              <Nav activeTab={activeTab} onTabChange={this.handleTabChange} cart={this.state}/>
              <main className="App-content">
                {this.renderContent()}
              </main>
            </div>
        )
    }
}

export default App;