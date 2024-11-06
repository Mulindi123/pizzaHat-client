import { Button } from "./Button";

const RestaurantCard = ({ restaurants, setSelectedRestaurant }) => {
  return (
    <div className="container mx-auto mb-10 p-4">
      <h1 className="text-3xl text-center p-4 font-bold mb-4">Restaurants</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full mb-10 bg-slate-400 border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Restaurant Id</th>
              <th className="py-2 px-4 border-b">Restaurant Name</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant) => (
              <tr key={restaurant.id} className="text-center">
                <td className="py-2 px-4 border-b">{restaurant.id}</td>
                <td className="py-2 px-4 border-b">{restaurant.name}</td>
                <td className="py-2 px-4 border-b">{restaurant.address}</td>
                <td className="py-2 px-4 border-b">
                  <Button
                    text="View Details"
                    variant="primary"
                    onClick={() => setSelectedRestaurant(restaurant)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantCard;
