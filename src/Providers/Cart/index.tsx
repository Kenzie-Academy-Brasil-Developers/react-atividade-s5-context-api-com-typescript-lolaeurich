import { createContext, ReactNode, useContext, useState } from "react"


//Com o CartProvider pronto, vamos entender os pontos que precisam ser tipados. Primeiro vamos criar uma 
//interface para definirmos o Product.
//Aqui, estou definindo a cara do meu produto. Ou seja, tudo o que ele tem.
export interface Product {
    id: number
    title: string
    description: string
    price: number
    image: string
}


//Agora precisar tipar as props que estamos recebendo no CartProvider, ou seja, um children. 
//Um children é um ReactNode, e devemos importar este do próprio React. 
//A importação e a interface ficam assim:
interface CartProps {
    children: ReactNode
}


//Vamos para a nossa última interface deste provider. Ela vai representar tudo aquilo que será 
//compartilhado por nosso provider, ou seja, tudo aquilo que está sendo passado dentro do nosso value. 
//Nesse sentido teremos que tipar cart, addProducts e deleteProducts. Fica assim:
//Cart é um array de produtos. 
export interface CartProviderData {
    cart: Product[]

    //Aqui, addProduct recebe um produto. o Void significa que não tem um retorno.
    addProduct: (product: Product) => void

    //Aqui, deleteProduct recebe um produto. O void significa que não tem um retorno.
    deleteProduct: (product: Product) => void
}


//Interface declarada, agora só passa-lá para o contexto.
const CartContext = createContext<CartProviderData>({} as CartProviderData)
//*era: const CartContext = createContext();


//Então, agora é só dizer que a nossa props corresponde a essa interface criada.
//Precisamos informar que o state cart receberá um array de produtos.
//Além de informar o state que ele receberá produtos, precisamos informar as funções addProduct 
//e deleteProduct que elas devem receber um produto como parâmetro.
export const CartProvider = ({ children }: CartProps) => {
    const [cart, setCart] = useState<Product[]>([])

    const addProduct = (product: Product) => {
        setCart([...cart, product])
    }

    //Repita o processo na deleteProduct também.
    const deleteProduct = (productToBeDeleted: Product) => {
        const newCart = cart.filter(
            (product) => product.title !== productToBeDeleted.title
        )
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{cart, addProduct, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)





/*export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addProduct = (product) => {
      setCart([...cart, product]);
    };


  const deleteProduct = (productToBeDeleted) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);*/