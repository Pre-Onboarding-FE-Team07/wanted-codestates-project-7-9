import styled, { css } from 'styled-components';
import { FiStar } from 'react-icons/fi';
import PropTypes from 'prop-types';

function Stars({ stars }) {
  const blackArr = Array.from({ length: stars }, (v, i) => i);
  const whiteArr = Array.from({ length: 5 - stars }, (v, i) => i);
  return (
    <Rating>
      {blackArr.map((index) => (
        <Star black="black" key={index} />
      ))}
      {whiteArr.map((idx) => {
        const index = idx + 1;
        return <Star key={index} />;
      })}
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

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
};
