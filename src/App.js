import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Shop from './components/Shop'
import Home from './Home'
import About from './About'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</Router>
	)
}

export default App
