import { MdStars } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import heroImage from "../assets/image/hero-image.jpeg";
import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="hero relative mt-8 md:mt-16 lg:mt-24">
//       <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg" />
//       <div className="absolute top-1/2 left-1/6 transform -translate-x-1/2 -translate-y-1/4 text-center text-white">
//         <div className="flex items-center  text-sm md:text-lg  items-center bg-white w-fit px-3 py-2 rounded-lg  ">
//           <h4 className="flex items-center gap-2 text-sm text-semibold md:text-lg  items-center text-black  ">
//             <MdStars /> Summer Sales
//           </h4>
//         </div>
//         <h1 className="text-2xl text-black  md:text-4xl font-bold mt-4">
//           Jackets for the
//           <br />
//           <span className="text-blue-600">Modern Men</span>
//         </h1>

//         <div className="flex gap-4 md:flex-row">
//           <a
//             href="/shop"
//             className="flex items-center gap-2 mt-4 bg-blue-600 text-white px-3 py-2 rounded-lg transition hover:bg-blue-700 hover:scale-102  w-fit justify-center text-sm md:text-lg"
//           >
//             Shop Now
//             <HiArrowNarrowRight />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="relative mt-8 overflow-hidden md:mt-16 lg:mt-24">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="NOIRÉ men's collection"
        className="h-[520px] w-full object-cover md:h-[650px] lg:h-[750px]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="absolute inset-y-0 left-0 flex items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.25em] text-white/80 md:text-sm">
            The Summer Collection
          </p>

          {/* Heading */}
          <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Designed for
            <br />
            <span className="italic">the modern man.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-sm leading-6 text-white/80 md:text-base">
            Refined essentials. Considered silhouettes. A collection built
            around effortless confidence.
          </p>

          {/* CTA */}
          <Link
            to="/shop"
            className="group mt-8 inline-flex items-center gap-3 border border-white px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Shop Collection
            <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
