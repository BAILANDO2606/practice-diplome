import React from 'react'
import './Home.css'

const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='home'>
				<section className='hero-minimal'>
					<div className='hero-minimal-content'>
						<div className='hero-icon'>🔧</div>
						<h1 className='hero-title'>Сервіс "Мобайл"</h1>
						<p className='hero-subtitle'>
							Ремонт смартфонів, ноутбуків та гаджетів
						</p>
					</div>
				</section>

				<section className='services'>
					<h2>Наші послуги</h2>
					<div className='service-list'>
						<div className='service-item'>📱 Ремонт смартфонів</div>
						<div className='service-item'>💻 Ремонт ноутбуків</div>
						<div className='service-item'>🔋 Заміна батарей</div>
						<div className='service-item'>📲 Відновлення після води</div>
						<div className='service-item'>🛠 Діагностика та консультація</div>
					</div>
				</section>

				<section className='why-us'>
					<h2>Чому обирають нас</h2>
					<ul>
						<li>⚡ Швидке виконання замовлень — від 30 хвилин</li>
						<li>🧰 Досвідчені майстри з 10+ років досвіду</li>
						<li>🛡 Гарантія до 6 місяців на всі види ремонту</li>
						<li>💬 Безкоштовна консультація перед ремонтом</li>
					</ul>
				</section>

				<section className='how-we-work'>
					<h2>Як ми працюємо</h2>
					<ol>
						<li> Ми проводимо безкоштовну діагностику</li>
						<li> Узгоджуємо терміни та вартість</li>
						<li> Проводимо ремонт і надаємо гарантію</li>
					</ol>
				</section>

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

				{/* Партнери */}
				<section className='partners'>
					<h2>Наші партнери</h2>
					<p>
						Ми співпрацюємо з офіційними постачальниками запчастин та сервісами
						Apple, Samsung, Xiaomi.
					</p>
					<div className='partner-logos'>
						<span>🍏 Apple</span> <span>📱 Samsung</span> <span>🔧 Xiaomi</span>
					</div>
				</section>

				{/* FAQ */}
				<section>
					<h2>Поширені запитання</h2>
					<p>
						<strong>Скільки триває ремонт?</strong>
					</p>
					<p>Від 30 хвилин до 1-2 днів — залежно від поломки.</p>

					<p>
						<strong>Чи є гарантія?</strong>
					</p>
					<p>Так, гарантія до 6 місяців на всі роботи.</p>

					<p>
						<strong>Чи можна залишити заявку онлайн?</strong>
					</p>
					<p>Так, натисніть кнопку "Замовити дзвінок".</p>
				</section>

				<section className='contact'>
					<h2>Графік роботи</h2>
					<ul>
						<li>Пн–Пт: 9:00 — 18:00</li>
						<li>Сб: 10:00 — 16:00</li>
						<li>Нд: Вихідний</li>
					</ul>
					<h2>Зв’яжіться з нами</h2>
					<a href='tel:+380965661667' className='btn-secondary'>
						<span className='mt-6'>Замовити дзвінок</span>
					</a>
				</section>
			</div>

			<footer className='footer'>
				<p>м. Коломия, вул. площа Шевченка, 23</p>
				<p>© 2025 Сервіс "Мобайл". Всі права захищено.</p>
			</footer>
		</div>
	)
}

export default Home
