import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let fetchUrl = URL;
  if (country) {
    fetchUrl = `${URL}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(fetchUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {}
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    // console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {}
};
