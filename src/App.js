import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

import coronaImage from "./images/covid-19.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };
  useEffect(() => {
    (async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    })();

    // return () => {
    //   // cleanup;
    // };
  }, []);
  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt="COVID-19 text" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart country={country} data={data} />
    </div>
  );
}

export default App;
