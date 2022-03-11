import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import GridView from './GridView';
import ListView from './ListView/ListView';

const iconList = [
  { index: 0, icon: <BsGrid3X3 /> },
  { index: 1, icon: <BsViewList /> },
];

const sortRandom = (arr) => arr.sort(() => Math.random() - 0.5);
const sortLikes = (arr) => arr.sort((a, b) => a.likes - b.likes);
const sortComments = (arr) => arr.sort((a, b) => a.comments.length - b.comments.length);

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);
  const reviewList = useSelector((state) => state.review.reviews);
  const sortOption = useSelector((state) => state.review.sortOption);
  const [sortedReviews, setSortedReviews] = useState(reviewList);
  useEffect(() => {
    setSortedReviews(reviewList);
  }, [reviewList]);
  useEffect(() => {
    if (sortOption) {
      const originReviews = [...reviewList];
      switch (sortOption) {
        case '좋아요 많은순':
          return setSortedReviews(sortLikes(originReviews));
        case '댓글 많은순':
          return setSortedReviews(sortComments(originReviews));
        case '랜덤순':
          return setSortedReviews(sortRandom(originReviews));
        default:
          return setSortedReviews(originReviews);
      }
    } else {
      return false;
    }
  }, [sortOption, reviewList]);

  return (
    <TabWrap>
      <TabRow>
        {iconList.map(({ icon, index }) => (
          <TabItem
            selected={currentTab === index}
            key={index}
            index={index}
            onClick={() => setCurrentTab(index)}
          >
            {icon}
          </TabItem>
        ))}
      </TabRow>
      {currentTab === 0 ? <GridView datas={sortedReviews} /> : <ListView />}
    </TabWrap>
  );
}

export default Tab;
const TabWrap = styled.section``;

const TabRow = styled.section`
  width: 100%;
  height: auto;
  display: flex;
`;

const TabItem = styled.button`
  flex: 1;
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ selected }) => (selected ? '#000' : '#b3b3b3')};
  > svg {
    width: auto;
    height: ${({ index }) => (index === 0 ? '1.8rem' : '2rem')};
    margin-top: 0.2rem;
    opacity: ${({ selected }) => (selected ? 1 : 0.3)};
  }
`;
