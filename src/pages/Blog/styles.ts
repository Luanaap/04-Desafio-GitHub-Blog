import { styled } from "styled-components";

export const ListSection = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 2.5rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 1rem 2rem;
`;