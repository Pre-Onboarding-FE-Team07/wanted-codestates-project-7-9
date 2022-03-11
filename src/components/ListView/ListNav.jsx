import styled from 'styled-components';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ListNav({ title }) {
  const navigate = useNavigate();
  const prevClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Arrow onClick={prevClick} />
      <Item>{title}</Item>
      <Close onClick={prevClick} />
    </Container>
  );
}

export default ListNav;

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

ListNav.propTypes = {
  title: PropTypes.string.isRequired,
};
