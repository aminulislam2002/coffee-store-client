import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <div className="bg-[#F4F3F0] p-10 md:px-24">
        <div className="bg-red-300 flex justify-between p-5 mb-10">
          <h1 className="text-3xl text-purple-600 text-center font-semibold">Coffee Stored: {loadedCoffees.length}</h1>
          <div>
            <Link to="/addCoffee">
              <button className="bg-blue-400 py-3 px-5 rounded text-white">Add a new coffee</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
