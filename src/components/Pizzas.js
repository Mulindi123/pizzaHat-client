import { useState, useEffect } from "react";

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("https://pizzahat-server.onrender.com/pizzas")
      .then((r) => r.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 p-4 sm:p-6 md:p-10">
      <div className="container mx-auto bg-slate-400 p-4 rounded-md">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Pizzas</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-600">
                <th className="py-2 px-2 sm:px-4 border-b text-white font-extrabold text-xs sm:text-base">ID</th>
                <th className="py-2 px-2 sm:px-4 border-b text-white font-extrabold text-xs sm:text-base">Name</th>
                <th className="py-2 px-2 sm:px-4 border-b text-white font-extrabold text-xs sm:text-base">Ingredients</th>
              </tr>
            </thead>
            <tbody>
              {pizzas.map((pizza) => (
                <tr key={pizza.id} className="text-center">
                  <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-sm">{pizza.id}</td>
                  <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-sm">{pizza.name}</td>
                  <td className="py-2 px-2 sm:px-4 border-b text-xs sm:text-sm">{pizza.ingredients}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
