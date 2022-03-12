import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect, useRef, useCallback } from 'react';
import Content from './Content';
import Desc from './Desc';
import Image from './Image';
import InfoTop from './InfoTop';
import SocialArea from './SocialArea';
import Stars from './Stars';
import { setReviews } from '../../redux/actions/review';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

let page = 0;
function ListView({ datas }) {
  const navigate = useNavigate();
  const detailPageClick = (id) => {
    navigate(`/details/${id}`);
  };

  const dispatch = useDispatch();
  const listRef = useRef();
  const getMoreItems = useCallback(async () => {
    setLoading(true);
    page += 1;
    await dispatch(setReviews(page, 20, datas));
    setLoading(false);
    // eslint-disable-next-line
  }, [dispatch]);

  const { setContainerRef, setLoading } = useInfiniteScroll({ getMoreItems });

  useEffect(() => {
    getMoreItems();
    setContainerRef(listRef);
  }, [getMoreItems, setContainerRef]);

  return (
    <>
      {datas.map((item) => (
        <ListPage
          ref={listRef}
          key={item.id}
          onClick={() => detailPageClick(item.id)}
          onKeyDown={() => detailPageClick(item.id)}
          aria-hidden="true"
        >
          <InfoTop username={item.username} createdAt={item.createdAt} />
          <Image src={item.images[0].src} />
          <SocialArea likes={item.likes} />
          <Stars stars={item.stars} />
          <Desc description={item.description} />
          <Content review={item.review} />
        </ListPage>
      ))}
    </>
  );
}

export default ListView;

const ListPage = styled.div`
  cursor: pointer;
`;

ListView.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};
