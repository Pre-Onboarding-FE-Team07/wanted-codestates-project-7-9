import styled from 'styled-components';
import PropTypes from 'prop-types';

function Write({ comments }) {
  // const ClickButton = () => {
  //   console.log(comments);
  // };

  return (
    <WriteCustom>
      <Input placeholder="댓글 달기" />
      <Button>게시</Button>
    </WriteCustom>
  );
}

export default Write;

const WriteCustom = styled.div`
  border: 1px solid ${(props) => props.theme.color.unselected};
  border-radius: 1rem;
  margin: 1.5rem 3rem 0 1.6rem;
  padding: 0 1.5rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.white};
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 300px;
  padding: 0.5rem 0;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

Write.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
