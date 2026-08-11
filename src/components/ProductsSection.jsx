import ProductCard from "../components/ProductCard";
import products from "../data/product";

function ProductsSection() {
  console.log(products);
  return (
    <section className="px-6 py-20 md:px-10 lg:px-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
            New arrivals
          </p>

          <h2 className="mt-2 text-3xl font-medium md:text-4xl">
            Latest Collection
          </h2>
        </div>

        <a
          href="/shop"
          className="hidden text-sm uppercase tracking-wider underline underline-offset-4 md:block"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
