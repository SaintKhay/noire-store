// import { Link } from "react-router-dom";
// export default function NavBar() {
//   return (
//     <nav className="flex gap-8 items-center justify-between p-4 bg-#fff text-black">
//       <p className="font-medium font-bold">NoireStore</p>

//       <ul className="flex gap-4 ">
//         <li className="text-sm md:text-lg hover:text-blue-500 transition hover:scale-105">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="text-sm md:text-lg hover:text-blue-500 transition hover:scale-105">
//           <Link href="/about">Shop</Link>
//         </li>
//         <li className="text-sm md:text-lg hover:text-blue-500 transition hover:scale-105">
//           <Link href="/contact">Contact</Link>
//         </li>
//       </ul>

//       <button className=" bg-blue-600 text-white px-3 py-2 rounded-lg transition hover:bg-blue-700 hover:scale-105">
//         Shop Now
//       </button>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="bg-[#f5f3ef] px-6 py-6 md:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-[#0b0b0b]"
        >
          NOIRÉ
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm transition-opacity hover:opacity-50">
            Home
          </Link>

          <Link
            to="/shop"
            className="text-sm transition-opacity hover:opacity-50"
          >
            Shop
          </Link>

          <Link
            to="/contact"
            className="text-sm transition-opacity hover:opacity-50"
          >
            Contact
          </Link>
        </div>

        {/* Cart */}
        <Link to="/cart" className="group flex items-center gap-2 text-sm">
          <HiOutlineShoppingBag className="text-xl transition-transform group-hover:-translate-y-0.5" />

          <span className="hidden sm:inline">Bag</span>

          <span className="text-[#8a8782]">({cartCount})</span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
