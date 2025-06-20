import React, { useState } from 'react'
import './Shop.css'

const products = [
	{
		id: 1,
		name: 'Чохол для iPhone 14 Pro',
		price: 299,
		description: 'Силіконовий чохол з підвищеним захистом від ударів, матовий',
		image:
			'https://images.unsplash.com/photo-1601593346740-925612772716?w=300&h=300&fit=crop',
	},
	{
		id: 2,
		name: 'Чохол Samsung Galaxy S23',
		price: 349,
		description: 'Прозорий чохол з посиленими кутами та захистом камери',
		image:
			'https://images.unsplash.com/photo-1625641936232-d5803c299111?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 3,
		name: 'Чохол Xiaomi Redmi Note 12',
		price: 199,
		description: 'Шкіряний чохол-книжка з відділенням для карток',
		image:
			'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&h=300&fit=crop',
	},
	{
		id: 4,
		name: 'Універсальний чохол',
		price: 159,
		description: "М'який силіконовий чохол для смартфонів 6.0-6.5 дюймів",
		image:
			'https://images.unsplash.com/photo-1704002100891-8ef33cfa1d62?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 5,
		name: 'Зарядка USB-C 20W',
		price: 399,
		description: 'Швидка зарядка з підтримкою Quick Charge 3.0',
		image:
			'https://images.unsplash.com/photo-1603539444875-76e7684265f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 6,
		name: 'Безпровідна зарядка 15W',
		price: 899,
		description: 'Бездротова зарядна станція з LED-індикатором',
		image:
			'https://images.unsplash.com/photo-1587037542794-6ca5f4772330?q=80&w=2537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 7,
		name: 'Автомобільна зарядка',
		price: 249,
		description: 'Подвійна USB зарядка для автомобіля 3.4A',
		image:
			'https://images.unsplash.com/photo-1692061157268-b128a8f37d6d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 8,
		name: 'Кабель USB-C 2м',
		price: 179,
		description: 'Міцний кабель з нейлоновою оплеткою для швидкої зарядки',
		image:
			'https://plus.unsplash.com/premium_photo-1669261149433-febd56c05327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYXJnZXJ8ZW58MHx8MHx8fDA%3D',
	},
	{
		id: 9,
		name: 'Power Bank 10000mAh',
		price: 799,
		description: 'Компактний павербанк з підтримкою швидкої зарядки PD 18W',
		image:
			'https://images.unsplash.com/photo-1632156752398-2b2cb4e6c907?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 10,
		name: 'Power Bank Xiaomi 20000mAh',
		price: 1299,
		description: 'Потужний павербанк з двома USB портами та цифровим дисплеєм',
		image:
			'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 11,
		name: 'Бездротовий Power Bank',
		price: 1599,
		description: 'Павербанк 15000mAh з функцією бездротової зарядки Qi',
		image:
			'https://images.unsplash.com/photo-1667411424245-6e1b9d0d055e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 12,
		name: 'Міні Power Bank 5000mAh',
		price: 549,
		description: 'Ультракомпактний павербанк розміром з кредитну картку',
		image:
			'https://images.unsplash.com/photo-1594843665794-446ce915d840?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
]

const Shop = () => {
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [imageErrors, setImageErrors] = useState({})

	const openModal = product => {
		setSelectedProduct(product)
	}

	const closeModal = () => {
		setSelectedProduct(null)
	}

	const handleImageError = productId => {
		setImageErrors(prev => ({
			...prev,
			[productId]: true,
		}))
	}

	const renderProductImage = product => {
		if (product.image && !imageErrors[product.id]) {
			return (
				<img
					src={product.image}
					alt={product.name}
					className='product-image'
					onError={() => handleImageError(product.id)}
				/>
			)
		} else {
			return <div className='product-image-placeholder'>{product.name}</div>
		}
	}

	const renderModalImage = product => {
		if (product.image && !imageErrors[product.id]) {
			return (
				<img
					src={product.image}
					alt={product.name}
					className='modal-image'
					onError={() => handleImageError(product.id)}
				/>
			)
		} else {
			return <div className='product-image-placeholder'>{product.name}</div>
		}
	}

	return (
		<div className='shop-container'>
			<h2 className='section-title'>Товари в нашому магазині</h2>
			<ul className='product-grid'>
				{products.map(product => (
					<li key={product.id} className='product-card'>
						<div className='product-image-container'>
							{renderProductImage(product)}
						</div>
						<h3>{product.name}</h3>
						<p className='price'>Ціна: {product.price} грн</p>
						<button onClick={() => openModal(product)}>Характеристики</button>
					</li>
				))}
			</ul>

			{selectedProduct && (
				<div className='modal'>
					<div className='modal-content'>
						<div className='modal-image-container'>
							{renderModalImage(selectedProduct)}
						</div>
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
