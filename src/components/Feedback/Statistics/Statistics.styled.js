import { styled } from 'styled-components';
export const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Total = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
