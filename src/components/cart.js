import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context";

function Cart() {
  const { cart, setCart } = useContext(AuthContext);
  const [rate, setRate] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      ans += item.price * item.productQuantity;
    });
    setRate(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const removeProduct = (i) => {
    let temp = [...cart];
    temp.splice(i, 1);
    setCart([...temp]);
  };

  const handleDecrement = (item, i) => {
    let temp = [...cart];
    temp.map((product) => {
      if (item.id === product.id && item.productQuantity >= 2) {
        item.productQuantity -= 1;
      }
    });
    setCart([...temp]);
  };

  const handleIncrement = (item) => {
    let temp = [...cart];
    temp.map((product) => {
      if (item.id === product.id && item.productQuantity >= 1) {
        item.productQuantity += 1;
      }
    });
    setCart([...temp]);
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items">
          <h1 className="shopping-cart"> Shopping Cart</h1>
          {cart.map((item, i) => {
            return (
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img className="cart-image" src={item?.image} />
                    </td>
                    <td> {item?.title} </td>
                    <td className="count-td">
                      <button
                        className="add-less-btn"
                        onClick={handleDecrement.bind(this, item)}
                      >
                        -
                      </button>
                      <h5> {item.productQuantity}</h5>
                      <button
                        className="add-less-btn"
                        onClick={handleIncrement.bind(this, item)}
                      >
                        +
                      </button>
                    </td>
                    <td> ${item?.price} </td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={removeProduct.bind(this, i)}
                      >
                        {" "}
                        Remove{" "}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
        <div className="summary">
          <h3 className="head-summary"> Summary</h3>
          <h4 className="text-left"> Shipping</h4>
          <input placeholder="Select delivery mode"></input>
          <h4 className="text-left"> Give Code</h4>
          <input type="text" placeholder="Enter your code"></input>
          <h4 className="text-total"> TOTAL ${rate}</h4>
          <button className="checkout"> CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
