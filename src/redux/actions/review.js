import axios from 'axios';
import {
  SET_REVIEWS,
  REFRESH_REVIEWS,
  ADD_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
  SET_SORT_OPTION,
} from './types';

const SERVER_LESS_API = 'https://asia-northeast3-team-projects-343711.cloudfunctions.net/balaan-crawler-dev-contents';

export const setReviews = (pageNo, perPage) => {
  const request = axios
    .get(SERVER_LESS_API, { params: { pageNo, perPage } })
    .then((res) => res.data)
    .catch((error) => error);
  return {
    type: SET_REVIEWS,
    payload: request,
  };
};

export const refreshReviews = (datas) => ({
  type: REFRESH_REVIEWS,
  payload: datas,
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
