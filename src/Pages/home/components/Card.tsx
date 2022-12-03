import { useState } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from './../../../hooks/useCart';
import { formatMoney } from '../../../utils/formatMoney';


export interface CoffeeProps {
  id: number
  image: string
  category: string[]
  title: string
  paragraph: string
  price: number
}

interface Coffee {
  coffee: CoffeeProps
}

export default function Card({ coffee }: Coffee) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()
  const formateddPrice = formatMoney(coffee.price)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }
  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <Container>
      <Header>
        <img src={coffee.image} />
        <strong style={{ display: 'flex', gap: '0.4rem' }} >{coffee.category.map((topic) => (<span key={`${coffee.id}`}>{topic}</span>))}</strong>
      </Header>
      <Description>
        <strong>{coffee.title}</strong>
        <p>{coffee.paragraph}</p>
      </Description>
      <Shop>
        <span>R$ <strong>{formateddPrice}</strong></span>
        <Count>
          <button disabled={quantity <= 1} onClick={handleDecrease}>-</button>
          <span> {quantity} </span>
          <button onClick={handleIncrease}>+</button>
        </Count>
        <ShoppingCart style={{cursor: 'pointer'}} onClick={handleAddToCart}>
          <FaShoppingCart />
        </ShoppingCart>
      </Shop>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 0 0.5rem 1rem;
  gap: 1rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
  background-color: #cecece35;
  border-bottom-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border: 2px solid #b2b2b223;

  button{
    cursor: pointer;
  }
`
const ShoppingCart = styled.div`
  padding: 0.3rem 0.4rem;
  background-color: #7300d1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dcf5ff;
`
const Description = styled.div`
  font-size: 1.1rem;
  strong{
    font-size: 1.3rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  p{
    color: gray;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
img{
  margin-top: -1.2rem;
  margin-bottom: 0.5rem;
  width: 6.2rem;
}
span{
  background-color: #ffd68b62;
  border-radius: 8px;
  padding: 0.1rem 0.3rem;
  color: #946000a8;
  text-transform: capitalize;
}
`
const Shop = styled.div`
  display: flex;
  gap: 10px ;
  display: flex;
  align-items: center;
  margin-top: -1rem;
  strong{
    font-size: 1.3rem;
  }
`
const Count = styled.div`
  background-color: #b8b8b86a;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    font-size: 1.4rem;
    background-color: transparent;
    color: #696969;
    border: none;
    cursor: pointer;
  }
`