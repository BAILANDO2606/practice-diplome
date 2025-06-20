import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const location = useLocation()

	// Функція для перемикання мобільного меню
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	// Функція для закриття мобільного меню
	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false)
	}

	// Ефект скролу для navbar
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY
			setIsScrolled(offset > 100)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Закриття мобільного меню при зміні маршруту
	useEffect(() => {
		closeMobileMenu()
	}, [location])

	// Закриття меню при зміні розміру вікна
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				closeMobileMenu()
			}
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Блокування скролу коли меню відкрите
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		// Очищення при демонтуванні компонента
		return () => {
			document.body.style.overflow = ''
		}
	}, [isMobileMenuOpen])

	// Обробка натискання ESC
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape' && isMobileMenuOpen) {
				closeMobileMenu()
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isMobileMenuOpen])

	// Функція для перевірки чи посилання активне
	const isActiveLink = path => {
		return location.pathname === path
	}

	return (
		<>
			{/* Overlay для мобільного меню */}
			<div
				className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
				onClick={closeMobileMenu}
			></div>

			<header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
				<nav className='navbar-container'>
					<h1 className='logo'>
						<Link to='/' onClick={closeMobileMenu}>
							Мобайл
						</Link>
					</h1>

					<ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
						<li>
							<Link
								to='/'
								className={isActiveLink('/') ? 'active' : ''}
								onClick={closeMobileMenu}
							>
								Головна
							</Link>
						</li>
						<li>
							<Link
								to='/about'
								className={isActiveLink('/about') ? 'active' : ''}
								onClick={closeMobileMenu}
							>
								Про нас
							</Link>
						</li>
						<li>
							<Link
								to='/shop'
								className={isActiveLink('/shop') ? 'active' : ''}
								onClick={closeMobileMenu}
							>
								Каталог
							</Link>
						</li>
					</ul>

					{/* Мобільна кнопка меню */}
					<button
						className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
						onClick={toggleMobileMenu}
						aria-label='Відкрити меню'
						aria-expanded={isMobileMenuOpen}
					>
						<span className='hamburger'></span>
						<span className='hamburger'></span>
						<span className='hamburger'></span>
					</button>
				</nav>
			</header>
		</>
	)
}

export default Navbar
