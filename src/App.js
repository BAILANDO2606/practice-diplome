import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Shop from './components/Shop'
import Home from './Home'
import About from './About'
import { CartProvider } from './components/CartContext'

function App() {
	return (
		<CartProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/shop' element={<Shop />} />
				</Routes>
			</Router>
		</CartProvider>
	)
}

export default App
