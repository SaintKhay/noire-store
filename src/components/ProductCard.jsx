import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="group">
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f3ef]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Quick Add */}
          <button
            className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 translate-y-2
          bg-white px-5 py-3 text-sm font-medium uppercase tracking-wider
          opacity-0 transition-all duration-300
          group-hover:translate-y-0 group-hover:opacity-100"
          >
            Quick Add
          </button>
        </div>
      </Link>

      {/* Product Information */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-[#8a8782]">
            {product.category}
          </p>

          <Link to={`/product/${product.id}`}>
            <h3 className="mt-1 text-sm font-medium text-[#0b0b0b]">
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="text-sm font-medium text-[#0b0b0b]">
          ₦{product.price.toLocaleString()}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
