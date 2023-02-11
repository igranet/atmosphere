import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
