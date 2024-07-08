import { useState } from "react";
import ProductCard from "../components/product-card";

const products = [
  {
    productId: "macbook",
    name: "MacBook",
    price: 4545,
    stock: 435,
    category: "Laptop",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
  },
  {
    productId: "nikon",
    name: "Nikon D850 45.7MP Digital SLR Camera (Black)",
    price: 225019,
    stock: 435,
    category: "Camera",
    photo: "https://m.media-amazon.com/images/I/81WtQ64-SOL._SL1500_.jpg",
  },
  {
    productId: "oneplus-11r",
    name: "OnePlus 11R 5G (Galactic Silver, 8GB RAM, 128GB Storage)",
    price: 29999,
    stock: 435,
    category: "Mobile Phones",
    photo: "https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg",
  },
  {
    productId: "noise-pulse",
    name: "Noise Pulse Go Buzz Smart Watch",
    price: 1099,
    stock: 435,
    category: "SmartWatches",
    photo: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
  },
  {
    productId: "asus-tuf",
    name: "ASUS TUF F15 Gaming Laptop, Intel Core i5-11400H 11th Gen",
    price: 53990,
    stock: 435,
    category: "Laptop",
    photo: "https://m.media-amazon.com/images/I/71-Fx3Vfq5L._SL1500_.jpg",
  },
  {
    productId: "oneplus-buds",
    name: "OnePlus Nord Buds 2r True Wireless",
    price: 1799,
    stock: 435,
    category: "Earphones",
    photo: "https://m.media-amazon.com/images/I/51oMWaW7tKL._SL1500_.jpg",
  },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addToCartHandler = () => {};
  const isNextPage = page < 4;
  const isPrevPage = page > 1;

  // Filtered products based on category and max price
  const filteredProducts = products.filter(
    (product) =>
      (category === "" || product.category === category) &&
      product.price <= maxPrice
  );

  return (
    <div className="product-search-name">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to high) </option>
            <option value="dsc">Price (high to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price : {maxPrice || ""}</h4>
          <input
            type="number"
            min={100}
            max={1000000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="SmartWatches">SmartWatches</option>
            <option value="Mobile Phones">Mobile Phones</option>
            <option value="Camera">Camera</option>
            <option value="Laptop">Laptop</option>
            <option value="Earphones">Earphones</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          {filteredProducts
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                name={product.name}
                price={product.price}
                stock={product.stock}
                handler={addToCartHandler}
                photo={product.photo}
              />
            ))}
        </div>

        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
