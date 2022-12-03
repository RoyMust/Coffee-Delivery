import styled, { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext';
import NavBar from './globals/components/NavBar'
import { defaultTheme } from './globals/styles/DefaultTheme';
import RoutePages from './RoutePages';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <CartContextProvider>
          <NavBar />
          <RoutePages />
        </CartContextProvider>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  margin: 0 7.9rem;
  @media (max-width: 700px){
    margin: 0 0.8rem;
  }
`