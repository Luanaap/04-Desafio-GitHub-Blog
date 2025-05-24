import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 0;
  padding: 0 1.5rem;

  div {
   display: flex ;
   justify-content: space-between;
   span {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 160%;
    color: ${props => props.theme['base-subtitle']};
  }
  small {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${props => props.theme['base-span']};
   }
  }


  input {
        margin-top: 0.75rem;
        background: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;
        padding: 0.75rem 1rem;
        width: 100%;
        color: ${props => props.theme['base-text']};

        &::placeholder {
          color: ${props => props.theme['base-label']};
        }

        &:focus {
          outline: none;
          border: 1px solid ${props => props.theme.blue};
          color: ${props => props.theme['base-text']};
        }

        &:focus::placeholder {
        color: ${props => props.theme['base-text']};
      }
    }
`;