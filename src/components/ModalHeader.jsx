import styled from "styled-components";
import { FiArrowLeft, FiX } from "react-icons/fi";
import PropTypes from "prop-types";

function ModalHeader({ title }) {
  return (
    <Container>
      <Arrow />
      <Item>{title}</Item>
      <Close />
    </Container>
  );
}

export default ModalHeader;

const Container = styled.header`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(204 204 204) 0px 0px px 0px;
  background-color: ${(props) => props.theme.color.white};
  position: fixed;
  width: 500px;
`;

const Item = styled.div`
  padding: 15px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const Arrow = styled(FiArrowLeft)`
  font-size: 45px;
  padding-left: 1.6rem;
`;

const Close = styled(FiX)`
  font-size: 45px;
  padding-right: 1.6rem;
`;

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
