import styled from "styled-components"
import { HiTrash } from 'react-icons/hi'
import { CartItem } from "../../../contexts/CartContext"
import { formatMoney } from "../../../utils/formatMoney"
import { useCart } from './../../../hooks/useCart';

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeesSelected({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const coffeeTotal = coffee.price * coffee.quantity
  const formattedTotalPrice = formatMoney(coffeeTotal)
  const formattedPrice = formatMoney(coffee.price)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }
  
  function handleRemoveCartItem() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeCard>
      <img src={coffee.image} />
      <div style={{ flexDirection: 'column', width: '100%' }}>
        <div>
          <span>{coffee.title}</span>

        </div>
        <div style={{ justifyContent: 'flex-start', gap: '1rem' }}>
          <Count>
            <button onClick={handleDecrease} disabled={coffee.quantity <= 1}>-</button>
            <span> {coffee.quantity} </span>
            <button onClick={handleIncrease}>+</button>
          </Count>
          <Remove onClick={handleRemoveCartItem}>
            <HiTrash color='#353535' size={18} />
            <span>Remover</span>
          </Remove>
        </div>
      </div>
      <div style={{flexDirection:'column', justifyContent:'initial', alignItems:'center'}}>
        <p>R${formattedTotalPrice}</p>
        <span style={{fontSize:'0.6rem'}}>{coffee.quantity} x R${formattedPrice}</span>
      </div>
    </CoffeCard>
  )
}
const CoffeCard = styled.div`
  display: flex;
  padding: 1rem 0;
  font-size: 0.9rem;
  gap: 1rem;
  border-bottom: 1px solid #cacaca;

  div{
    display: flex;
    justify-content: space-between;
  }
  img{
    width: 4rem;
  }
`
const Count = styled.div`
  background-color: #b8b8b86a;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;

  button{
    font-size: 1.2rem;
    background-color: transparent;
    color: #696969;
    border: none;
    cursor: pointer;
  }
`
const Remove = styled.button`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #b8b8b86a;
  gap: 0.3rem;
`