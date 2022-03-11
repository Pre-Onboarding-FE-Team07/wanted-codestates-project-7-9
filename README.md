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

#### 구현한 방법

#### 어려웠던 점 (에러 핸들링)


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
