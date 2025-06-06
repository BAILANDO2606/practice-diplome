import { useEffect, useState } from 'react'
import axios from 'axios'

const Checkout = () => {
	const [settlements, setSettlements] = useState([])
	const [branches, setBranches] = useState([])

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		settlement: '',
		carrier: '',
		branch: '',
	})

	// Отримання населених пунктів
	useEffect(() => {
		fetch('https://api.delengine.com/settlements')
			.then(res => res.json())
			.then(data => setSettlements(data))
			.catch(err =>
				console.error('Помилка при завантаженні населених пунктів:', err)
			)
	}, [])

	// Отримання відділень при виборі міста й поштової служби
	useEffect(() => {
		if (formData.settlement && formData.carrier) {
			fetch(
				`https://api.delengine.com/branches?settlement=${formData.settlement}&carrier=${formData.carrier}`
			)
				.then(res => res.json())
				.then(data => setBranches(data))
				.catch(err => console.error('Помилка при завантаженні відділень:', err))
		}
	}, [formData.settlement, formData.carrier])

	// Зміна значення полів форми
	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	// Надсилання форми
	const handleSubmit = e => {
		e.preventDefault()
		console.log('Замовлення оформлено:', formData)
		alert(`Замовлення оформлено на ${formData.firstName} ${formData.lastName}`)
	}

	return (
		<div className='checkout-container'>
			<h2>Оформлення замовлення</h2>
			<form onSubmit={handleSubmit} className='checkout-form'>
				<label>
					Ім’я:
					<input
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Прізвище:
					<input
						type='text'
						name='lastName'
						value={formData.lastName}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Номер телефону:
					<input
						type='tel'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						required
						pattern='[0-9]{10}'
						placeholder='0501234567'
					/>
				</label>

				<label>
					Населений пункт:
					<select
						name='settlement'
						value={formData.settlement}
						onChange={handleChange}
						required
					>
						<option value=''>Оберіть населений пункт</option>
						{settlements.map(city => (
							<option key={city.id} value={city.name}>
								{city.name}
							</option>
						))}
					</select>
				</label>

				<label>
					Поштова служба:
					<select
						name='carrier'
						value={formData.carrier}
						onChange={handleChange}
						required
					>
						<option value=''>Оберіть службу</option>
						<option value='nova-poshta'>Нова Пошта</option>
						<option value='ukr-poshta'>Укрпошта</option>
					</select>
				</label>

				{branches.length > 0 && (
					<label>
						Відділення:
						<select
							name='branch'
							value={formData.branch}
							onChange={handleChange}
							required
						>
							<option value=''>Оберіть відділення</option>
							{branches.map(branch => (
								<option key={branch.id} value={branch.name}>
									{branch.name}
								</option>
							))}
						</select>
					</label>
				)}

				<button type='submit'>Підтвердити замовлення</button>
			</form>
		</div>
	)
}

export default Checkout
