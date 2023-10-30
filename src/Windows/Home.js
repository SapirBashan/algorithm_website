import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home.css'
import ButtonsToPages from '../components/ButtonsToPages.js';
import BubbleSort from './BubbleSort.js';
import BFS from './BFS.js';


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

function Home() {
	return (
		<BrowserRouter>

			{/*
			switch used to render only the first
			route that matches the location rather 
			than rendering all matching routes.
			 */}

			<Routes>
				{/*Route to render the home page*/}
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

				{/*a shorter way to write the route */}
				{routeData.map((route,index)=> (
					<Route key={index} exact path={route.path} element={route.element} />
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default Home