import React, { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import "./style.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { AuthContext } from "./context";

function Home() {
  const { products, setProducts } = useContext(AuthContext);
  const { cart, setCart } = useContext(AuthContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    let temp = [];
    products.map((item) => {
      temp.push({ ...item, isCart: false, productQuantity: 1 });
    });
    setAllProducts([...temp]);
  }, [products]);

  const handleAddtoCart = (product) => {
    let temp = [...allProducts];
    temp.map((item) => {
      if (product.id === item.id) {
        item.isCart = true;
      }
    });
    setAllProducts([...temp]);
    let cartTemp = [...cart];
    cartTemp.push(product);
    setCart([...cartTemp]);
  };

  return (
    <div className="home-main">
      <div className="adv-content">
        <div className="text-adv">
          <h1>
            {" "}
            Shopping And <br></br> Department Store.
          </h1>
          <p>
            {" "}
            Shopping is a bit of relaxing hobby for me, Which <br />
            is sometimes troubling for the bank balance
          </p>
          <button className="learn-more"> Learn More</button>
        </div>
        <div className="image">
          <img src="adv-ecom-web.png" />
        </div>
      </div>
      <div>
        <h3 className="text"> Shop Our Top Categories</h3>
        {allProducts.map((product, id) => {
          return (
            <div className="products-all" key={product.id}>
              <div className="product">
                <img className="pro-img" src={product?.image} />
                <h4 className="title">{product?.title}</h4>
                <h4> ${product?.price}</h4>
                {product.isCart == true ? (
                  <button className="add">
                    {" "}
                    <BsCartCheckFill /> Added to cart
                  </button>
                ) : (
                  <button
                    key={id}
                    onClick={handleAddtoCart.bind(this, product)}
                    className="add"
                  >
                    {" "}
                    <BsFillCartPlusFill /> Add to Cart{" "}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
