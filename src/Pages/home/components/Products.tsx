import styled from 'styled-components'
import { CoffeeData } from '../../../globals/Data'
import Card from './Card'

export default function Products() {
  return (
    <Container>
      <Title>Our Cafes</Title>
      <Catalogy>
        {
          CoffeeData.map(coffee => {
            return (
              <Card
                key={coffee.id}
                coffee={coffee}
              />
            )
          })
        }
      </Catalogy>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`
const Title = styled.div`
  margin: 3rem 0;
  font-size: 3rem;
  font-family:cursive;
  font-weight: 900;
`
const Catalogy = styled.div`
  display: grid;
  grid-template-columns: 14rem 14rem 14rem 14rem;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem 1.5rem;

  @media (max-width: 700px){
    grid-template-columns: 1fr;
    margin: 0 2rem;
  }
`
