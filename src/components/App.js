import React, { useState } from "react";
import Nav from "./Nav";
import { Filter } from "./Filter";
import { Sort } from "./Sort";
import { AddHog } from "./AddHog";

import hogs from "../porkers_data";

function App() {
  const [filteredHog, setFilteredHog] = useState(null);
  const [isHide, setIsHide] = useState(true);
  const [isGreased, setIsGreased] = useState(true);
  const [hogsArr, setHogsArr] = useState(hogs);
  const [newHog, setNewHog] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: 0.0,
    "highest medal achieved": "wood",
    image: "",
  });

  const handleShowDetails = (name) => {
    setFilteredHog(name);
  };

  const handleSortName = () => {
    setHogsArr((prevHogs) => {
      const sortedHogsByName = prevHogs
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      return sortedHogsByName;
    });
  };

  const handleSortWeight = () => {
    setHogsArr((prevHogsArr) => {
      const sortedHogsByWeight = prevHogsArr
        .slice()
        .sort((a, b) => a.weight - b.weight);
      return sortedHogsByWeight;
    });
  };

  const handleGreasedHogs = () => {
    setIsGreased(!isGreased);
    const filterGreasedHogs = hogsArr.filter((hog) => hog.greased);

    isGreased ? setHogsArr(filterGreasedHogs) : setHogsArr(hogs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHogsArr((prevHog) => [...prevHog, newHog]);
    setNewHog({
      name: "",
      specialty: "",
      greased: false,
      weight: 0.0,
      "highest medal achieved": "wood",
      image: "",
    });
  };
  const Hog = () => {
    const hog = hogsArr.map((hog) => {
      const selectedHog = hog.name === filteredHog;
      return (
        <div
          className="ui card pigTile"
          key={hog.name}
          onClick={() => handleShowDetails(hog.name)}
        >
          <div className="image">
            <img src={hog.image} alt={hog.name} />
          </div>
          <div className="content">
            <a href="/" className="header smallHeader">{hog.name}</a>
            {selectedHog && (
              <div>
                <div className="meta">
                  <span className="date">{hog.specialty}</span>
                </div>
                <div className="description">
                  {hog["highest medal achieved"]}
                  <br />
                  {hog.greased ? "Greased" : "Not Greased"}
                </div>
                <div className="extra content">
                  <a href="/">Weight: {hog.weight}</a>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
    return hog;
  };
  return (
    <div className="App">
      <Nav />
      <AddHog
        newHog={newHog}
        setNewHog={setNewHog}
        handleSubmit={handleSubmit}
      />
      <div>
        <Sort
          handleSortName={handleSortName}
          handleSortWeight={handleSortWeight}
        />
        <Filter isGreased={isGreased} handleGreasedHogs={handleGreasedHogs} />
        <button onClick={() => setIsHide(!isHide)}>
          {isHide ? "Hide" : "Show"} Hogs
        </button>
      </div>
      {isHide && <Hog />}
    </div>
  );
}

export default App;