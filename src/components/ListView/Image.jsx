import styled from "styled-components";
import PropTypes from "prop-types";

function Image({ src }) {
  return (
    <ImageArea>
      <Img src={src} alt="img" />
    </ImageArea>
  );
}

export default Image;

const ImageArea = styled.div`
  max-width: 500px;
`;

const Img = styled.img`
  max-width: 500px;
`;

Image.propTypes = {
  src: PropTypes.string.isRequired,
};
