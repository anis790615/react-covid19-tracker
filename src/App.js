import React, { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    })();

    return () => {
      // cleanup;
    };
  }, []);
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
