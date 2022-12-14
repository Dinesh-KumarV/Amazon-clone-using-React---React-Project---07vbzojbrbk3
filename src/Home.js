import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51y7l5AZFEL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Fila Mens Rosun Plus Sneaker"
            price={999.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/612zVSuFEgL._UY500_.jpg"
          />
          <Product
            id="2"
            title="Safari RAY Voyage Polycarbonate Printed Hard Sided Cabin Luggage"
            price={2499.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81vqvJvoVRL._UY741_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="boAt Nirvana 751 ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, ASAP Charge, Ambient Sound Mode, Immersive Sound, Carry Pouch(Gunmetal Grey)"
            price={3999.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/71ISIssoVFL._SY450_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={25000}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={1999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={12999.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51XdaN1gF7L._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
