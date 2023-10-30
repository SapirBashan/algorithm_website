import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './Home.css'
import ButtonsToPages from '../components/ButtonsToPages.js';
import { routeData ,buttonsData } from '../components/data.js';
import UpperMenu from '../components/UpperMenu';

function Home() {
	return (
		<div className="App">
		<UpperMenu />
		<BrowserRouter>
			<Routes>
				{/*Route to render the home page*/}
				<Route exact path='/' element={
						<div className="App">
							<div className="button-grid">
								{buttonsData.map((button, index) => (
								<ButtonsToPages key={index} text={button.text} link={button.link}  image={button.image}/>
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
		</div>
	)
}

export default Home