import React, { useState } from 'react'
import './Shop.css'

const products = [
	{
		id: 1,
		name: 'Смартфон',
		price: 4999,
		description: 'Смартфон із 6.5" екраном, 128 ГБ пам’яті, камера 48 Мп',
		image: '',
	},
	{
		id: 2,
		name: 'Смартфон',
		price: 4999,
		description: 'Смартфон з потужним акумулятором та процесором',
		image: '',
	},
	{
		id: 3,
		name: 'Смартфон',
		price: 4999,
		description: 'Компактний смартфон із високоякісною камерою',
		image: '',
	},
	{
		id: 4,
		name: 'Смартфон',
		price: 4999,
		description: 'Модель з AMOLED-дисплеєм і NFC',
		image: '',
	},
	{
		id: 5,
		name: 'Навушники',
		price: 999,
		description: 'Безпровідні навушники з шумопоглинанням',
		image: '',
	},
	{
		id: 6,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
	{
		id: 7,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
	{
		id: 8,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
	{
		id: 9,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
	{
		id: 10,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
	{
		id: 11,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
	{
		id: 12,
		name: 'Remax Chinen',
		price: 1720,
		description: 'Швидка зарядка 20W USB-C',
		image: '',
	},
]

const Shop = () => {
	const [selectedProduct, setSelectedProduct] = useState(null)

	const openModal = product => {
		setSelectedProduct(product)
	}

	const closeModal = () => {
		setSelectedProduct(null)
	}

	return (
		<div className='shop-container'>
			<h2 className='section-title'>Товари в нашому магазині</h2>
			<ul
				className='product-grid'
				style={{ listStyle: 'none', padding: 0, margin: 0 }}
			>
				{products.map(product => (
					<li key={product.id} className='product-card'>
						<h3>{product.name}</h3>
						<p className='price'>Ціна: {product.price} грн</p>
						<button onClick={() => openModal(product)}>Характеристики</button>
					</li>
				))}
			</ul>

			{selectedProduct && (
				<div className='modal'>
					<div className='modal-content'>
						<h3>{selectedProduct.name}</h3>
						<p>{selectedProduct.description}</p>
						<p>Ціна: {selectedProduct.price} грн</p>
						<button onClick={closeModal}>Закрити</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default Shop
