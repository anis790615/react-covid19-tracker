import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from "../../api/index";

import styles from "./CountryPicker.module.css";

const ChartPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCountries = await fetchCountries();
      setCountries(fetchedCountries);
    })();
  }, [setCountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
        defaultValue=""
      >
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default ChartPicker;
