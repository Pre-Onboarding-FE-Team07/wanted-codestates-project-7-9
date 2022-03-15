# BALAAN 리뷰 서비스

새로운 리뷰를 등록하고 BALAAN 상품의 리뷰 및 등록한 리뷰를 확인할 수 있는 서비스입니다.

## 사용한 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/> <img src="https://img.shields.io/badge/Redux-7248B6.svg?&style=for-the-badge&logo=Redux&logoColor=fff"/> <img src="https://img.shields.io/badge/Styled Components-E6526F.svg?&style=for-the-badge&logo=StyledComponents&logoColor=fff"/>

## 프로젝트 실행 방법

- 배포 사이트 : https://ballan-review.netlify.app/
- 로컬 
1. `git clone https://github.com/Pre-Onboarding-FE-Team07/wanted-codestates-project-7-9.git`
2. `npm install`
3. `npm run start`

   
## 프로젝트 구조

```
--📁 src
  ---📁 components ➡ 컴포넌트 폴더
  ---📁 constants ➡ 전역 상수 폴더
  ---📁 hooks ➡ custom hooks 폴더
  ---📁 pages ➡ 페이지 컴포넌트 폴더
  ---📁 redux ➡ redux 폴더
  ---📁 styles ➡ 스타일 관련 파일 폴더
```

## 팀 멤버

| 이름                                       | 직책 | 역할                                       |
| ------------------------------------------ | ---- | ----------------------------------- |
| [🔨이예지](https://github.com/Lee-ye-ji)   | 팀장| 개발 환경 구축 및 리뷰 상세 페이지, Header 구현 |
| [⚡️박진용](https://github.com/jinyongp)   | 팀원 | 리뷰 데이터 크롤링 기능 구현      |       
| [🎨문선경](https://github.com/dev-seomoon) | 팀원 | 무한 스크롤 구현        |
| [✏️예효은](https://github.com/ye-yo)       | 팀원 | redux 구조 세팅 및 그리드 뷰, 정렬 기능 구현            |
| [🚀심채윤](https://github.com/Lela12)      | 팀원 | 리뷰 등록 기능 구현             |


---

## 구현한 기능 목록

- 리뷰 등록 및 별점 매기기 기능
- 데이터 크롤링
- 무한 스크롤
- 리뷰 목록(그리드뷰/리스트뷰)
- 리뷰 정렬
- 리뷰 상세 페이지
- 좋아요, 찜, 공유 기능
---

## 이예지

개발 환경 구축 및 리뷰 상세 페이지 및 댓글 기능, Header 구현

### 구현한 방법

리스트 뷰 및 상세 페이지 레이아웃이 유사하기에 같이 components로 작게 나누어서 개발하면 재사용할 수 있겠다는 생각이 들었습니다. 그래서 아래의 파일구조로 개발을 하였고, 각각 상세 페이지의 댓글 기능을 제외하고 똑같이 구현하였습니다. 
```
📁 Comments
	📝 - List.jsx 댓글 리스트 출력 컴포넌트
	📝 - Write.jsx 댓글 작성하는 컴포넌트
📁 ListView
	📝 - Content.jsx 후기 내용 컴포넌트
	📝 - Desc.jsx 후기 제목 또는 상품 정보 컴포넌트
	📝 - Image.jsx - 해당 이미지가 보이는 부분(사진이 2개이상이면 carosel)
    📝 - InfoTop.jsx - 아이디 또는 작성 날짜 컴포넌트
    📝 - ListView.jsx - 리스트 뷰 페이지
    📝 - SocialArea.jsx - 찜하기, 좋아요, 공유에 대한 컴포넌트
    📝 - Stars.jsx - 평점 출력 컴포넌트
```
또한 Redux를 이용하여 해당 데이터를 불러오고 수정할 수 있게 하였습니다.
이외에도 좋아요 기능 시에 count가 올라가고, 하트 모양을 누르면 찜하기가 되었다는 문구가 나올 수 있게 구현하였습니다.


### 어려웠던 점 (에러 핸들링)

**중복 배열 키 값**
무한 스크롤 구현 시 기존에 있던 데이터와 새로 불러오는 데이터가 합쳐져서 중복 키 값이 발생하였고, 중복된 데이터를 reduce함수를 이용하여 제거해주었습니다.
```js
[...state.reviews, ...action.payload].reduce(
          (acc, current) => {
            if (acc.findIndex(({ id }) => id === current.id) === -1) {
              acc.push(current);
            }
            return acc;
          },
          [],
        ),
```
`배열.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초깃값);`으로 구성되기 때문에 현재 id와 누적된 id값과 비교하여 같은 값이 없다면 acc에 넣어준 후 마지막에 acc를 리턴해주는 방식으로 코드를 작성하였습니다.

**댓글 추가 기능**
디테일 페이지에서 보이는 댓글의 값을 추가하는 과정에서 어떻게 로직을 짜야 값이 바뀌는 지에 대해 막막하였습니다. 세부 페이지가 product의 하나만 보이는 페이지라면 comments배열을 받아와서 변경한 comments의 state의 변경해주고 값을 보여주는 형식으로 짜면 되었지만, 세부 페이지는 사용자가 클릭한 상품이 맨 위로 올라가고, 그 뒤에 다른 상품들이 보이는 페이지였기에 더 어려웠습니다. 그래서 매개변수로 총 4가지가 필요했습니다. 추가된 댓글 데이터 정보, 사용자가 보고 있었던 상품에 대한 데이터, 클릭한 상품의 product id값, 사용자가 클릭한 상품의 index 값(newCommentArr, detailList, productId, index) 이렇게 4가지가 필요하였습니다.
* **1) 사용자가 클릭한 상품 정보 찾기**
사용자가 보고 있었던 모든 데이터 중에서 사용자가 클릭한 상품의 정보만 찾기 위해서 productId를 통해 filter함수로 해당 정보를 찾았습니다.
`const newChangeObj = detailList.filter((item) => item.id === productId);`
* **2) 추가된 댓글 넣어주기**
앞서 댓글 추가하려는 데이터를 가지고 와서 기존의 배열과 합쳐주었습니다.
`newChangeObj[0].comments = [...newChangeObj[0].comments, newComment];`
* **3) 변경된 댓글 상품 정보 기존에 상품 정보에 넣어주기**
변경된 상품에 대한 정보를 제외하고 기존의 정보들은 변경되지 않았기에 slice 함수를 이용하여 전체 데이터를 나눈 후 변경된 정보만 넣어주었습니다.
```
  const newDetail = [
    ...detailList.slice(0, index),
    ...newChangeObj,
    ...detailList.slice(index + 1, detailList.length),
  ];
```

총 해당되는 전체코드는 아래와 같습니다.
```js
export const detailAddComment = (
  newComment,
  detailList,
  productId,
  index,
) => {
  const newChangeObj = detailList.filter((item) => item.id === productId);
  newChangeObj[0].comments = [...newChangeObj[0].comments, newComment];
  const newDetail = [
    ...detailList.slice(0, index),
    ...newChangeObj,
    ...detailList.slice(index + 1, detailList.length),
  ];
  return {
    type: DETAIL_ADD_COMMENT,
    payload: newDetail,
  };
};
```

## 박진용

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


## 문선경

### 구현한 방법

### 어려웠던 점 (에러 핸들링)


## 예효은

redux 구조 세팅 및 그리드뷰, 정렬 기능 구현
### 구현한 방법
#### Redux 구조 세팅
redux를 지난 프로젝트에서 사용해봤었는데, 당시에는 제가 구현하는 부분에서 사용할 경험이 적어 redux에 대한 이해가 많이 부족하다고 느꼈습니다. 마침 이번에 redux가 필수 기술 스택으로 지정되어 제가 직접 redux 구조 세팅을 지원하였습니다. 지난 프로젝트에서 팀원분이 구현해놓으신 구조들을 참고하며 구현해나갔으며 폴더 구조는 크게 아래와 같이 구성하였습니다.
```
-- redux
  ---📂 actions : 액션 생성 함수 폴더
  ---📂 reducers : 리듀서 폴더
  store.js 
```
**actions** 폴더는 액션 생성 함수들을 관리하는 폴더로 `types.js, comment.js, review.js` 파일들을 가지고 있고 `comment.js, review.js`는 각각 댓글, 리뷰와 관련된 액션 생성 함수들을 작성해두고 `types.js`에서 `action type`을 관리하였습니다.

**reducers** 폴더는 `index.js comment.js, review.js` 파일들을 가지고 있고, `comment.js, review.js`에는 각각 comment, review의 리듀서를 정의해두었습니다. `index.js`는 여러 개의 reducer를 병합하여 rootReducer로 내보내는 역할을 합니다.

**store.js**에서는 store을 생성하며 action을 객체가 아닌 promise 혹은 함수 형태로 받을 수도 있기 때문에 이를 위해 redux-promise, redux-thunk 미들웨어를 연결해주었습니다.

확실히 직접 구조를 작성해보니 이해가 수월했고 처음에는 세부적으로 분리하여 작성하는 방식이 어렵고 복잡해보이기도 했는데, 직접 개발하면서 redux를 사용해보니 처음에 구조를 잘 작성해놓으면 추후에 사용하는 입장에서는 매우 간편하게 state를 업데이트하고 가져올 수 있다는 것을 직접 느꼈습니다! 또한 복잡한 구조로 인해 진입 장벽이 높아 기존에는 선호하지 않았었는데 한 번 더 사용해보고 싶을만큼 redux에 대해 좋은 경험을 한 것 같습니다.

#### 그리드 뷰 및 정렬 기능
grid view는 `<GridView/>` 컴포넌트를 구현하여 완성했고, 처음에는 자주 사용하던 `flex`를 이용하여 구현했으나 `grid`로 구현해봐도 좋을 것 같다는 제안을 받아 `grid`를 이용해서도 구현해보았습니다. 

정렬 기능은 컴포넌트를 많이 분리해서 개발하였는데, 각 컴포넌트의 용도는 다음과 같습니다.
- `<SortBar/>` : 정렬 기능 영역 컨테이너
- `<Selector/>` : 옵션 선택 버튼
- `<RadioOption/>`: custom radio 버튼
- `<SortModal/>` : 옵션 선택 버튼을 클릭했을 때 나타나는 옵션 목록 모달창
컴포넌트는 `styled-components`를 활용하여 수월하게 만들 수 있었고, 컴포넌트가 많이 분리되었기 때문에 `sortOption` state를 review store에 추가하여 현재 선택된 옵션을 쉽게 제어할 수 있도록 하였습니다.

### 어려웠던 점 (에러 핸들링)
custom radio button을 구현해서 테스트해보니 불필요한 렌더링이 발생하는 것을 발견하였습니다. 
예를 들어 1,2,3,4 와 같은 라디오 버튼이 있을 때, 현재 선택된 버튼은 1이고, 이 상태에서 4를 선택할 경우 1 => off, 4 => on 으로 1과 4 라디오 버튼만 재렌더링이 이루어져야 합니다. 
하지만 모든 버튼이 재렌더링이 이루어지고 있는 것을 log를 남겨 확인했고 불필요한 렌더링을 해결하기 위해 `React.memo`와 `useCallback`을 사용하기로 했습니다.

`React.memo`는 현재 컴포넌트의 렌더링 결과를 메모이징(Memoizing)하기 때문에 이를 `<RadioOption/>` 컴포넌트에 적용하고, `<RadioOption/>` 컴포넌트를 클릭했을 때 현재 선택된 option state를 변경하는 함수를 `useCallback`으로 감싸서 `<RadioOption/>`의 props로 전달했습니다. 이렇게 되면 `useCallback`으로 감싼 함수는 재선언되지 않기 때문에(dependency 배열로 빈 배열 전달) `<RadioOption/>`의 props는 checked 값이 변하지 않는 이상 변경될 일이 없고 때문에 `<RadioOption/>`의 재렌더링도 `checked` props가 변경되었을 때만 일어나게 됩니다. 

이번 에러 핸들링을 통해서 `React.memo`의 사용법, `useCallback`의 적절한 사용 위치 등을 경험해 볼 수 있었고, 실제로 log를 통해 불필요한 재렌더링을 막은 변화를 관찰할 수 있었기 때문에 보다 쉽게 이해할 수 있었습니다.

## 심채윤

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)
