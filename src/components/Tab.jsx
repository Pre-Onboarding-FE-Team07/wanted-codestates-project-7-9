import { BsGrid3X3, BsViewList } from 'react-icons/bs';
import { useState } from 'react';
import styled from 'styled-components';
import GridView from './GridView';

const iconList = [
  { index: 0, icon: <BsGrid3X3 /> },
  { index: 1, icon: <BsViewList /> },
];

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <TabWrap>
      <TabRow>
        {iconList.map(({ icon, index }) => (
          <TabItem
            selected={currentTab === index}
            key={index}
            index={index}
            onClick={() => setCurrentTab(index)}
          >
            {icon}
          </TabItem>
        ))}
      </TabRow>
      {currentTab === 0 ? <GridView>ddd</GridView> : 'list'}
    </TabWrap>
  );
}

export default Tab;
const TabWrap = styled.section``;

const TabRow = styled.section`
  width: 100%;
  height: auto;
  display: flex;
`;

const TabItem = styled.button`
  flex: 1;
  padding: 0.6rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid ${({ selected }) => (selected ? '#000' : '#b3b3b3')};
  > svg {
    width: auto;
    height: ${({ index }) => (index === 0 ? '1.5rem' : '1.72rem')};
    margin-top: 0.2rem;
    opacity: ${({ selected }) => (selected ? 1 : 0.3)};
  }
`;
