import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Home.css";
import ButtonsToPages from "../components/ButtonsToPages.js";
import { routeData, buttonsData } from "../components/data.js";
import UpperMenu from "../components/UpperMenu";

function Home() {
  const [filteredButtons, setFilteredButtons] = useState(buttonsData);

  // Reset search bar state when the component is re-rendered
  useEffect(() => {
    setFilteredButtons(buttonsData);
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  const handleOnSearch = (filteredButtons) => {
    setFilteredButtons(filteredButtons);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <UpperMenu onSearch={handleOnSearch} nameOfPage={""} />
        <Routes>
          {/* Route to render the home page */}
          <Route
            exact
            path="/"
            element={
              <div className="App">
                <div className="button-grid">
                  {filteredButtons.map((button, index) => (
                    <ButtonsToPages
                      key={index}
                      text={button.text}
                      link={button.link}
                      image={button.image}
                    />
                  ))}
                </div>
              </div>
            }
          />
          {/* Shorter way to write the routes */}
          {routeData.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
