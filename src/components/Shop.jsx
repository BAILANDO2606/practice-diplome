import React from 'react'
import { useCart } from './CartContext'
import './Shop.css'

const products = [
	{ id: 1, name: 'Смартфон', price: 4999 },
	{ id: 2, name: 'Навушники', price: 999 },
	{ id: 3, name: 'Зарядний пристрій', price: 499 },
]

const Shop = () => {
	const { addToCart } = useCart()

	return (
		<>
			<h2 className='section-title'>🛍 Товари</h2>
			<ul
				className='product-grid'
				style={{ listStyle: 'none', padding: 0, margin: 0 }}
			>
				{products.map(product => (
					<li key={product.id} className='product-card'>
						<h3>{product.name}</h3>
						<p className='price'>Ціна: {product.price} грн</p>
						<button
							onClick={() =>
								addToCart({ ...product, uniqueId: Date.now() + Math.random() })
							}
						>
							Додати в кошик
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Shop
