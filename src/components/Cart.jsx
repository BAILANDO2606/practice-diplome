import React, { useState } from 'react'
import { useCart } from './CartContext'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
	const { cartItems, removeFromCart } = useCart()
	const [selectedItems, setSelectedItems] = useState([])
	const navigate = useNavigate()

	const toggleSelect = uniqueId => {
		setSelectedItems(prev =>
			prev.includes(uniqueId)
				? prev.filter(id => id !== uniqueId)
				: [...prev, uniqueId]
		)
	}

	const handleRemove = item => {
		if (
			window.confirm(`Ви впевнені, що хочете видалити "${item.name}" з кошика?`)
		) {
			removeFromCart(item.uniqueId)
			setSelectedItems(prev => prev.filter(id => id !== item.uniqueId))
		}
	}

	const handleOrder = () => {
		const itemsToOrder = cartItems.filter(item =>
			selectedItems.includes(item.uniqueId)
		)
		if (itemsToOrder.length === 0) {
			alert('Оберіть хоча б один товар для замовлення.')
			return
		}
		navigate('/checkout', { state: { items: itemsToOrder } })
	}

	return (
		<>
			<h2 className='section-title'>🛒 Ваш кошик</h2>
			{cartItems.length === 0 ? (
				<p className='empty-cart'>Кошик порожній</p>
			) : (
				<>
					<ul className='cart-list'>
						{cartItems.map(item => (
							<li key={item.uniqueId} className='cart-item'>
								<label>
									<input
										type='checkbox'
										checked={selectedItems.includes(item.uniqueId)}
										onChange={() => toggleSelect(item.uniqueId)}
									/>{' '}
									<strong>{item.name}</strong> — {item.price} грн
								</label>
								<button onClick={() => handleRemove(item)}>Видалити</button>
							</li>
						))}
					</ul>
					<button className='order-btn' onClick={handleOrder}>
						Оформити вибрані товари
					</button>
				</>
			)}
		</>
	)
}

export default Cart
