import styled, { css } from 'styled-components';
import { FiStar } from 'react-icons/fi';
import PropTypes from 'prop-types';

function Stars({ stars }) {
  return (
    <Rating>
      {[...Array(stars)].map(() => (
        <div>
          <Star black />
        </div>
      ))}
      {[...Array(5 - stars)].map(() => (
        <div>
          <Star />
        </div>
      ))}
    </Rating>
  );
}

export default Stars;

const Rating = styled.div`
  padding: 1rem 1.6rem;
  display: flex;
`;

const Star = styled(FiStar)`
  font-size: 30px;
  fill: ${(props) => props.theme.color.unSelectedGray};
  color: transparent;
  ${(props) => props.black
    && css`
      fill: ${props.theme.color.black};
    `}
`;

Stars.propTypes = {
  stars: PropTypes.number.isRequired,
};
