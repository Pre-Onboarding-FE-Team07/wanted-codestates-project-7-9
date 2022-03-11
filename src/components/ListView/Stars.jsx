import styled, { css } from 'styled-components';
import { FiStar } from 'react-icons/fi';

function Stars() {
  return (
    <Rating>
      <Star black />
      <Star black />
      <Star black />
      <Star black />
      <Star />
    </Rating>
  );
}

export default Stars;

const Rating = styled.div`
  padding: 1rem 1.6rem;
`;

const Star = styled(FiStar)`
  font-size: 30px;
  fill: ${(props) => props.theme.color.unselected};
  color: transparent;
  ${(props) => props.black
    && css`
      fill: ${props.theme.color.black};
    `}
`;
