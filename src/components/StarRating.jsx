import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { useState } from "react";

function StarRating() {
  const starArr = [1, 2, 3, 4, 5];
  const [hover, setHover] = useState(0);
  const [starNum, setStarNum] = useState(0);

  return (
    <Rating>
      {starArr.map((idx) => (
        <Star
          key={idx}
          onClick={() => setStarNum(idx)}
          onMouseEnter={() => setHover(idx)}
          onMouseLeave={() => setHover(0)}
          fill={idx <= (hover || starNum) ? "#000" : "#E5E5E5"}
        />
      ))}
    </Rating>
  );
}

export default StarRating;

const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Star = styled(FiStar)`
  font-size: 50px;
  color: transparent;
`;
