
import { useState } from "react";

const EVFilter = () => {
  const cars = [
    { id: 1, brand: "Tesla", price: 95000, range: 500, type: "Sedan" },
    { id: 2, brand: "BYD", price: 45000, range: 420, type: "SUV" },
    { id: 3, brand: "Hyundai", price: 52000, range: 480, type: "SUV" },
    { id: 4, brand: "Lucid", price: 120000, range: 600, type: "Sedan" },
  ];

  const [filters, setFilters] = useState({
    brand: "All",
    maxPrice: 150000,
    minRange: 0,
    type: "All",
  });

  const filteredCars = cars.filter((car) => {
    return (
      (filters.brand === "All" || car.brand === filters.brand) &&
      car.price <= filters.maxPrice &&
      car.range >= filters.minRange &&
      (filters.type === "All" || car.type === filters.type)
    );
  });

  return (
    <>
      <h2>Filter EVs</h2>

      <select
        value={filters.brand}
        onChange={(e) =>
          setFilters({ ...filters, brand: e.target.value })
        }
      >
        <option value="All">All Brands</option>
        <option value="Tesla">Tesla</option>
        <option value="BYD">BYD</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Lucid">Lucid</option>
      </select>

      <input
        type="range"
        min="30000"
        max="150000"
        value={filters.maxPrice}
        onChange={(e) =>
          setFilters({ ...filters, maxPrice: Number(e.target.value) })
        }
      />
      <p>Up to ${filters.maxPrice}</p>

      <input
        type="number"
        placeholder="Min Range"
        value={filters.minRange}
        onChange={(e) =>
          setFilters({ ...filters, minRange: Number(e.target.value) })
        }
      />

      <select
        value={filters.type}
        onChange={(e) =>
          setFilters({ ...filters, type: e.target.value })
        }
      >
        <option value="All">All Types</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
      </select>

      <div className="grid">
        {filteredCars.map((car) => (
          <div key={car.id} className="card">
            <h3>{car.brand}</h3>
            <p>${car.price}</p>
            <p>{car.range} km</p>
            <p>{car.type}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EVFilter;
