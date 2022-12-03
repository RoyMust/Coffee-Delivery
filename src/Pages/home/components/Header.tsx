import styled from 'styled-components'
import CoffeeDelivery from '../../../assets/images/CoffeDelivery.png'
import icon1 from '../../../assets/Icon.png'
import icon2 from '../../../assets/Icon2.png'
import icon3 from '../../../assets/Icon3.png'
import icon4 from '../../../assets/Icon4.png'

export default function Header() {
  return (
    <Container>
      <WrapperLeft>
        <WrapperColumn>
          <strong>Find the perfect coffee for any time of day</strong>
          <p>With Coffee Delivery you get your coffee wherever you are, anytime </p>
        </WrapperColumn>
        <WrapperGrid>
          <span><Icon1 src={icon1} />Simple and secure purchase</span>
          <span><Icon2 src={icon2} />Packaging keeps the coffee intact</span>
          <span><Icon3 src={icon3} />Fast and tracked delivery</span>
          <span><Icon4 src={icon4} />Coffee arrives fresh to you</span>
        </WrapperGrid>
      </WrapperLeft>
      <WrapperRight>
        <Logo src={CoffeeDelivery} />
      </WrapperRight>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  font-family: cursive;
  font-weight: 900;
  text-align: center;
  @media (max-width: 700px){
    flex-direction: column;
  }
`
const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  strong{
    font-family: 'Lobster', cursive;
    font-size: 4rem;
  }
`
const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  span{
    display: flex;
    align-items: center;
    gap: 3px;
    margin: 5px 0;
  }
`
const WrapperLeft = styled.div`
  flex: 1.7;
`
const WrapperRight = styled.div`
  flex: 1;
  display: flex;
`
const Logo = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: 1rem;
`
const Icon1 = styled.img``
const Icon2 = styled.img``
const Icon3 = styled.img``
const Icon4 = styled.img``