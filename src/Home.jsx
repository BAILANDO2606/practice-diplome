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
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10661.778319384967!2d25.03745!3d48.52804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734351d4a8e34db%3A0xb1f4d5f20c40b74d!2z0JrQuNC10LHQvdC40YbRjNC60LAg0KLQtdCw0YLRgCDQvNC-0YHQutCw0YDQvdCwLCAyMywg0JrQuNGX0LLRgdGM0LrQsCDQnNC-0YHQutCw0YDQvdC-0LPQviwg0KfQtdGA0LrQsNC90YHQutCw0Y8sIDA3MDAw!5e0!3m2!1suk!2sua!4v1715963135863!5m2!1suk!2sua'
						></iframe>
					</div>
				</section>

				{/* Блок — Режим роботи */}
				<section className='working-hours'>
					<h2>Графік роботи</h2>
					<ul>
						<li>Пн–Пт: 9:00 — 18:00</li>
						<li>Сб: 10:00 — 16:00</li>
						<li>Нд: Вихідний</li>
					</ul>
				</section>

				{/* FAQ */}
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

				{/* Відгуки */}
				<section className='reviews'>
					<h2>Що кажуть клієнти</h2>
					<div className='review-item'>
						<p>⭐⭐⭐⭐⭐ — "Дуже швидке обслуговування та якісна техніка!"</p>
						<p>
							<em>— Олена К.</em>
						</p>
					</div>
					<div className='review-item'>
						<p>⭐⭐⭐⭐⭐ — "Купував тут телефон — все чудово, рекомендую."</p>
						<p>
							<em>— Андрій М.</em>
						</p>
					</div>
				</section>

				{/* Контакти */}
				<section className='contact'>
					<h2>Зв’яжіться з нами</h2>
					<p>📍 м. Коломия, вул. площа Шевченка, 23</p>
					<p>📞 +380 96 123 45 67</p>
					<p>📧 mobile.shop@example.com</p>
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
