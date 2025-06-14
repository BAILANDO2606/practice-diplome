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

					<section className='map-section'>
						<h2>Де ми знаходимося?</h2>
						<div className='map-container'>
							<iframe
								title='Магазин Мобайл на карті'
								width='100%'
								height='400'
								style={{ border: 0 }}
								loading='lazy'
								allowFullScreen
								referrerPolicy='no-referrer-when-downgrade'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165.15230895841682!2d25.038229073348184!3d48.52486588147771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736d2866b3f0c25%3A0xdf1f6f5d14d96ecf!2z0L_Qu9C-0YnQsCDQotCw0YDQsNGB0LAg0KjQtdCy0YfQtdC90LrQsCwgMjMsINCa0L7Qu9C-0LzQuNGPLCDQhtCy0LDQvdC-LdCk0YDQsNC90LrRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc4MjAw!5e0!3m2!1suk!2sua!4v1747514131138!5m2!1suk!2sua'
							></iframe>
						</div>
					</section>

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
