import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        {" "}
        Lastest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asasasa"
          name="MacBook"
          price={4545}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
        />
        <ProductCard
          productId="asdwed"
          name="Nikon D850 45.7MP Digital SLR Camera (Black)"
          price={225019}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/81WtQ64-SOL._SL1500_.jpg"
        />
        <ProductCard
          productId="asasasa"
          name="
OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)"
          price={29999}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg"
        />
        <ProductCard
          productId="asasasa"
          name="
Noise Pulse Go Buzz Smart Watch"
          price={1099}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg"
        />
        <ProductCard
          productId="asasasa"
          name="
ASUS TUF F15 Gaming Laptop, Intel Core i5-11400H 11th Gen"
          price={53990}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71-Fx3Vfq5L._SL1500_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
