import { createContext, useState } from "react"

export const shoppingCart = createContext()

const Context = ({ children }) => {
	const [cart, setCart] = useState([])

	return (
		<shoppingCart.Provider value={{ cart, setCart }}>
			{children}
		</shoppingCart.Provider>
	)
}

export default Context; 