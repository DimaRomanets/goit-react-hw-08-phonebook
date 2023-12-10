import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: gold;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 6px 6px;
  border: none;
  cursor: pointer;
  background-color: inherit;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;

  &:hover {
    color: gold;
  }
`;
