import Brands from "./component/Brands";
import Deal from "./component/Deal";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Trend from "./component/Trend";
import { useEffect, useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div>
      <Navbar />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Trend />
      <Brands/>
      <Deal/>
      <Footer/>
    </div>
  );
};

export default App;
