import styled from 'styled-components';
import ModalHeader from '../components/ModalHeader';
import InfoTop from '../components/ListView/InfoTop';
import Image from '../components/ListView/Image';
import SocialArea from '../components/ListView/SocialArea';
import Stars from '../components/ListView/Stars';
import Desc from '../components/ListView/Desc';
import Content from '../components/ListView/Content';
import Data from '../data/data.json';

function ReviewDetailsPage() {
  return (
    <Detail>
      <ModalHeader title="리뷰 상세보기" />
      {Data.map((item) => (
        <div key={item.id}>
          <InfoTop username={item.username} createdAt={item.createdAt} />
          <Image src={item.src} />
          <SocialArea likes={item.likes} />
          <Stars />
          <Desc description={item.description} />
          <Content review={item.review} />
        </div>
      ))}
    </Detail>
  );
}

export default ReviewDetailsPage;

const Detail = styled.div`
  position: absolute;
  top: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.color.white};
`;
