import { FiThumbsUp, FiShare2, FiHeart } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function SocialArea({ likes }) {
  return (
    <InfoBottom>
      <Left>
        <Like>
          <LikeIcon />
          <LikeNumber>{likes}</LikeNumber>
        </Like>
        <Share />
      </Left>
      <Heart />
    </InfoBottom>
  );
}

export default SocialArea;

const InfoBottom = styled.div`
  padding: 1.5rem 3rem 1.9rem 1.6rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  vertical-align: center;
`;

const Like = styled.div`
  cursor: pointer;
`;

const LikeIcon = styled(FiThumbsUp)`
  font-size: 30px;
  fill: ${(props) => props.theme.color.unselectedgray};
  color: ${(props) => props.theme.color.whitegray};
  ${(props) => props.black
    && css`
      fill: ${props.theme.color.black};
    `}
`;

const LikeNumber = styled.p`
  color: ${(props) => props.theme.color.unselectedgray};
  padding: 0.2rem;
`;

const Share = styled(FiShare2)`
  font-size: 30px;
  padding-top: 0.3rem;
  margin-left: 1.6rem;
`;

const Heart = styled(FiHeart)`
  font-size: 30px;
  fill: ${(props) => props.theme.color.unselectedgray};
  color: transparent;
  ${(props) => props.black
    && css`
      fill: ${props.theme.color.black};
    `}
`;

SocialArea.propTypes = {
  likes: PropTypes.string.isRequired,
};
