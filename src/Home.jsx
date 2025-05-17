import React from 'react'
import './Home.css'

const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='home'>
				<section className='hero-minimal'>
					<div className='hero-minimal-content'>
						<div className='hero-icon'>📱</div>
						<h1 className='hero-title'>Магазин "Мобайл"</h1>
						<p className='hero-subtitle'>Сучасні технології — поруч із вами</p>
						<button className='btn-primary'>Переглянути каталог</button>
					</div>
				</section>

				{/* Новий блок — Категорії */}
				<section className='categories'>
					<h2>Наш асортимент</h2>
					<div className='category-list'>
						<div className='category-item'>📱 Смартфони</div>
						<div className='category-item'>💻 Ноутбуки</div>
						<div className='category-item'>🎧 Аксесуари</div>
						<div className='category-item'>🔋 Зарядні пристрої</div>
					</div>
				</section>

				{/* Блок карти */}
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

				<section>
					<h2>Поширені запитання</h2>
					<p>
						<strong>Яка гарантія на товар?</strong>
					</p>
					<p>Усі товари мають офіційну гарантію від 12 місяців.</p>

					<p>
						<strong>Чи є доставка по Україні?</strong>
					</p>
					<p>Так, ми доставляємо Новою Поштою.</p>

					<p>
						<strong>Як оплатити?</strong>
					</p>
					<p>Готівкою, карткою або післяплатою.</p>
				</section>

				<section className='contact'>
					<h2>Графік роботи</h2>
					<ul>
						<li>Пн–Пт: 9:00 — 18:00</li>
						<li>Сб: 10:00 — 16:00</li>
						<li>Нд: Вихідний</li>
					</ul>

					<h2>Зв’яжіться з нами</h2>
					<p>📍 м. Коломия, вул. площа Шевченка, 23</p>
					<p>📞 +380 96-566-16-67</p>
					<button className='btn-secondary'>Замовити дзвінок</button>
				</section>
			</div>

			<footer className='footer'>
				<p>© 2025 Магазин "Мобайл". Всі права захищено.</p>
			</footer>
		</div>
	)
}

export default Home
