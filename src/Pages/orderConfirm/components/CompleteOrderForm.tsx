import styled from "styled-components"
import { IoLocation } from 'react-icons/io5'
import { CreditCard, Money, Bank } from "phosphor-react";
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { useFormContext } from 'react-hook-form';
import * as zod from 'zod'
import { confirmOrderFormValidationSchema } from "../../checkout/Checkout";
import { PaymentMethodInput } from "../../checkout/components/PaymentMethodInput ";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

type CompleteOrderFormInputs = zod.infer<typeof confirmOrderFormValidationSchema>

export default function CompleteOrderForm() {

  const { register } = useFormContext<CompleteOrderFormInputs>()

  return (
    <Container>
      <strong>Complete o seu pedido</strong>
      <ClientForm>
        <header>
          <div style={{ display: 'flex', gap: '3px' }}>
            <IoLocation color='orange' size={18} />
            <div style={{ flexDirection: 'column' }}>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber o pedido</p>
            </div>
          </div>
        </header>
        <form>
          <input style={{ gridColumnStart: '1', gridColumnEnd: '2' }} type="text" placeholder='CEP' className="cep"{...register('cep')} />
          <input style={{ gridColumnStart: '1', gridColumnEnd: '4' }} type="text" placeholder='Rua' className="street" {...register('street')} />
          <input style={{ gridColumnStart: '1', gridColumnEnd: '2' }} type="number" placeholder='Número' {...register('number')} />
          <input style={{ gridColumnStart: '2', gridColumnEnd: '4' }} type="text" placeholder='Complemento (Opcional)' {...register('complement')} />
          <input type="text" placeholder='Bairro' {...register('district')} />
          <input type="text" placeholder='Cidade' {...register('city')} />
          <input type="text" placeholder='UF' {...register('uf')} />
        </form>
      </ClientForm>
      <Payment>
        <div style={{ display: 'flex', gap: '3px' }}>
          <RiMoneyDollarCircleLine color='orange' size={18} />
          <div style={{ flexDirection: 'column' }}>
            <strong>Pagamento</strong>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p></div>
        </div>

        <Buttons>
         
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
              <PaymentMethodInput
                key={label}
                id={key}
                icon={icon}
                label={label}
                value={key}
                {...register("paymentMethod")}
              />
            ))}
        </Buttons>


      </Payment>
    </Container >
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const ClientForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 1.5rem;
  border-radius: 8px;
  
  @media (max-width: 700px){
      padding: 0;
    }

  header{
    display: flex;
    flex-direction: column;

    p{
      margin-top: 0.2rem;
    }
  }
  form{
    display: grid;
    grid-template-columns: 1fr 2fr 5rem;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0.4rem;

    @media (max-width: 700px){
      display: flex;
      flex-direction: column;
      max-width: 18rem;
      margin: 0 3rem;
    }
    input{
      padding: 0.6rem;
      border-radius: 5px;
      border: none;
      background-color: #ddddddb1;
    }
  }
`
const Payment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 1.5rem;
  border-radius: 8px;
  strong{
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  p{
    margin-top: 0.2rem;
  }
  `
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    padding: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    background-color: #ffb428a8;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover{
      transition: 1s;
      background-color: #f3b704;
    }
  }
  `