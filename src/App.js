import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 9000,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images-eu.ssl-images-amazon.com/images/I/41sGASjc4-L._SX300_SY300_QL70_FMwebp_.jpg',
          id: 0,
        },
        {
          price: 200,
          title: 'Calculator',
          qty: 2,
          img: 'http://content.oppictures.com/Master_Images/Master_Variants/Variant_1500/321646.JPG',
          id: 1,
        },
        {
          price: 10000,
          title: 'Refrigerator',
          qty: 2,
          img: 'https://images-eu.ssl-images-amazon.com/images/I/41IqmrBRjBL._SY445_SX342_QL70_FMwebp_.jpg',
          id: 3,
        }
      ]
    }
  }
  handleIncrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products
    })
  }
  handleDecrease = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0)
      products[index].qty -= 1;
    this.setState({
      products
    })
  }
  handleDelete = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const { products } = this.state;
    let cart = 0;
    products.map((product) => {
      cart += product.qty * product.price;
    })
    return cart;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          IncreaseQuantity={this.handleIncrease}
          DecreaseQuantity={this.handleDecrease}
          DeleteQuantity={this.handleDelete}
        />
        <div style={{ fontSize: 40, color: "black", paddingLeft: 5, border: "10px solid blue" }}> TOTAL=>RS.{this.getCartTotal()}</div>
      </div>
    );
  }
}
export default App


