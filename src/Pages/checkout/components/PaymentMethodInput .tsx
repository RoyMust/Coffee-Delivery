import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
});

export const PaymentMethodContainer = styled.div`
  
  input {
    visibility: hidden;
    appearance: none;
  }
  input:checked + label div {
    ${({ theme }) => css`
      color: white;
      background: #eaaf41;
      border-color: ${theme.colors["brand-purple"]};
      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 0 0.7rem;
  margin: 0 3px;
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  transition: 0.4s;
  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
  user-select: none;
`;