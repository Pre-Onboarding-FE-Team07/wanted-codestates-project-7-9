import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiXCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { customAlphabet } from 'nanoid';
import moment from 'moment';
import StarRating from '../components/StarRating';
import { addReview } from '../redux/actions/review';
import ModalNav from '../components/ListNav';

function ReviewRegisterPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photoAddList, setPhotoAddList] = useState([]);
  const [starCount, setStarCount] = useState(0);

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const nanoid = customAlphabet('0123456789', 6);

  const photoInput = useRef();

  const handleUploadClick = () => {
    photoInput.current.click();
  };

  const handlePhoto = (e) => {
    const photoAdd = e.target.files;
    const temp = [];

    for (let i = 0; i < photoAdd.length; i += 1) {
      temp.push({
        id: i,
        // file: photoAdd[i],
        src: URL.createObjectURL(photoAdd[i]),
      });
    }
    setPhotoAddList(temp.concat(photoAddList));
  };

  const RemoveAdd = (deleteUrl) => {
    setPhotoAddList(photoAddList.filter((photo) => photo.url !== deleteUrl));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addReview({
        id: String(nanoid()),
        images: photoAddList,
        username: 'Team7',
        review: title,
        description: content,
        likes: '0',
        stars: starCount,
        comments: [],
        hashTags: [],
        createdAt: moment().format('YYYY-MM-DD'),
      }),
    );
    navigator('/');
  };

  return (
    <Register>
      <ModalNav title="리뷰 등록하기" />
      <Container onSubmit={handleSubmit}>
        <TitleContainer>
          <Title>제목</Title>
          <TitleContent
            placeholder="리뷰 제목을 입력해주세요."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </TitleContainer>
        <ContentContainer>
          <Title>내용</Title>
          <Content
            placeholder="내용을 작성해주세요."
            onChange={(e) => {
              setContent(e.target.value);
            }}
            value={content}
          />
        </ContentContainer>

        <ImageContainer>
          <ImageTitle>
            <Title>이미지 업로드</Title>
          </ImageTitle>
          <input
            type="file"
            accept="image/jpg,image/jpeg, image/png"
            onChange={(e) => handlePhoto(e)}
            multiple
            ref={photoInput}
            style={{ display: 'none' }}
          />
          <ImageAdd>
            <UploadButton onClick={handleUploadClick}>+</UploadButton>

            <ImageBox>
              {photoAddList.map((photo) => (
                <PhotoBox key={photo.id}>
                  <PhotoPreview src={photo.src} />
                  <FiXCircle onClick={() => RemoveAdd(photo.src)} />
                </PhotoBox>
              ))}
            </ImageBox>
          </ImageAdd>
        </ImageContainer>

        <StarContainer>
          <StarTitle>상품은 어떠셨나요?</StarTitle>
          <StarRating setStarCount={setStarCount} starCount={starCount} />
        </StarContainer>

        <RegisterButton type="submit">등록하기</RegisterButton>
      </Container>
    </Register>
  );
}

export default ReviewRegisterPage;

const Register = styled.div`
  position: absolute;
  top: 0;
  z-index: 50;
  background-color: ${(props) => props.theme.color.white};
  width: 100%;
`;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  padding: 30px;
  padding-top: 5rem;
  gap: 2rem;
`;

const TitleContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;

const TitleContent = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #9da6a9;
  text-indent: 1rem;

  :placeholder-shown {
    color: ${(props) => props.theme.color.lightgray};
    text-indent: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Content = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #9da6a9;
  text-indent: 1rem;
  padding-top: 10px;
  resize: none;

  :placeholder-shown {
    color: ${(props) => props.theme.color.lightgray};
    text-indent: 1rem;
    padding-top: 10px;
  }
`;

const ImageContainer = styled.div``;
const ImageTitle = styled.div`
  margin-bottom: 1rem;
`;

const UploadButton = styled.span`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  font-size: 3em;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoBox = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-right: 5px;
`;

const PhotoPreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageAdd = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StarContainer = styled.div`
`;

const StarTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const RegisterButton = styled.button`
  width: 100%;
  height: 70px;
  border: none;
  border-radius: 5px;
  font-size: 1.6rem;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
`;
