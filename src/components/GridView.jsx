import styled from 'styled-components';

function GridView() {
  const reviews = [];
  const handleClickImage = (reviewId) => {
    // 상세 페이지로 이동
  };

  return (
    <GridViewWrap>
      {reviews.map((review) => (
        <ImageBox
          onClick={() => handleClickImage(review.id)}
          src={review.src}
        />
      ))}
    </GridViewWrap>
  );
}

export default GridView;

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
  @media only screen and (max-width: 500px) {
    max-height: calc((100vw - 2px) / 3);
  }
`;
