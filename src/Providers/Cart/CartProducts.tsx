import { CartProviderData, useCart } from "."

const CartProducts = () => {
  const { cart, deleteProduct }: CartProviderData = useCart()

  return (
    <ul>
      {cart.map((elem) => {
        return (
          <li key={elem.id + 10}>
            <h3>{elem.title}</h3>
            <h5>{elem.description}</h5>
            <h6>R$ {elem.price}</h6>
            <img src={elem.image} alt={elem.description} />
            <button onClick={() => deleteProduct(elem)}>
              Remover ao carrinho
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default CartProducts