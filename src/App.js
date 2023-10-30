import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ButtonsToPages from './components/ButtonsToPages.js';
import BubbleSort from './windows/BubbleSort.js';
import BFS from './windows/BFS.js';


const buttonsData = [
	{ text: 'bubbleSort', link: '/src/windows/bubbleSort' },
	{ text: 'BFS', link: '/src/windows/BFS' },
	{ text: 'Button 3', link: '/button3' },
	{ text: 'Button 4', link: '/button2' },
	{ text: 'Button 5', link: '/button2' },
	{ text: 'Button 5', link: '/button2' },
	{ text: 'Button 6', link: '/button2' },
	{ text: 'Button 7', link: '/button2' },
	{ text: 'Button 8', link: '/button2' },
	{ text: 'Button 9', link: '/button2' },
	{ text: 'Button 10', link: '/button2' },
	{ text: 'Button 11', link: '/button2' },
	{ text: 'Button 12', link: '/button2' },
	{ text: 'Button 13', link: '/button2' },
  ];

  const routeData = [
	{ path: "/src/windows/bubbleSort", element: <BubbleSort/> },
	{ path: "/src/windows/BFS", element: <BFS/> },
	{ path: 'Button 3', link: '/button3' },
	{ path: 'Button 4', link: '/button2' },
	{ path: 'Button 5', link: '/button2' },
	{ path: 'Button 5', link: '/button2' },
	{ path: 'Button 6', link: '/button2' },
	{ path: 'Button 7', link: '/button2' },
	{ path: 'Button 8', link: '/button2' },
	{ path: 'Button 9', link: '/button2' },
	{ path: 'Button 10', link: '/button2' },
	{ path: 'Button 11', link: '/button2' },
	{ path: 'Button 12', link: '/button2' },
	{ path: 'Button 13', link: '/button2' },
  ];

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
						<div className="App">
							<div className="button-grid">
								{buttonsData.map((button, index) => (
								<ButtonsToPages key={index} text={button.text} link={button.link} />
								))}
							</div>
						</div>
					}>
				</Route>
				{routeData.map((route,index)=> (
					<Route key={index} exact path={route.path} element={route.element} />
				))}
				{/* <Route exact path="/src/windows/bubbleSort" element={<BubbleSort/>}>
				</Route>
				<Route exact path="/src/windows/BFS" element={<BFS/>}>
				</Route> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App