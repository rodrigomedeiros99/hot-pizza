export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl text-gray-800 font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Delicious Pizza has been serving authentic
              Italian pizzas made with love and tradition. Our recipes have been
              passed down through generations, ensuring each pizza delivers the
              true taste of Italy.
            </p>
            <p className="text-gray-600">
              We take pride in using only the finest ingredients, from our
              hand-kneaded dough to our specially crafted tomato sauce and
              carefully selected toppings. Every pizza is made to order and
              baked to perfection in our traditional wood-fired ovens.
            </p>
          </div>
          <div className="relative h-96" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0"
              alt="Pizza chef"
              className="absolute shadow-xl shadow-gray-300 inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
