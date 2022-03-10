import styled from 'styled-components';
import PropTypes from 'prop-types';

function InfoTop({ username, createdAt }) {
  return (
    <Top>
      <Id>{username}</Id>
      <Date>{createdAt}</Date>
    </Top>
  );
}

export default InfoTop;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 1.6rem 2rem;
`;

const Id = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const Date = styled.span`
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.gray};
`;

InfoTop.propTypes = {
  username: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
