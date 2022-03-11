import Content from './Content';
import Desc from './Desc';
import Image from './Image';
import InfoTop from './InfoTop';
import SocialArea from './SocialArea';
import Stars from './Stars';
import Data from '../../data/data.json';

function ListView() {
  return (
    <>
      {Data.map((item) => (
        <div key={item.id}>
          <div>
            <InfoTop username={item.username} createdAt={item.createdAt} />
            <Image src={item.src} />
            <SocialArea likes={item.likes} />
            <Stars stars={item.stars} />
            <Desc description={item.description} />
            <Content review={item.review} />
          </div>
        </div>
      ))}
    </>
  );
}

export default ListView;
