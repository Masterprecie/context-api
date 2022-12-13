import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { shoppingCart } from '../context/Context'
import './style.css'

const Header = () => {
	const { cart } = useContext(shoppingCart)


	return (
		<div>
			<ul className='nav'>
				<li>
					<Link to='/'>Home Page </Link>
				</li>
				<li>
					<Link to='/cart'>Cart ({cart.length}) </Link>
				</li>
			</ul>
		</div>
	)
}

export default Header