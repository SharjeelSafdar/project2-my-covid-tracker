// Libraries
import React, { Suspense } from 'react';

// Styles
import styles from './App.module.css'

// Component Imports
import { NavBar, Loading, CountryPicker, Cards, CurrentStats, History } from './components/components'
import { GlobalProvider } from './context/context';

function App() {
  return (
    <div className={styles.container}>
      {/* <Suspense fallback={<Loading />}> */}
        <NavBar />
        {/* <Loading /> */}
        <GlobalProvider>
          <CountryPicker />
          <Cards />
          <CurrentStats />
          <History />
        </GlobalProvider>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
