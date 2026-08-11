import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0b0b0b] px-6 py-12 text-[#f5f3ef] md:px-10 lg:px-16">
      {/* Newsletter */}
      <div className="border-b border-white/15 pb-12">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            Stay in the know
          </p>

          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
            Join the NOIRÉ world.
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/50">
            Subscribe for new collections, private releases, and stories from
            NOIRÉ.
          </p>

          <form className="mt-6 flex max-w-md border-b border-white/30">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-white/40"
            />

            <button
              type="submit"
              className="whitespace-nowrap px-2 text-xs uppercase tracking-wider transition-opacity hover:opacity-60"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            NOIRÉ
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
            Contemporary essentials designed with intention.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-white/50">
            Shop
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link to="/shop" className="transition-opacity hover:opacity-50">
                All Products
              </Link>
            </li>

            <li>
              <Link to="/shop" className="transition-opacity hover:opacity-50">
                Men
              </Link>
            </li>

            <li>
              <Link to="/shop" className="transition-opacity hover:opacity-50">
                Women
              </Link>
            </li>

            <li>
              <Link to="/shop" className="transition-opacity hover:opacity-50">
                Accessories
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-white/50">
            Help
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                to="/contact"
                className="transition-opacity hover:opacity-50"
              >
                Contact
              </Link>
            </li>

            <li>
              <a href="#" className="transition-opacity hover:opacity-50">
                Shipping & Delivery
              </a>
            </li>

            <li>
              <a href="#" className="transition-opacity hover:opacity-50">
                Returns
              </a>
            </li>

            <li>
              <a href="#" className="transition-opacity hover:opacity-50">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] text-white/50">
            Follow
          </h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href="#" className="transition-opacity hover:opacity-50">
                Instagram
              </a>
            </li>

            <li>
              <a href="#" className="transition-opacity hover:opacity-50">
                Pinterest
              </a>
            </li>

            <li>
              <a href="#" className="transition-opacity hover:opacity-50">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-4 border-t border-white/15 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} NOIRÉ. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>

          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
