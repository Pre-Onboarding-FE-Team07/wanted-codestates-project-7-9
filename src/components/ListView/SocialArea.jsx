import { useState, useCallback } from 'react';
import { FiThumbsUp, FiShare2, FiHeart } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Message from '../Message';

function SocialArea({ likes }) {
  const [likeArr, setlikeArr] = useState([likes, undefined]);
  const [heartArr, setHeartArr] = useState([false, undefined]);

  const likeClick = useCallback(() => {
    const changeToNum = parseInt(likeArr[0], 10);
    if (changeToNum === parseInt(likes, 10)) {
      setlikeArr([changeToNum + 1, 'black']);
    } else {
      setlikeArr([changeToNum - 1, undefined]);
    }
  }, [likeArr, likes]);

  const heartClick = useCallback(() => {
    if (heartArr[0]) {
      setHeartArr([!heartArr[0], 'black']);
    } else {
      setHeartArr([!heartArr[0], undefined]);
    }
  }, [heartArr]);

  return (
    <InfoBottom>
      <Left>
        <Like onClick={likeClick}>
          <LikeIcon black={likeArr[1] ? 'black' : undefined} />
          <LikeNumber black={likeArr[1] ? 'black' : undefined}>
            {likeArr[0]}
          </LikeNumber>
        </Like>
        <Share />
      </Left>
      {heartArr[0] ? (
        <>
          <Message>🤍찜하기를 눌렀습니다🤍</Message>
          <Heart black="black" onClick={heartClick} />
        </>
      ) : (
        <Heart black={undefined} onClick={heartClick} />
      )}
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
  fill: ${(props) => props.theme.color.unSelectedGray};
  color: ${(props) => props.theme.color.white};
  ${(props) => props.black
    && css`
      fill: ${props.theme.color.black};
      color: ${props.theme.color.white};
    `}
`;

const LikeNumber = styled.p`
  color: ${(props) => props.theme.color.unSelectedGray};
  padding: 0.2rem;
  ${(props) => props.black
    && css`
      color: ${props.theme.color.black};
    `}
`;

const Share = styled(FiShare2)`
  font-size: 30px;
  padding-top: 0.3rem;
  margin-left: 1.6rem;
`;

const Heart = styled(FiHeart)`
  font-size: 30px;
  fill: ${(props) => props.theme.color.unSelectedGray};
  color: transparent;
  ${(props) => props.black
    && css`
      fill: ${props.theme.color.black};
    `}
`;

SocialArea.propTypes = {
  likes: PropTypes.string.isRequired,
};
