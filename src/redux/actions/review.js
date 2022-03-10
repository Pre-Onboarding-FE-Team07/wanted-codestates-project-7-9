import {
  REVIEWS, ADD_REVIEW, LIKE_REVIEW, UNLIKE_REVIEW,
} from './types';

export const reviews = (datas) => ({
  type: REVIEWS,
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
