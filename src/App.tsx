import "./App.css"
import CartProducts from "./Providers/Cart/CartProducts"
import ListOfProducts from "./Products/Products"

function App() {
  return (
    <div className="App">
      <ListOfProducts />
      <CartProducts />
    </div>
  )
}

export default App
