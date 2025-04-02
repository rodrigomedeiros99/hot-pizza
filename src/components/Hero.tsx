import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div
        className="relative z-10 text-center text-white px-4"
        data-aos="fade-up"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hot Pizza</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience the authentic taste of Italy with our handcrafted pizzas
          made from the finest ingredients.
        </p>
        <Link href="/order">
          <button className="px-8 py-4 bg-red-500 text-white text-lg cursor-pointer rounded-md hover:bg-red-600 transition-colors">
            Order Now
          </button>
        </Link>
      </div>
    </section>
  );
}
