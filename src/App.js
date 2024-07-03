import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import RestaurantPage from "./components/RestaurantsPage";
import Landing from "./components/Landing";
import Pizzas from './components/Pizzas';
import PostRestaurantPizzas from './components/PostRestaurantPizzas';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-500 min-h-screen">
    <Routes>
      <Route element= {<Landing/>}>
        <Route path= "/" element={<Home />} />
        <Route path= "/restaurants" element={<RestaurantPage />} />
        <Route path= "/pizzas" element={<Pizzas />} />
        <Route path= "/restaurantPizzas" element={<PostRestaurantPizzas />} />
        <Route path= "/contact" element={<Contact />} />
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
