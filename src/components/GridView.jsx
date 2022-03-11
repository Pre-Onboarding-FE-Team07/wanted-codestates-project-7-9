import {
  memo, useEffect, useRef, useCallback,
} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setReviews } from '../redux/actions/review';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
// import useData from '../hooks/useData';

let page = 0;
function GridView({ datas }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listRef = useRef();
  // const fetchData = useData();
  const getMoreItems = useCallback(async () => {
    setLoading(true);
    page += 1;
    await dispatch(setReviews(page, 20));
    setLoading(false);
  }, []);
  const { setContainerRef, setLoading } = useInfiniteScroll({ getMoreItems });

  useEffect(() => {
    getMoreItems();
  }, [getMoreItems]);
  useEffect(() => {
    setContainerRef(listRef);
  }, [setContainerRef]);

  const handleClickImage = (reviewId) => {
    navigate(`/details/${reviewId}`);
  };

  return (
    <GridViewWrap ref={listRef}>
      {datas.map((review) => (
        <ImageBox
          key={review.id}
          onClick={() => handleClickImage(review.id)}
          src={review.images?.[0]?.src}
        />
      ))}
    </GridViewWrap>
  );
}

export default memo(GridView);

GridView.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

const GridViewWrap = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;
  margin-top: 2px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 100%;
  max-height: calc((500px - 2px) / 3);
  object-fit: cover;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    max-height: calc((100vw - 2px) / 3);
  }
`;
