import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col justify-center items-center px-4">
      <header className="w-full max-w-5xl text-center py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">
          Welcome to GlamZone Salon
        </h1>
        <p className="text-lg text-gray-600">
          Book beauty & hair appointments anytime, anywhere.
        </p>
      </header>

      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Hair Services</h2>
          <p className="text-gray-500 mb-4">
            Haircuts, coloring, styling and more from professional stylists.
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Book Now
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h2 className="text-2xl font-bold text-pink-600 mb-2">Beauty Services</h2>
          <p className="text-gray-500 mb-4">
            Facials, waxing, makeup and more from trusted beauty experts.
          </p>
          <Link
            to="/login"
            className="inline-block px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Book Now
          </Link>
        </div>
      </section>

      <footer className="mt-16 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GlamZone. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
