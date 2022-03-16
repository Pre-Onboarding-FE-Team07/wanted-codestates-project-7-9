import axios from 'axios';
import {
  SET_REVIEWS,
  REFRESH_REVIEWS,
  ADD_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  SET_SORT_OPTION,
  DETAIL_REVIEW,
  DETAIL_ADD_COMMENT,
} from './types';

const SERVER_LESS_API = 'https://asia-northeast3-team-projects-343711.cloudfunctions.net/balaan-crawler-dev-contents';

export const setReviews = async (pageNo, perPage, sort, isInit) => {
  const request = await axios
    .get(SERVER_LESS_API, { params: { pageNo, perPage, sort: sort?.value } })
    .then((res) => res.data)
    .catch((error) => error);
  return {
    type: SET_REVIEWS,
    payload: request,
    options: {
      pageNo,
      perPage,
      sort,
      isInit,
    },
  };
};

export const refreshReviews = () => ({
  type: REFRESH_REVIEWS,
});

export const addReview = (review) => ({
  type: ADD_REVIEW,
  payload: review,
});

export const likeReview = (postNumber) => ({
  type: LIKE_REVIEW,
  payload: postNumber,
});

export const unlikeReview = (postNumber) => ({
  type: UNLIKE_REVIEW,
  payload: postNumber,
});

export const setSortOption = (sortOption) => ({
  type: SET_SORT_OPTION,
  payload: sortOption,
});

export const detialReview = (id, reviewList) => ({
  type: DETAIL_REVIEW,
  payload: [
    ...reviewList.filter((item) => item.id === id),
    ...reviewList.filter((item) => item.id !== id),
  ],
});

export const detailAddComment = (
  newCommentArr,
  detailList,
  productId,
  index,
) => {
  const newChangeObj = detailList.filter((item) => item.id === productId);
  newChangeObj[0].comments = newCommentArr;
  const newDetail = [
    ...detailList.slice(0, index),
    ...newChangeObj,
    ...detailList.slice(index + 1, detailList.length),
  ];
  return {
    type: DETAIL_ADD_COMMENT,
    payload: newDetail,
  };
};
