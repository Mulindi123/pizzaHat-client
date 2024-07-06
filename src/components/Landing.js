import { Outlet } from "react-router-dom";
// import { ChevronRightIcon } from "@chakra-ui/icons";

function Landing() {
  return (
    <div className="min-h-screen p-4 bg-slate-600">
      <nav className="flex flex-wrap justify-center mb-4">
        <div className="p-2 md:p-4">
          <a href="/" className="inline-block px-4 py-2 text-white border rounded-lg border-black hover:bg-purple-600">
            Home
          </a>
        </div>
        <div className="p-2 md:p-4">
          <a href="/restaurants" className="inline-block px-4 py-2 text-white border rounded-lg border-black hover:bg-purple-600">
            Restaurants
          </a>
        </div>
        <div className="p-2 md:p-4">
          <a href="/pizzas" className="inline-block px-4 py-2 text-white border rounded-lg border-black hover:bg-purple-600">
            Pizza
          </a>
        </div>
        <div className="p-2 md:p-4">
          <a href="/restaurantPizzas" className="inline-block px-4 py-2 text-white border rounded-lg border-black hover:bg-purple-600">
            Add Pizza
          </a>
        </div>
        <div className="p-2 md:p-4">
          <a href="/contact" className="inline-block px-4 py-2 text-white rounded-lg hover:bg-purple-600 border border-black">
            Contact
          </a>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Landing;
