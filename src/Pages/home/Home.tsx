import styled from 'styled-components'
import Header from './components/Header'
import Products from './components/Products'
import { useCart } from './../../hooks/useCart';

export default function Home() {
  const { cartItems } = useCart()
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5.5rem;
`