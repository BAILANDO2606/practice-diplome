import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<header className='navbar'>
			<nav className='navbar-container'>
				<h1 className='logo'>
					<Link to='/'>Мобайл</Link>
				</h1>
				<ul className='nav-links'>
					<li>
						<Link to='/'>Головна</Link>
					</li>
					<li>
						<Link to='/about'>Про нас</Link>
					</li>
					<li>
						<Link to='/shop'>Магазин</Link>
					</li>
					<li>
						<Link to='/cart'>Кошик</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
