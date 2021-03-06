// Libraries
import React, { Suspense, useState } from "react";
import { useAsyncResource } from "./api/useAsyncResource";

// Styles
import styles from "./App.module.css";

// Component Imports
import {
  NavBar,
  ErrorBoundary,
  Error,
  Loading,
  CountryPicker,
  Cards,
  CurrentStats,
  History,
  Footer,
} from "./components/components";
import {
  fetchCountries,
  fetchCurrentData,
  fetchHistoryData,
  fetchFlag,
} from "./api/fetchData";

const initialCountry = { name: "All Countries", code: "all" };

function App() {
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [countries] = useAsyncResource(fetchCountries, []);
  const [currentData, fetchNewCurrentData] = useAsyncResource(
    fetchCurrentData,
    selectedCountry.code
  );
  const [historyData, fetchNewHistoryData] = useAsyncResource(
    fetchHistoryData,
    selectedCountry.code
  );
  const [flag, getNewFlag] = useAsyncResource(fetchFlag, selectedCountry.code);
  return (
    <div className={styles.container}>
      <NavBar />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <CountryPicker
            countries={countries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            fetchNewCurrentData={fetchNewCurrentData}
            fetchNewHistoryData={fetchNewHistoryData}
            getNewFlag={getNewFlag}
          />
          <Cards
            currentData={currentData}
            countryName={selectedCountry.name}
            flag={flag}
          />
          <CurrentStats currentData={currentData} />
          <History
            historyData={historyData}
            countryName={selectedCountry.name}
            flag={flag}
          />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
