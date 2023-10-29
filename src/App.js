import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ButtonsToPages from './Components/ButtonsToPages.js';
// Importing newly created components
import BubbleSort from './Windows/BubbleSort.js';

function App() {
	return (
		// BrowserRouter to wrap all
		// the other components
		<BrowserRouter>
			{/*switch used to render only the first
	route that matches the location rather
	than rendering all matching routes. */}
			<Routes>
				<Route exact path='/' element={
						<ButtonsToPages text='Open First Component' link='/src/windows/bubbleSort' />
					}>
				</Route>
				<Route exact path="/src/windows/bubbleSort" element={<BubbleSort/>}>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App