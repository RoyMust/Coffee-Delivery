import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { IoLocation } from 'react-icons/io5'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../hooks/useCart'

export default function NavBar() {
  const { cartQuantity } = useCart()

  return (
    <Container>
      <NavLink to={'/'}>
        <Logo src={logo}></Logo>
      </NavLink>
      <div style={{ display: 'flex' }}>
        <Local>
          <IoLocation />
          <span style={{ cursor: 'default' }}>Realengo, RJ</span>
        </Local>
        <NavLink to={'/Checkout'}>
          <Shop>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <FaShoppingCart size={18} />
          </Shop>
        </NavLink>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 61rem;
  height: 4.1rem;
  display: flex;
  top: 0;
  align-items: center;
  margin-bottom: 3rem;
  position: fixed;
  justify-content: space-between;
  background-color: #ffffffec;
  z-index: 10;
  a{
    background-color: #ffffffea;
    padding: 0 5px;
    border-radius: 5px;
  }
`
const Logo = styled.img`
  width: 5rem;
`
const Local = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  background-color: #e9d3fc;
  color: #a452e7;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 0.5rem;
  border-radius: 8px;
`
const Shop = styled.button`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  background-color: #fbd286;
  color: #ac7817;
  padding: 0.6rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid gray;
  position: relative;
  span{
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 30%;
    top: calc(-1rem / 2);
    right: calc(-1rem / 2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 700;
    background-color: #a97619;
  }
`
