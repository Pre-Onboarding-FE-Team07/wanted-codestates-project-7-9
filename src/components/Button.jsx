import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border: none;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  border-radius: 3rem;
  padding: 0.7rem 1.2rem;
  font-weight: bold;
`;

export default Button;
