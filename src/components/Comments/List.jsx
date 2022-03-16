import { FiCornerDownRight } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Write from './Write';

function List({ comments, productId, index }) {
  return (
    <>
      {comments.map((commentItem) => (commentItem.target === null ? (
        <Comment key={parseInt(commentItem.idx, 10)}>
          <h4>{commentItem.username}</h4>
          <p>{commentItem.comment}</p>
        </Comment>
      ) : (
        <Comment key={parseInt(commentItem.idx, 10)} reply="replay">
          <Top>
            <ReplyIcon />
            <h4>{commentItem.username}</h4>
          </Top>
          <p>{commentItem.comment}</p>
        </Comment>
      )))}
      <Write comments={comments} productId={productId} index={index} />
    </>
  );
}

export default List;

const Top = styled.div`
  display: flex;
`;

const ReplyIcon = styled(FiCornerDownRight)`
  font-size: 15px;
  margin-right: 0.5rem;
`;

const Comment = styled.div`
  padding: 1rem 1.6rem;
  ${(props) => props.reply
    && css`
      padding-left: 3rem;
    `}
`;

List.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  productId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
