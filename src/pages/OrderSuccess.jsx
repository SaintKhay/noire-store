import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

function OrderSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f3ef] px-6">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0b0b0b] text-[#f5f3ef]">
          <HiCheck className="text-2xl" />
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#8a8782]">
          Order Confirmed
        </p>

        <h1 className="mt-4 text-4xl font-medium tracking-tight text-[#0b0b0b] md:text-5xl">
          Thank you for shopping with NOIRÉ.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[#8a8782]">
          Your order has been received. We'll send your confirmation and
          delivery updates to your email.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block bg-[#0b0b0b] px-6 py-4 text-xs uppercase tracking-[0.15em] text-[#f5f3ef] transition hover:bg-[#252525]"
        >
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}

export default OrderSuccess;
