import styled from "styled-components";
import PropTypes from "prop-types";

function Desc({ description }) {
  return <Description>{description}</Description>;
}

export default Desc;

const Description = styled.p`
  padding: 0 1.6rem;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.color.gray};
`;

Desc.propTypes = {
  description: PropTypes.string.isRequired,
};
