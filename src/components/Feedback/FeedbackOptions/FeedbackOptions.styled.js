import { styled } from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;
export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  outline: 2px solid black;
  font-size: 18px;
  text-transform: capitalize;
  cursor: pointer;
  background-color: inherit;
  transition: all 300ms ease-in;
  &:hover {
    scale: 1.1;
    background-color: #5dc4fb;
  }
`;
