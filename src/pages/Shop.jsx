import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/product";

function Shop() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  // Filter products
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      return 0;
    });

  const categories = ["All", "Men", "Women", "Accessories"];

  return (
    <main className="min-h-screen bg-[#f5f3ef] px-6 py-12 md:px-10 lg:px-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
          NOIRÉ Collection
        </p>

        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-[#0b0b0b] md:text-5xl">
              Shop
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-[#8a8782]">
              Discover our collection of contemporary essentials, designed with
              intention and made to last.
            </p>
          </div>

          <p className="text-sm text-[#8a8782]">
            {filteredProducts.length} Products
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#8a8782] focus:border-[#0b0b0b]"
        />
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-col gap-6 border-y border-black/10 py-4 md:flex-row md:items-center md:justify-between">
        {/* Categories */}
        <div className="flex gap-6 overflow-x-auto">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap text-sm transition ${
                category === item
                  ? "font-medium text-[#0b0b0b]"
                  : "text-[#8a8782] hover:text-[#0b0b0b]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Sorting */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-fit bg-transparent text-sm outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-60 items-center justify-center">
          <p className="text-sm text-[#8a8782]">No products found.</p>
        </div>
      )}
    </main>
  );
}

export default Shop;
