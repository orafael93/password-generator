import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  transition: 0.2s;

  min-width: min(540px, 100%);

  @media (max-width: 480px) {
    padding: 0 16px;
  }

  @media (min-width: 481px) and (max-width: 1200px) {
    padding: 0 50px;
  }
`;
