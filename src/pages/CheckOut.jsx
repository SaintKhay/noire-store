import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const shipping = cartTotal >= 150000 ? 0 : 5000;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate("/order-success");
    }, 1000);
  };

  // Protect checkout from empty cart
  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a8782]">
            NOIRÉ
          </p>

          <h1 className="mt-4 text-4xl font-medium text-[#0b0b0b]">
            Your bag is empty.
          </h1>

          <p className="mt-4 text-sm text-[#8a8782]">
            Add something to your bag before checking out.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block bg-[#0b0b0b] px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#f5f3ef]"
          >
            Shop Collection
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

          <h1 className="mt-3 text-4xl font-medium tracking-tight text-[#0b0b0b] md:text-5xl">
            Checkout
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-12 py-10 lg:grid-cols-[1fr_400px]"
        >
          {/* Customer Details */}
          <div>
            {/* Contact */}
            <section>
              <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
                Contact Information
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <label htmlFor="email" className="text-xs text-[#8a8782]">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-xs text-[#8a8782]">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234..."
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>
              </div>
            </section>

            {/* Shipping */}
            <section className="mt-14">
              <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
                Delivery Information
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="text-xs text-[#8a8782]">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="text-xs text-[#8a8782]">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label htmlFor="address" className="text-xs text-[#8a8782]">
                    Delivery Address
                  </label>

                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Street address"
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="text-xs text-[#8a8782]">
                    City
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>

                {/* State */}
                <div>
                  <label htmlFor="state" className="text-xs text-[#8a8782]">
                    State
                  </label>

                  <input
                    id="state"
                    name="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none focus:border-[#0b0b0b]"
                  />
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="mt-14">
              <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
                Payment
              </h2>

              <div className="mt-6 border border-black/15 p-5">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full border-4 border-[#0b0b0b]" />

                  <p className="text-sm font-medium">Pay securely</p>
                </div>

                <p className="mt-3 text-xs leading-5 text-[#8a8782]">
                  You will be redirected to our secure payment provider to
                  complete your purchase.
                </p>
              </div>
            </section>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-10 w-full bg-[#0b0b0b] px-6 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#f5f3ef] transition hover:bg-[#252525] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting
                ? "Processing..."
                : `Place Order — ₦${total.toLocaleString()}`}
            </button>
          </div>

          {/* Order Summary */}
          <aside className="h-fit border-t border-black/10 pt-6 lg:sticky lg:top-8">
            <h2 className="text-xs font-medium uppercase tracking-[0.15em]">
              Your Order
            </h2>

            <div className="mt-6 space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-white">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center bg-[#0b0b0b] px-1 text-[10px] text-white">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="flex flex-1 justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>

                      {item.size && (
                        <p className="mt-1 text-xs text-[#8a8782]">
                          Size: {item.size}
                        </p>
                      )}
                    </div>

                    <p className="text-sm">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-8 h-px bg-black/10" />

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#8a8782]">Subtotal</span>

                <span>₦{cartTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#8a8782]">Shipping</span>

                <span>
                  {shipping === 0 ? "Free" : `₦${shipping.toLocaleString()}`}
                </span>
              </div>
            </div>

            <div className="my-6 h-px bg-black/10" />

            <div className="flex justify-between text-base font-medium">
              <span>Total</span>

              <span>₦{total.toLocaleString()}</span>
            </div>
          </aside>
        </form>
      </div>
    </main>
  );
}

export default Checkout;
