import React from 'react'
import './Home.css'

const Home = () => {
	return (
		<div className='home-wrapper'>
			<div className='home'>
				<div className='hero-minimal'>
					<div className='hero-minimal-content'>
						<div className='hero-icon'>🔧</div>
						<h1 className='hero-title'>Сервіс "Мобайл"</h1>
						<p className='hero-subtitle'>
							Ремонт смартфонів, ноутбуків та гаджетів
						</p>
					</div>
				</div>

				<div className='services'>
					<h2>Наші послуги</h2>
					<div className='service-list'>
						<div className='service-item'>📱 Ремонт смартфонів</div>
						<div className='service-item'>💻 Ремонт ноутбуків</div>
						<div className='service-item'>🔋 Заміна батарей</div>
						<div className='service-item'>📲 Відновлення після води</div>
						<div className='service-item'>🛠 Діагностика та консультація</div>
					</div>
				</div>

				<div className='why-us'>
					<h2>Чому обирають нас</h2>
					<ul>
						<li>⚡ Швидке виконання замовлень — від 30 хвилин</li>
						<li>🧰 Досвідчені майстри з 10+ років досвіду</li>
						<li>🛡 Гарантія до 6 місяців на всі види ремонту</li>
						<li>💬 Безкоштовна консультація перед ремонтом</li>
						<li>🔒 Конфіденційність даних клієнта</li>
						<li>🌱 Екологічний підхід до утилізації</li>
					</ul>
				</div>

				<div className='how-we-work'>
					<h2>Як ми працюємо</h2>
					<ol>
						<li>Ми проводимо безкоштовну діагностику</li>
						<li>Узгоджуємо терміни та вартість</li>
						<li>Проводимо ремонт і надаємо гарантію</li>
						<li>Пояснюємо причину поломки та даємо поради</li>
					</ol>
				</div>

				<div className='partners'>
					<h2>Наші партнери</h2>
					<div className='brand-logos'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg'
							alt='Samsung'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg'
							alt='Xiaomi'
						/>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
							alt='Apple'
						/>
					</div>
				</div>

				<div className='faq-block'>
					<h2>Поширені запитання</h2>
					<div className='faq-list'>
						<div className='faq-item'>
							<strong>Скільки триває ремонт?</strong>
							<p>Від 30 хвилин до 1-2 днів — залежно від поломки.</p>
						</div>
						<div className='faq-item'>
							<strong>Чи є гарантія?</strong>
							<p>Так, гарантія до 6 місяців на всі роботи.</p>
						</div>
						<div className='faq-item'>
							<strong>Чи можна залишити заявку онлайн?</strong>
							<p>Так, натисніть кнопку "Замовити дзвінок".</p>
						</div>
						<div className='faq-item'>
							<strong>Які бренди ви ремонтуєте?</strong>
							<p>
								Samsung, Apple, Xiaomi, Lenovo, Huawei, Realme, Oppo та інші.
							</p>
						</div>
					</div>
				</div>

				<div className='values-block'>
					<h2>Наші цінності</h2>
					<ul className='values-list'>
						<li>🤝 Довіра та чесність у відносинах з клієнтами</li>
						<li>📈 Постійний розвиток та навчання майстрів</li>
						<li>🌍 Відповідальність за екологію</li>
						<li>💡 Використання сучасних технологій</li>
						<li>⭐ Відкритість до нових ідей та інновацій</li>
						<li>🫶 Підтримка місцевої спільноти</li>
					</ul>
				</div>

				<div className='cta-block'>
					<h2>Залишились питання?</h2>
					<p>
						Зателефонуйте нам або залиште заявку — ми завжди раді допомогти!
					</p>
					<div className='button-wrapper'>
						<a href='tel:+380965661667' className='btn-secondary'>
							<span className='mt-6'>Замовити дзвінок</span>
						</a>
					</div>
				</div>

				<div className='contact'>
					<h2>Графік роботи</h2>
					<ul>
						<li>Пн–Пт: 9:00 — 18:00</li>
						<li>Сб: 10:00 — 16:00</li>
						<li>Нд: Вихідний</li>
					</ul>
					<h2>Зв’яжіться з нами</h2>
					<p className='contact-address'>м. Коломия, вул. площа Шевченка, 23</p>
					<p className='contact-email'>Email: mobile.service@gmail.com</p>
				</div>
			</div>

			<footer className='footer'>
				<p>м. Коломия, вул. площа Шевченка, 23</p>
				<p>© 2025 Сервіс "Мобайл". Всі права захищено.</p>
			</footer>
		</div>
	)
}

export default Home
