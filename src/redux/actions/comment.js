import {
  COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT,
} from './types';

export const comments = (datas) => ({
  type: COMMENTS,
  payload: datas,
});

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  payload: commentId,
});
