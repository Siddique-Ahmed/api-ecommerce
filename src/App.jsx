import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  const [data, setData] = useState([]);

  const gettingStoreData = async () => {
    try {
      const storeData = await fetch("https://api.escuelajs.co/api/v1/products");
      const dataJson = await storeData.json();

      setData([...dataJson]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    gettingStoreData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <Cards cards={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
