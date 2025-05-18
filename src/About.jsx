import React from 'react'
import './About.css'

const About = () => {
	return (
		<div className='about-wrapper'>
			<div className='about-page'>
				<div className='about-container'>
					<h2 className='about-title'>Про магазин "Мобайл"</h2>

					<p className='about-text'>
						Магазин "Мобайл" — це надійний партнер у світі сучасних технологій.
						Ми пропонуємо великий вибір мобільних телефонів, аксесуарів та
						ґаджетів.
					</p>

					<p className='about-text'>
						Наша місія — зробити сучасні технології доступними кожному. Ми
						працюємо тільки з перевіреними постачальниками та гарантуємо якість
						кожного товару.
					</p>

					<p className='about-text'>
						Завітайте до нас та переконайтесь у нашій надійності,
						професіоналізмі та відмінному сервісі. Ми завжди раді вам!
					</p>

					<div className='info-grid'>
						<div className='info-box'>
							<img
								src='https://img.icons8.com/ios-filled/50/4caf50/phone.png'
								alt='Телефони'
							/>
							<h3>Широкий вибір</h3>
							<p>
								Мобільні телефони, смартфони, аксесуари, зарядні пристрої — все
								в одному місці.
							</p>
						</div>
						<div className='info-box'>
							<img
								src='https://img.icons8.com/ios-filled/50/4caf50/customer-support.png'
								alt='Підтримка'
							/>
							<h3>Сервіс та підтримка</h3>
							<p>
								Досвідчені консультанти допоможуть з вибором і дадуть відповідь
								на всі ваші запитання.
							</p>
						</div>
						<div className='info-box'>
							<img
								src='https://img.icons8.com/ios-filled/50/4caf50/warranty.png'
								alt='Гарантія'
							/>
							<h3>Гарантія якості</h3>
							<p>
								Тільки офіційні поставки та гарантійне обслуговування усіх
								пристроїв.
							</p>
						</div>
					</div>

					<section className='contact-section'>
						<h2>Зв’яжіться з нами</h2>
						<div className='contact-details'>
							<p>📍 м. Коломия, вул. площа Шевченка, 23</p>
							<span>📞 +380 96 566 16 67</span>
						</div>
					</section>
				</div>
			</div>

			<footer className='footer'>
				<p>м. Коломия, вул. площа Шевченка, 23</p>
				<p>© 2025 Магазин "Мобайл". Всі права захищено.</p>
			</footer>
		</div>
	)
}

export default About
