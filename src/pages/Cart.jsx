import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
            Your Bag
          </p>

          <h1 className="mt-4 text-4xl font-medium text-[#0b0b0b]">
            Your bag is empty.
          </h1>

          <p className="mt-4 text-sm text-[#8a8782]">
            Discover something worth taking home.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 bg-[#0b0b0b] px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#f5f3ef]"
          >
            Continue Shopping
            <HiArrowNarrowRight />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ef] px-6 py-12 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="border-b border-black/10 pb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
            NOIRÉ
          </p>

          <div className="mt-3 flex items-end justify-between">
            <h1 className="text-4xl font-medium text-[#0b0b0b] md:text-5xl">
              Your Bag
            </h1>

            <p className="text-sm text-[#8a8782]">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>
        </div>

        <div className="grid gap-12 py-10 lg:grid-cols-[1fr_380px]">
          {/* Cart Items */}
          <div>
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-5 border-b border-black/10 py-6 first:pt-0"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.id}`}
                  className="h-36 w-28 flex-shrink-0 overflow-hidden bg-white md:h-44 md:w-36"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </Link>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#8a8782]">
                        {item.category}
                      </p>

                      <Link
                        to={`/product/${item.id}`}
                        className="mt-1 block text-sm font-medium text-[#0b0b0b]"
                      >
                        {item.name}
                      </Link>

                      {item.size && (
                        <p className="mt-2 text-xs text-[#8a8782]">
                          Size: {item.size}
                        </p>
                      )}
                    </div>

                    <p className="text-sm font-medium">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border border-black/15">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                        className="px-3 py-2 text-sm hover:bg-black/5"
                      >
                        −
                      </button>

                      <span className="min-w-8 text-center text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                        className="px-3 py-2 text-sm hover:bg-black/5"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-xs uppercase tracking-wider text-[#8a8782] hover:text-[#0b0b0b]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <aside className="h-fit border-t border-black/10 pt-6 lg:sticky lg:top-8">
            <p className="text-xs uppercase tracking-[0.15em] text-[#8a8782]">
              Order Summary
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#8a8782]">Subtotal</span>

                <span>₦{cartTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8a8782]">Shipping</span>

                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="my-6 h-px bg-black/10" />

            <div className="flex justify-between text-base font-medium">
              <span>Total</span>

              <span>₦{cartTotal.toLocaleString()}</span>
            </div>

            <Link
              to="/checkout"
              className="group mt-8 flex w-full items-center justify-center gap-3 bg-[#0b0b0b] px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#f5f3ef] transition hover:bg-[#252525]"
            >
              Checkout
              <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/shop"
              className="mt-5 block text-center text-xs uppercase tracking-wider underline underline-offset-4"
            >
              Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Cart;
