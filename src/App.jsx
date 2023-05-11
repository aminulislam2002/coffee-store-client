import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <div className="bg-[#F4F3F0] p-10 md:px-24">
        <div className="bg-red-300 flex justify-between p-5 mb-10">
          <h1 className="text-3xl text-purple-600 text-center font-semibold">Coffee Stored: {coffees.length}</h1>
          <div>
            <Link to="/addCoffee">
              <button className="bg-blue-400 py-3 px-5 rounded text-white">Add a new coffee</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
