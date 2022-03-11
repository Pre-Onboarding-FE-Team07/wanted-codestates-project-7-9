import styled from 'styled-components';
import PropTypes from 'prop-types';

function Content({ review }) {
  return <Review>{review}</Review>;
}

export default Content;

const Review = styled.pre`
  padding: 0 1.6rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
  white-space: pre-wrap;
`;

Content.propTypes = {
  review: PropTypes.string.isRequired,
};
