import {
  REVIEWS,
  ADD_REVIEW,
  LIKE_REVIEW,
  UNLIKE_REVIEW,
} from "../actions/types";

const initialState = {
  reviews: [],
};
export default function review(state = initialState, action = {}) {
  switch (action.type) {
    case REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ADD_REVIEW: {
      console.log(action.payload);
      console.log(state.reviews);
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    }
    case LIKE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((data) => (data.postNumber === action.payload
          ? { ...data, likes: data.likes + 1 }
          : data)),
      };
    case UNLIKE_REVIEW:
      return {
        ...state,
        reviews: state.reviews.map((data) => (data.postNumber === action.payload
          ? { ...data, likes: data.likes - 1 }
          : data)),
      };
    default:
      return state;
  }
}
