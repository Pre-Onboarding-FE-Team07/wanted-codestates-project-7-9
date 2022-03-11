import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Content from './Content';
import Desc from './Desc';
import Image from './Image';
import InfoTop from './InfoTop';
import SocialArea from './SocialArea';
import Stars from './Stars';
import Data from '../../data/data.json';

function ListView() {
  const navigate = useNavigate();
  const detailPageClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <>
      {Data.map((item) => (
        <ListPage
          key={item.id}
          onClick={() => detailPageClick(item.id)}
          onKeyDown={() => detailPageClick(item.id)}
          aria-hidden="true"
        >
          <InfoTop username={item.username} createdAt={item.createdAt} />
          <Image src={item.src} />
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
