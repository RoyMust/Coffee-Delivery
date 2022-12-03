import styled from 'styled-components'
import CompleteOrderForm from '../orderConfirm/components/CompleteOrderForm'
import { useCart } from './../../hooks/useCart'
import { CoffeesSelected } from './components/CoffeesSelected'
import { formatMoney } from '../../utils/formatMoney'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

export const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe a Cidade'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
})


export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export default function Checkout() {
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const formattedPrice = formatMoney(cartItemsTotal)
  const formattedTotalPrice = formatMoney(cartItemsTotal + 3.5)

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navegate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navegate('/orderConfirmed',{
      state: data,
    })
  }



  return (
    <FormProvider {...confirmOrderForm}>
      <Container onSubmit={handleSubmit(handleConfirmOrder)}>
        <CompleteOrderForm />
        <CoffeCardContainer>
          <strong>Cafés selecionados</strong>
          <Wrapper>
            {
              cartItems.map(item => (
                <CoffeesSelected key={item.id} coffee={item} />
              ))
            }
            <Total>
              <div>
                <span>Total de Itens</span>
                <span>R$ {formattedPrice}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R${formattedTotalPrice}</strong>
              </div>
            </Total>
            <Button
              disabled={cartQuantity <= 0}
              type='submit'
            >
              Confirmar Pedido
            </Button>
          </Wrapper>
        </CoffeCardContainer>
      </Container>
    </FormProvider>
  )
}
const Container = styled.form`
  display: grid;
  grid-template-columns: 34rem 1fr;
  gap: 2rem;
  padding-bottom:2rem;
  margin-top: -2rem;
  font-family:cursive;
  margin-top: 5.5rem;
  @media (max-width: 1050px){
    grid-template-columns: 1fr;}
`
const CoffeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Total = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 1rem;
  
  div{
    display: flex;
    justify-content: space-between;
    span{
      font-size: 0.9rem;
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
`
const Button = styled.button`
  border: 2px solid black;
  background-color: #ffb428a8;
  border-radius: 8px;
  padding: 0.5rem 0rem;
  margin: 1rem;
  cursor: pointer;
  font-family:cursive;

`