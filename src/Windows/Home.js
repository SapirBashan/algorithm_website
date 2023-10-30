import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home.css'
import ButtonsToPages from '../components/ButtonsToPages.js';
import { routeData ,buttonsData } from '../components/data.js';

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