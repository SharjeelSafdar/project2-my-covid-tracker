// Libraries
import React, { Suspense, useState } from 'react';
import { useAsyncResource } from 'use-async-resource';

// Styles
import styles from './App.module.css'

// Component Imports
import { NavBar, Loading, ErrorBoundary, CountryPicker, Cards, CurrentStats, History } from './components/components'
import { fetchCountries, fetchCurrentData, fetchHistoryData, fetchFlag } from './api/fetchData';

const initialCountry = { name: 'the Globe', code: 'all' };

function App() {
	const [ selectedCountry, setSelectedCountry ] = useState(initialCountry);
	const [ countries ] = useAsyncResource(fetchCountries, []);
	const [ currentData, fetchNewCurrentData ] = useAsyncResource(fetchCurrentData, selectedCountry.code);
	const [ historyData, fetchNewHistoryData ] = useAsyncResource(fetchHistoryData, selectedCountry.code);
	const [ flag, getNewFlag ] = useAsyncResource(fetchFlag, selectedCountry.code);
	return (
		<div className={styles.container}>
			<NavBar />
			<ErrorBoundary>
				<Suspense fallback={<Loading />}>
					<CountryPicker 
						countries={countries} 
						setSelectedCountry={setSelectedCountry}
						fetchNewCurrentData={fetchNewCurrentData} 
						fetchNewHistoryData={fetchNewHistoryData}
						getNewFlag={getNewFlag}
					/>
					<Cards currentData={currentData} country={selectedCountry.name} flag={flag} />
					<CurrentStats currentData={currentData} />
					<History history={historyData} country={selectedCountry.name} flag={flag} />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

export default App;
