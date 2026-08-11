import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import products from "../data/product";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  // Product doesn't exist
  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
            NOIRÉ
          </p>

          <h1 className="mt-4 text-4xl font-medium">Product not found</h1>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 bg-[#0b0b0b] px-6 py-3 text-xs uppercase tracking-[0.15em] text-[#f5f3ef]"
          >
            Back to Shop
            <HiArrowNarrowRight />
          </Link>
        </div>
      </main>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  return (
    <main className="min-h-screen bg-[#f5f3ef] px-6 py-12 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs uppercase tracking-wider text-[#8a8782]">
          <Link to="/" className="hover:text-[#0b0b0b]">
            Home
          </Link>

          <span>/</span>

          <Link to="/shop" className="hover:text-[#0b0b0b]">
            Shop
          </Link>

          <span>/</span>

          <span className="text-[#0b0b0b]">{product.name}</span>
        </div>

        {/* Product */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
              {product.category}
            </p>

            <h1 className="mt-3 text-4xl font-medium tracking-tight text-[#0b0b0b] md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-lg text-[#0b0b0b]">
              ₦{product.price.toLocaleString()}
            </p>

            <div className="my-8 h-px bg-black/10" />

            {/* Description */}
            <div>
              <p className="text-sm leading-7 text-[#6f6c68]">
                {product.description}
              </p>
            </div>

            {/* Size */}
            {product.sizes?.length > 0 && (
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-xs font-medium uppercase tracking-[0.15em]">
                    Select Size
                  </p>

                  <button className="text-xs text-[#8a8782] underline underline-offset-4">
                    Size Guide
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-14 border px-4 py-3 text-sm transition ${
                        selectedSize === size
                          ? "border-[#0b0b0b] bg-[#0b0b0b] text-[#f5f3ef]"
                          : "border-black/20 hover:border-[#0b0b0b]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em]">
                Quantity
              </p>

              <div className="flex w-fit items-center border border-black/20">
                <button
                  onClick={decreaseQuantity}
                  className="px-5 py-3 text-lg transition hover:bg-black/5"
                >
                  −
                </button>

                <span className="min-w-12 text-center text-sm">{quantity}</span>

                <button
                  onClick={increaseQuantity}
                  className="px-5 py-3 text-lg transition hover:bg-black/5"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="group mt-8 flex w-full items-center justify-center gap-3 bg-[#0b0b0b] px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#f5f3ef] transition hover:bg-[#252525]"
            >
              Add to Bag
              <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Product Details */}
            <div className="mt-10 border-t border-black/10">
              <div className="border-b border-black/10 py-5">
                <p className="text-xs uppercase tracking-[0.15em]">Details</p>

                <p className="mt-3 text-sm leading-6 text-[#6f6c68]">
                  Crafted with attention to proportion, texture, and everyday
                  wearability.
                </p>
              </div>

              <div className="border-b border-black/10 py-5">
                <p className="text-xs uppercase tracking-[0.15em]">Shipping</p>

                <p className="mt-3 text-sm leading-6 text-[#6f6c68]">
                  Complimentary shipping on orders over ₦150,000.
                </p>
              </div>

              <div className="py-5">
                <p className="text-xs uppercase tracking-[0.15em]">Returns</p>

                <p className="mt-3 text-sm leading-6 text-[#6f6c68]">
                  Returns accepted within 14 days of delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
